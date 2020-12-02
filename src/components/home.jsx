import React from 'react';
import NavBar from './navBar';
import Section1 from './section1';
import Footer from './footer';
import WhyUs from './whyUs';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Section1/>
            <WhyUs/>
            <Footer/>
        </div>
    )
}

export default Home;
