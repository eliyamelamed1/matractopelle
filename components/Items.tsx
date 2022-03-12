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
                        La Minipelle fait également partie de la large gamme de tractopelles que nous louons dans notre
                        parc de matériel de levage et de manutention.
                    </p>
                </div>
                <div className='bubbles'>
                    <>
                        <Avatar src={Pelle.src} className='avatar' />
                        <h2>Pelle</h2>
                    </>
                    <p>
                        La Pelle est idéale pour tous les travaux de levage et de transport, garantissant la sécurité de
                        toutes vos marchandises.
                    </p>
                </div>
                <div className='bubbles'>
                    <>
                        <Avatar src={Tractopelle.src} className='avatar' />
                        <h2>Tractopelle</h2>
                    </>
                    <p>The best backhoe loaders at the lowest prices. 24/7 professional support included.</p>
                </div>
            </section>
        </div>
    );
};

export default Items;
