import React from 'react';
import UIAutoComplete from '../components/UI/UIAutoComplete';

const areas = () => {
    return (
        <div className='areas'>
            <h5>UNE LIVRAISON ULTRA RAPIDE</h5>
            <h1>
                Louez une grue sous
                <span> 24 à 48H sur toute la France</span>
            </h1>
            <p>
                UNE LIVRAISON ULTRA RAPIDE Louez une grue sous 24 à 48H sur toute la France Avec plus de 1000
                collaborateurs dans toute la France, ALLOGRUE.FR est tout proche de votre chantier. Notre service de
                location de grues est donc un service de proximité. Quand vous louez une grue avec la société
                ALLOGRUE.FR, vous faites travailler un acteur local.
            </p>
            <UIAutoComplete />
        </div>
    );
};

export default areas;
