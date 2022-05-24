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
                <span>Services de matractopelle</span>
            </div>
        </>
    );
};

const aboutUs = () => {
    return (
        <div className='aboutUs'>
            <h2>Qui Sommes-Nous ?</h2>
            <h1 className='title'>UNE SOLUTION PERSONNALISEE SUR MESURE</h1>
            <p>
                Notre entreprise vous propose une large gamme d’engins de chantiers à louer et on vous aide à choisir le
                modèle qui convient le mieux à la réalisation de vos projets. A chaque projet, nous vous offrons une
                solution personnalisée sur mesure ! Faites votre demande de devis en ligne sans attendre.
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
