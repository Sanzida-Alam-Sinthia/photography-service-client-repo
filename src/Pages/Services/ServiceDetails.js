import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewRow from '../MyReviews/ReviewRow';
import UserReview from '../UserReview/UserReview';
const ServiceDetails = () => {
    const { user } = useContext(AuthContext)
    const { _id, event_id, title, price, img, description } = useLoaderData();


    const handleSubmitReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';

        const reviewtext = form.message.value;

        const review = {
            service: _id,

            serviceName: title,
            price,
            customer: name,
            email,
            reviewtext
        }


        fetch('https://photography-assignment-server-alpha.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review posted successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));


    }
    return (
        <div className='flex items-center justify-center m-8'>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold text-4xl">{title}</h2>
                    <h3 className='p-3 text-lg text-red-600 font-bold'>Cost: ${price}</h3>
                    <p className='text-md mr-5 ml-5  text-white lg:m-10 p-10'>{description}</p>

                    <div>
                        <div>
                            <UserReview
                                id={_id}
                                title={title}
                            ></UserReview>
                        </div>
                    </div>
                    {/* your review */}
                    <div>
                        {
                            user?.email ?
                                <>
                                    <h2 className='text-3xl font-bold mb-10 mt-12'>Share Your Experience!</h2>
                                    <form onSubmit={handleSubmitReview} action="" className='border-2 border-yellow-400'>
                                        <input name="name" type="text" placeholder="Your Name" className="input input-ghost w-full  input-bordered" />
                                        <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                                        <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Review" required></textarea>
                                        <input className='btn btn-warning mt-5 mb-5' type="submit" value="Post Your Review" />
                                    </form>
                                </>
                                :
                                <li className='font-semibold'><Link to='/login'>Want To Share Your Experience with us? Please Login To Add Your Review!</Link></li>
                        }
                    </div>


                </div>

            </div>
        </div>
    );
};

export default ServiceDetails;