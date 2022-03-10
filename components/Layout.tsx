import Footer from './Footer';
import Hero from './Hero';
import React from 'react';
import { ToastContainer } from 'react-toastify';

const Layout = ({ children }) => {
    return (
        <>
            <ToastContainer position='top-right' autoClose={5000} newestOnTop={false} pauseOnFocusLoss={false} />
            <Hero />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
