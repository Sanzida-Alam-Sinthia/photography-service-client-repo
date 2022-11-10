import React from 'react';
import { Link } from 'react-router-dom';

const ReviewRow = ({ review, handleReviewDelete, updateReview }) => {
    const { _id, serviceName, price, reviewtext } = review;
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
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td>
                ${price}
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>{reviewtext}</td>
            <th>
                <button onClick={() => updateReview(_id)} className="btn btn-warning btn-xs">
                    {/* <Modal>
                        Enter your name: <Input onChange={this.nameChange} />
                        <Button onClick={this.reg}>Register</Button>
                    </Modal>
                    <Link>Edit Review</Link> {status ? status : 'pending'} */}
                </button>
            </th>
        </tr>
    );
};

export default ReviewRow;