import Footer from './Footer';
import Hero from './Hero';
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
