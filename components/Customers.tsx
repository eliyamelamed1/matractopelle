import { Avatar } from '@mui/material';
import React from 'react';
import customerAvatar from '../assets/customerAvatar.jpg';

const client = (
    <div className='clientContainer'>
        <Avatar src={customerAvatar.src} className='avatar' />
        <div className='clientNameAndRole'>
            <h3 className='clientName'>Jeremy Hadad</h3>
            <h5 className='clientRole'>RÉGION LYONNAISE</h5>
        </div>
    </div>
);

const Customers = () => {
    return (
        <div className='customers'>
            <h5 className='primaryColor'> CE SONT EUX QUI EN PARLENT LE MIEUX</h5>
            <h1>
                FAITES COMME <span className='primaryColor'>NOS CLIENTS</span>
            </h1>
            <h3 className='paragraph'>
                “Very good understanding of my request and proposal of a solution adapted to my needs, a powerful crane
                in Moselle within a tight deadline. I dealt with very friendly people for the order and the tractopelle
                driver as well. I recommend this company.”
            </h3>
            {client}
        </div>
    );
};

export default Customers;
