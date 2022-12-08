import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';
const Services = () => {
    const [services, setServices] = useState([]);
    // const { _id, title, price } = useLoaderData();
    useEffect(() => {
        fetch('https://photography-assignment-server-alpha.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (

        <div className='justify-center'>
            <div className='items-center text-center mb-10  text-yellow-400'>

                <h2 className=" items-center text-center text-5xl font-bold mb-10 text-yellow-400"> My Major Services</h2>
                <p className='text-lg text-white'>I mainly work in meaningful events as Photographer. Here are some of my services: </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:m-12 p-10'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    >
                    </ServiceCard>)
                }
            </div>
            <div className='flex items-center justify-center mb-8'>
                <div>
                    <Link to='/services'>
                        <button className='btn btn-primary bg-yellow-400 justify-center'> See All Services</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Services;