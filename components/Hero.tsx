import Image from 'next/image';
import Link from 'next/link';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import React from 'react';
import { pageRoutes } from '../utils/enum';

const Hero = () => {
    console.log(PhoneInTalkIcon);

    return (
        <div className='hero'>
            <section className='heroSection'>
                <span>DISPONIBLE À LA JOURNÉE, À LA SEMAINE OU AU MOIS</span>
                <h1>N°1 DE LA LOCATION DE GRUES AVEC CHAUFFEUR</h1>
                <p>
                    Grâce à nos multiples centres logistiques à travers le pays : 3 minutes, c'est le temps qu'il nous
                    faut pour vous établir un devis sur mesure.
                </p>
                <div className='heroDetails'>
                    <a className='link'>
                        <Link href={pageRoutes.contact}>Obtenir un devis en ligne</Link>
                    </a>

                    <a className='phone'>
                        <Link href={pageRoutes.contact} passHref>
                            <div className='phoneData'>
                                <PhoneInTalkIcon />
                                06 95 89 29 32
                            </div>
                        </Link>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Hero;
