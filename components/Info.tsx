import Avatar from '@mui/material/Avatar';
import FirstImage from '../assets/info1.jpg';
import Minipelle from '../assets/minipelle.jpg';
import Pelle from '../assets/pelle.jpg';
import React from 'react';
import SecondImage from '../assets/info2.jpg';
import Tractopelle from '../assets/tractopelle.jpg';

const paragraphs = (
    <>
        <section>
            <div>
                <h1>
                    QU'EST-CE QUE LA <span> GRUE MOBILE ?</span>
                </h1>
                <p>
                    La grue mobile est une grue de construction automotrice utilisée pour le transport et le levage.
                    Cette machine peut également être appelée camion-grue, camion-grue ou encore grue automotrice. Ce
                    type de grue est utilisé pour les équipements de levage fixes existants qui ne sont pas capables
                    d'effectuer le travail requis. Vous pouvez également louer une petite grue mobile pour effectuer des
                    travaux plus petits, ou une mini-grue araignée pour terminer les zones difficiles d'accès. Les grues
                    mobiles peuvent atteindre une hauteur de 91 m et supporter une charge de 130 T. Elles sont idéales
                    pour les opérations de levage dans le bâtiment, l'industrie ou le secteur du bâtiment (par exemple,
                    levage de matériaux sur le toit). Des grues mobiles peuvent être louées
                    <span> sur toute la France.</span>
                </p>
            </div>
            <img className='image' src={FirstImage.src} />
        </section>
        <section>
            <img className='image' src={SecondImage.src} />

            <div>
                <h1>
                    UN SERVICE <span> DE CONFIANCE</span>
                </h1>
                <p>
                    Nous vous proposons une
                    <span> large gamme de grues mobiles</span>
                    et pouvons engager des chauffeurs en France pour répondre à vos besoins de levage.
                </p>
            </div>
        </section>
    </>
);

const itemBubbles = (
    <>
        <section>
            <div className='bubbles'>
                <>
                    <Avatar src={Minipelle.src} className='avatar' />
                    <h2>Minipelle</h2>
                </>
                <p>
                    La grue automotrice fait aussi partie de la large gamme des grues de chantier que nous mettons à la
                    location dans notre parc d’engins de levage et de manutention.
                </p>
            </div>
            <div className='bubbles'>
                <>
                    <Avatar src={Pelle.src} className='avatar' />
                    <h2>Pelle</h2>
                </>
                <p>
                    La grue sur remorque est idéale pour tous les travaux de levage et du transport en vous garantissant
                    la sécurité de toutes vos marchandises.
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
    </>
);

const Info = () => {
    return (
        <div className='info'>
            {paragraphs}
            {itemBubbles}
        </div>
    );
};

export default Info;
