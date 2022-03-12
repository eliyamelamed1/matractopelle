import React from 'react';
import UIAutoComplete from '../components/UI/UIAutoComplete';

const areas = () => {
    return (
        <div className='areas'>
            <section>
                <h5>UNE LIVRAISON ULTRA RAPIDE</h5>
                <h1>
                    Louez une tractopelle sous
                    <span> 24 à 48h partout en France</span>
                </h1>
                <p>
                    LIVRAISON ULTRA RAPIDE Louez une tractopelle sous 24 à 48 heures dans toute la France Avec plus de 1
                    000 collaborateurs dans toute la France, Notre entreprise est très proche de votre chantier. Notre
                    service de location de tractopelles est donc un service de proximité. Lorsque vous louez une
                    tractopelle avec notre société, vous faites affaire avec un acteur local.
                </p>
                <UIAutoComplete />
            </section>
        </div>
    );
};

export default areas;
