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
                “Très bonne compréhension de ma demande et proposition d'une solution adaptée à mes besoins, une grue
                puissante en Moselle dans un délai contraint. J'ai eu affaire à des personnes très sympathiques pour la
                commande et le chauffeur grutier également. Je recommande cette entreprise.”
            </h3>
            {client}
        </div>
    );
};

export default Customers;
