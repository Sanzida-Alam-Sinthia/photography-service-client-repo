import React from 'react';
import Services from '../Services/Services';
import Footer from '../Shared/Footer/Footer';
import About from './About/About';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Gallery></Gallery>
            <Services></Services>

        </div>
    );
};

export default Home;