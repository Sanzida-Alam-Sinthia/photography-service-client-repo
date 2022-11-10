import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
const ServiceDetails = () => {
    const { user } = useContext(AuthContext)
    const { _id, title, price, img, description } = useLoaderData();
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

        fetch('http://localhost:5000/reviews', {
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
                    alert('Order placed successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));


    }
    return (
        <div className='flex items-center justify-center m-8'>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold text-2xl">{title}</h2>
                    <h3 className='p-3 text-lg '>Cost: ${price}</h3>
                    <p className='p-5 mr-5 ml-5'>{description}</p>

                    <div>
                        <h2>Some Previous Reviews</h2>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">

                                <thead>
                                    <tr>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <th>Name</th>
                                        <th>Job</th>
                                        <th>Favorite Color</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">Hart Hagerty</div>
                                                    <div className="text-sm opacity-50">United States</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Zemlak, Daniel and Leannon
                                            <br />
                                            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                        </td>
                                        <td>Purple</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">details</button>
                                        </th>
                                    </tr>

                                    <tr>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src="/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">Brice Swyre</div>
                                                    <div className="text-sm opacity-50">China</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Carroll Group
                                            <br />
                                            <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                                        </td>
                                        <td>Red</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">details</button>
                                        </th>
                                    </tr>

                                </tbody>

                                <tfoot>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Job</th>
                                        <th>Favorite Color</th>
                                        <th></th>
                                    </tr>
                                </tfoot>

                            </table>
                        </div>
                    </div>
                    {/* your review */}
                    <div>
                        {
                            user?.email ?
                                <>
                                    <h2>Share Your Experience!</h2>
                                    <form onSubmit={handleSubmitReview} action="">
                                        <input name="name" type="text" placeholder="Your Name" className="input input-ghost w-full  input-bordered" />
                                        <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                                        <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Review" required></textarea>
                                        <input className='btn' type="submit" value="Post Your Review" />
                                    </form>
                                </>
                                :
                                <li className='font-semibold'><Link to='/login'>Please Login To Add Your Review!</Link></li>
                        }
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-warning">Book Now!</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ServiceDetails;