import React from 'react';
import footerImage from '../assets/footer.jpg';

const Footer = () => {
    return (
        <footer className='footer'>
            <img src={footerImage.src} alt='profile pic' className='image' />
        </footer>
    );
};

export default Footer;
