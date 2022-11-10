import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const AddServices = () => {
    const { user } = useContext(AuthContext)
    // const { _id, title, price, img, description } = useLoaderData();
    const handleSubmitService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const price = form.price.value;
        const img = form.img.value;

        const email = user?.email || 'unregistered';
        const description = form.description.value;


        const newService = {
            service:
                title,
            price,
            img,
            description,
            customer: email

        }

        fetch('https://photography-assignment-server-alpha.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('New Service posted successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));


    }
    return (
        <div>
            {
                user?.email ?
                    <>
                        <div className='items-center justify-center m-10'>
                            <h2 className='text-3xl font-bold mb-12 mt-8 text-center'>Create New Service</h2>
                            <form onSubmit={handleSubmitService} action="" className='border-4 border-yellow-400 mb-10 w-full  items-center justify-center p-4'>
                                <input name="img" type="url" placeholder="Place image url" alt='' className="input input-ghost w-full  input-bordered" />
                                <input name="title" type="text" placeholder="Title of Service" className="input input-ghost w-full  input-bordered" />
                                <input name="price" type="number" placeholder="Price of Service" className="input input-ghost w-full  input-bordered" />
                                <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                                <textarea name="description" id="" placeholder="Description of Service" cols="20" rows="10" className='bg-slate-50 mt-3 font-black text-dark'></textarea>
                                <input className='btn btn-warning mt-5 mb-5 items-center justify-center ' type="submit" value="Post Your Customized Service" />
                            </form>
                        </div>
                    </>
                    :
                    <li className='font-semibold'><Link to='/login'>Please Login To Add Services</Link></li>
            }
        </div>
    );
};

export default AddServices;