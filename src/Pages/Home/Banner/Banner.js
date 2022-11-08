import React from 'react';
import cover1 from '../../../assets/Banner/cover1.jpg';
import cover2 from '../../../assets/Banner/cover2.jpg';
import cover3 from '../../../assets/Banner/cover3.jpg';

import './Banner.css'

const Banner = () => {
    return (
        <div className="carousel w-full py-8 mb-10 h-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='banner-img w-full img-fluid'>
                    <img src={cover1} alt='' className=" w-full rounded-xl h-full" />
                </div>
                <div className="carousel-text">
                    <h1 className='text-6xl font-bold mb-4  text-yellow-400'>
                        Welcome To <br />
                        Memory Creation Photography<br />

                    </h1>
                    <small className='font-bold  text-yellow-400 text-lg'> By Sanzida</small>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='banner-img w-full img-fluid'>
                    <img src={cover2} alt='' className=" w-full rounded-xl h-full" />
                </div>
                <div className="carousel-text">
                    <h1 className='text-5xl font-bold mb-4  text-yellow-400'>
                        We Promise To <br />
                        Preserve Your Beautiful Memories<br />

                    </h1>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className='banner-img w-full img-fluid'>
                    <img src={cover3} alt='' className=" w-full rounded-xl h-full" />
                </div>
                <div className="carousel-text">
                    <h1 className='text-5xl font-bold mb-4  text-yellow-400'>
                        From Professional to Personal <br />
                        We Cover Every Event For You<br />

                    </h1>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>



        </div>
    );
};

export default Banner;