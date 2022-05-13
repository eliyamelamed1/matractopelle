import React, { useState } from 'react';

import { CircularProgress } from '@mui/material';
import Router from 'next/router';

const UILoaderContainer = () => {
    const [loading, setLoading] = useState(false);

    Router.events.on('routeChangeStart', () => setLoading(true));
    Router.events.on('routeChangeComplete', () => setLoading(false));
    Router.events.on('routeChangeError', () => setLoading(false));

    return <div className='ui-loader-container'>{loading && <CircularProgress size={70} className='loader' />}</div>;
};
export default UILoaderContainer;
