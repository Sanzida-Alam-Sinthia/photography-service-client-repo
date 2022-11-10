import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ReviewRow = ({ review, handleReviewDelete, updateReview }) => {
    const { _id, serviceName, price, reviewtext } = review;
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])
    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...user }
        newUser[field] = value;
        setReviews(newUser);
    }
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleReviewDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">

                    <div>
                        <div className="font-bold">{serviceName}</div>

                    </div>
                </div>
            </td>
            <td>
                ${price}
                <br />

            </td>
            <td>{reviewtext}</td>
            <th>

                <button onClick={() => updateReview(_id)} className="btn btn-warning ">

                    <input onChange={handleInputChange} type="text" name='reviewtext' placeholder='Edit Review' required />
                </button>
            </th>
        </tr>
    );
};

export default ReviewRow;