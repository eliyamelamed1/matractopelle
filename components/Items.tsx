import Avatar from '@mui/material/Avatar';
import Minipelle from '../assets/minipelle.jpg';
import Pelle from '../assets/pelle.jpg';
import React from 'react';
import Tractopelle from '../assets/tractopelle.jpg';

const Items = () => {
    return (
        <div className='items'>
            <section>
                <div className='bubbles'>
                    <>
                        <Avatar src={Minipelle.src} className='avatar' />
                        <h2>Minipelle</h2>
                    </>
                    <p>
                        La grue automotrice fait aussi partie de la large gamme des grues de chantier que nous mettons à
                        la location dans notre parc d’engins de levage et de manutention.
                    </p>
                </div>
                <div className='bubbles'>
                    <>
                        <Avatar src={Pelle.src} className='avatar' />
                        <h2>Pelle</h2>
                    </>
                    <p>
                        La grue sur remorque est idéale pour tous les travaux de levage et du transport en vous
                        garantissant la sécurité de toutes vos marchandises.
                    </p>
                </div>
                <div className='bubbles'>
                    <>
                        <Avatar src={Tractopelle.src} className='avatar' />
                        <h2>Tractopelle</h2>
                    </>
                    <p>La grue mobile peut aussi être appelée : camion grue, grue sur porteur, grue sur roues.</p>
                </div>
            </section>
        </div>
    );
};

export default Items;
