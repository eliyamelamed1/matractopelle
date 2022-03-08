import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import React from 'react';
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
                    <span>DISPONIBLE À LA JOURNÉE, À LA SEMAINE OU AU MOIS</span>
                    <h1>N°1 DE LA LOCATION DE GRUES AVEC CHAUFFEUR</h1>
                    <p>
                        Grâce à nos multiples centres logistiques à travers le pays : 3 minutes, c'est le temps qu'il
                        nous faut pour vous établir un devis sur mesure.
                    </p>
                    <div className='heroDetails'>
                        <Link href={pageRoutes.contact} passHref>
                            <a className='link'>Obtenir un devis en ligne</a>
                        </Link>

                        <Link href={pageRoutes.contact} passHref>
                            <a className='phoneData'>
                                <PhoneInTalkIcon />
                                06 95 89 29 32
                            </a>
                        </Link>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default Hero;
