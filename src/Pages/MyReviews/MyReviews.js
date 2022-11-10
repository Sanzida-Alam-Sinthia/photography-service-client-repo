import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    const handleReviewDelete = id => {
        const proceed = window.confirm('Want to Delete Your Review?');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Your Review is deleted successfully');
                        const remaining = reviews.filter(odr => odr._id !== id);
                        setReviews(remaining);
                    }
                })
        }

    }
    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...user }
        newUser[field] = value;
        setReviews(newUser);
    }
    const updateReview = id => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ reviewtext: '' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter(odr => odr._id !== id);
                    const approving = reviews.find(odr => odr._id === id);
                    approving.reviewtext = 'Approved'

                    const newReview = [approving, ...remaining];
                    setReviews(newReview);
                }
            })
    }

    return (

        <div>
            {
                reviews.length === 0 && <h2>No Reviews are added</h2>
            }
            <h2 className="text-3xl text-center font-bold mt-8 mb-8">You provided us {reviews.length} reviews</h2>
            <div className="overflow-x-auto w-full m-8 p-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Service Name</th>
                            <th>Cost</th>

                            <th>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <ReviewRow

                                key={review._id}
                                review={review}
                                handleReviewDelete={handleReviewDelete}
                                updateReview={updateReview}
                                handleInputChange={handleInputChange}
                            ></ReviewRow>)

                            // 
                            // 

                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;