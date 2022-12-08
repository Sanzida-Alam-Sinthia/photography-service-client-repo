import React from 'react';
import './Gallery.css'
import fox from '../../../assets/Gallery/FOX.JPG'
import bride from '../../../assets/Gallery/Bride.JPG'
import flower from '../../../assets/Gallery/flower.JPG'
import groom from '../../../assets/Gallery/Groom.JPG'
import baby from '../../../assets/Gallery/Baby.JPG'
import bird from '../../../assets/Gallery/Bird.JPG'


const Gallery = () => {
    return (
        <div className=' mr-auto ml-auto lg:m-12 p-10'>
            <div className='text-center text-5xl font-bold mb-10  text-yellow-400'> Gallery </div>
            <div className='gallery-grid lg:grid-cols-3 sm:grid-cols-2 lg:m-5 p-5'>
                <a href="https://unsplash.com/photos/YTmgx_ru39U" >
                    <h1>Fox.</h1>
                    <img src={fox} className="w-full" alt="a fox" />
                </a>
                <a href="https://unsplash.com/photos/NKdZpTh5zY0" >
                    <h1>Bride.</h1>
                    <img src={bride} className="w-full" alt="a woman" />
                </a>
                <a href="https://unsplash.com/photos/TtybI0ORH7w" >
                    <h1>Flowers.</h1>
                    <img src={flower} className="w-full" alt=" some reeds" />
                </a>
                <a href="https://unsplash.com/photos/tV_1sC603zA" >
                    <h1>Groom.</h1>
                    <img src={groom} className="w-full" alt="" />
                </a>
                <a href="https://unsplash.com/photos/Ceuh97A6OYM" >
                    <h1>Baby.</h1>
                    <img src={baby} className="w-full" alt="" />
                </a>
                <a href="https://unsplash.com/photos/mpw37yXc_WQ">
                    <h1>bird.</h1>
                    <img src={bird} className="w-full" alt="" />
                </a>
            </div>
        </div>
    );
};

export default Gallery;