import React, { useEffect, useState } from 'react';

import Footer from './Footer';
import Hero from './Hero';
import { ToastContainer } from 'react-toastify';
import UILoaderContainer from './UI/UILoaderContainer';

const Layout = ({ children }) => {
    return (
        <>
            <UILoaderContainer />
            <ToastContainer position='top-right' autoClose={5000} newestOnTop={false} pauseOnFocusLoss={false} />
            <Hero />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
