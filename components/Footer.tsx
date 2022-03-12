import EmailIcon from '@mui/icons-material/Email';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import React from 'react';

const contactOptions = () => {
    return (
        <>
            <div className='iconAndText'>
                <LocationOnIcon />
                <span>Disponible sur toute la France</span>
            </div>
            <div className='iconAndText'>
                <PhoneInTalkIcon />
                <span>06 95 89 29 32</span>
            </div>
            <div className='iconAndText'>
                <EmailIcon />
                <span>company@mail.fr</span>
            </div>
            <div className='iconAndText'>
                <LocationCityIcon />
                <span>Services de tracteur</span>
            </div>
        </>
    );
};

const aboutUs = () => {
    return (
        <div className='aboutUs'>
            <h1 className='title'>Qui Sommes-Nous ?</h1>
            <p>
                notre société propose à ses clients professionnels et particuliers des services de transport et de
                location de tracteurs. Pour cela, nous mettons à disposition, sur nos sites clients, des bennes de
                toutes tailles et pour tous types de déchets.
            </p>
        </div>
    );
};

const Footer = () => {
    return (
        <footer className='footer'>
            {aboutUs()}
            {contactOptions()}
        </footer>
    );
};

export default Footer;
