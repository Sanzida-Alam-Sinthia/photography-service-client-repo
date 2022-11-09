import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (

        <div className='justify-center'>
            <div className='text-center mb-10  text-yellow-400 ml-[60px]'>

                <h2 className="text-center text-5xl font-bold mb-10 text-yellow-400"> My Major Services</h2>
                <p className='text-lg'>I mainly work in meaningful events as Photographer. Here are some of my services: </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12 ml-[70px]'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    >
                    </ServiceCard>)
                }
            </div>
            <div className='mt-12 mb-10 lg:ml-[700px] md:ml-[10px] content-center '>
                <div>
                    <Link>
                        <button className='btn btn-primary bg-yellow-400 justify-center'> See All Services</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Services;