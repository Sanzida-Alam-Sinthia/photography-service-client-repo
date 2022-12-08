import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import UserReviewCard from './UserReviewCard';

const UserReview = ({ id, title }) => {
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`http://localhost:5000/allreviews?service=${id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, []);
    return (
        <div className="pb-16 border-2 border-yellow-400 overflow-hidden">
            <div className="container m-auto px-6 space-y-8  md:px-12">
                <div className='my-14'>
                    <p className='text-4xl font-bold text-center pb-2'>Customers Review About  <span className='text-red-600'>{title}</span></p>
                    <p className='text-center foods-header mt-1  text-white'>Here is the customers review who took {title} service.  They are sharing how my service was. <br /> I try to improve my service after taking their feedback.</p>
                </div>

                <div>
                    {
                        reviews.length === 0
                            ?
                            <div className="flex flex-col items-center p-10">
                                <h5 className="text-xl text-yellow-600  font-bold transition group-hover:text-black feature-title">No Review Yet</h5>
                                <p className="text-sm  text-yellow-600  feature-description">Give The First Review</p>
                            </div>
                            :
                            <div className="mt-16 text-red-600 grid  divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
                                {
                                    reviews.map(review =>
                                        <UserReviewCard
                                            key={review.id}
                                            review={review}
                                        >

                                        </UserReviewCard>)
                                }
                            </div>
                    }
                </div>

            </div>
        </div>
    );
};

export default UserReview;
