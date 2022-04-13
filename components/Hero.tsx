import React, { useRef } from 'react';

import Link from 'next/link';
import Navbar from './Navbar';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { pageRoutes } from '../utils/enum';

const Hero = () => {
    return (
        <div className='hero'>
            <div>
                <Navbar />
                <hr
                    style={{
                        color: 'black',
                        opacity: '10%',
                    }}
                />
            </div>
            <section className='heroContainer'>
                <section className='heroSection'>
                    <span>Disponible à la journée, à la semaine ou au mois</span>
                    <h1 className='title'>LOUEZ VOTRE TRACTOPELLE AVEC OU SANS CHAUFFEUR</h1>
                    <p>
                        Notre entreprise, leader dans la location de tractopelles, de pelles mécaniques et différents
                        engins de décaissement, vous propose en quelques minutes, un devis sur mesure et gratuit et ce,
                        grâce à nos multiples centres logistiques sur le territoire, qui seront en mesure de vous
                        trouver l’engin adapté à vos besoins
                    </p>
                    <div className='heroDetails'>
                        <Link href={pageRoutes.contact} passHref>
                            <a className='link'>OBTENEZ VOTRE DEVIS MAINTENANT </a>
                        </Link>

                        <span className='phoneData'>
                            <PhoneInTalkIcon />
                            06 95 89 29 32
                        </span>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default Hero;
