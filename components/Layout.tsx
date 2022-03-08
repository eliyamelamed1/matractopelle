import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <>
            <Hero />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
