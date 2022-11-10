import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const ServiceCard = ({ service }) => {

    const { _id, img, price, title, description } = service;

    return (
        <div className="card card-compact w-96 bg-amber-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={img}>
                    <img src={img} alt="" />
                </PhotoView>
            </PhotoProvider>

            <div className="card-body">
                <h2 className="card-title text-black font-bold">{title}</h2>
                <p className='text-2xl text-orange-600 font-bold'>Price: ${price}</p>
                <p className='text-sm font-semibold text-black'>Details:
                    {service.description.length > 100 ?
                        `${service.description.substring(0, 100)}...` : service.description
                    }

                </p>

                <div className="card-actions justify-start mt-8">
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-primary bg-yellow-400">Show Service Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;