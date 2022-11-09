import React from 'react';
import person1 from '../../../assets/About/person1.jpg'

const About = () => {
    return (
        <div className='m-12 p-10'>
            <div className='grid grid-cols-2 gap-4'>
                <div className='person-img'>
                    <img src={person1} alt="" /></div>
                <div>
                    <h1 className='text-4xl font-bold mb-10  text-yellow-400'>Hi, I am Sanzida. Protrait <br />
                        Photographer From Bangladesh
                    </h1>
                    <h3 className='text-2xl  mb-10  text-white'>

                        “Photography for me is not looking, it's feeling. If you <br />
                        can't feel what you're looking at, then you're never going <br /> to get others to feel anything when they look at your pictures.” <br />
                        — Don McCullin <br />
                        <br />
                        From my passion from childhood, I started  taking pictures. Initially It was just a part time job of mine but nowadays I took this work as my main profession and covered many successfull events. Most of my customers seemed very satisfied with my services.
                    </h3>
                    <button className='btn btn-warning'>More About Me</button>
                </div>
            </div>
        </div>
    );
};

export default About;