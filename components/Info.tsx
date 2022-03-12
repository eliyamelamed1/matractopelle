import FirstImage from '../assets/info1.jpg';
import React from 'react';
import SecondImage from '../assets/info2.jpg';

const paragraphs = (
    <>
        <section>
            <div>
                <h1>
                    QU'EST-CE QUE LA <span> Tractopelle ?</span>
                </h1>
                <p>
                    Une chargeuse-pelleteuse, également appelée chargeuse-pelleteuse, chargeuse-pelleteuse, excavatrice
                    en termes simples, ou familièrement abrégée en rétrocaveuse dans l'industrie, est un véhicule
                    d'équipement lourd qui se compose d'une unité de type tracteur équipée d'une pelle/godet de type
                    chargeur sur l'avant et une rétrocaveuse à l'arrière. En raison de sa (relativement) petite taille
                    et de sa polyvalence, les chargeuses-pelleteuses sont très courantes dans le génie urbain et les
                    petits projets de construction (comme la construction d'une petite maison, la réparation de routes
                    urbaines, etc.) ainsi que dans les pays en développement. Ce type d'engin s'apparente et dérive de
                    ce que l'on appelle aujourd'hui un TLB (Tractor-Loader-Backhoe), c'est-à-dire un tracteur agricole
                    équipé d'un chargeur frontal et d'une attache rétrocaveuse arrière.
                    <span> les tractopelles peuvent être louées dans toute la France.</span>
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
                    Nous proposons une large gamme
                    <span> de tractopelles</span>
                    et pouvons embaucher des chauffeurs en France pour répondre à vos besoins de levage.
                </p>
            </div>
        </section>
    </>
);

const Info = () => {
    return <div className='info'>{paragraphs}</div>;
};

export default Info;
