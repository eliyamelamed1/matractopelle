import FirstImage from '../assets/info1.jpg';
import React from 'react';
import SecondImage from '../assets/info2.jpg';

const paragraphs = (
    <>
        <section>
            <div>
                <h1>
                    QU’EST-CE Q’UNE <span> TRACTOPELLE ?</span>
                </h1>
                <p>
                    Que vous exerciez dans le secteur du BTP ou à titre privé, vous êtes souvent amenés à choisir parmi
                    les différents types d’engins de chantier en vous questionnant sur leur rôle respectif. Qu’il
                    s’agisse d’une rénovation, d’une construction ou encore d’une démolition, leur utilisation est
                    essentielle pour réaliser vos chantiers. La tractopelle est une machine « partenaire » qui va vous
                    permettre d’effectuer des tâches très complexes. En effet à mi-chemin entre la chargeuse et la
                    pelleteuse, elle est cet engin deux en un qui combine à la perfection la fonction de ces deux
                    véhicules. Dotée d’une benne sur le devant et d’une pelle articulée à l’arrière, elle a la capacité
                    de s’adapter aisément sur vos chantiers de petite envergure. Sa polyvalence et sa taille compacte
                    lui confère d’être la machine la plus adaptée sur les chantiers urbains. Si vous souhaitez réaliser
                    des chantiers de plus grande envergure, il suffira d’opter pour un accessoire dont la taille et le
                    volume de pelle sera plus grand. Cette tractopelle sera utilisée aussi bien par les professionnels
                    que les particuliers pour des travaux d’excavation, de remblayage, de manutention et également pour
                    creuser des tranchées. Pour conduire cette machine, il est impératif de détenir un permis CACES R482
                    C1. Dans le cas contraire vous pourrez la louer avec un chauffeur expérimenté à travers toute la
                    France.
                    <span>
                        {' '}
                        Toutefois, si vous ne disposez pas de ce permis et que vous souhaitez louer un engin de
                        décaissement conduit par vous-même, vous pourrez opter parmi notre gamme de matériel de
                        décaissement en tout genre.
                    </span>
                </p>
            </div>
            <img className='image' src={FirstImage.src} />
        </section>
        <section>
            <img className='image' src={SecondImage.src} />

            <div>
                <h1>
                    UN SERVICE <span> FIABLE ET PERFORMANT</span>
                </h1>
                <p>
                    Nous vous proposons une large gamme d’engins de chantiers à la location adaptés aux besoins de vos
                    projets qui vont vous permettre d’effectuer des tâches complexes que l’humain ne peut réaliser seul.
                    Tractopelles, pelles mécaniques sont mises à votre disposition avec ou sans chauffeur expérimenté
                    dans toute la France. Nos engins sont des machines performantes qui vont contribuer à la réalisation
                    de vos opérations de chantier en toute sécurité et vous faire gagner un temps considérable. Notre
                    Assistance professionnelle
                    <span> 6j/7 est à votre service.</span>
                </p>
            </div>
        </section>
    </>
);

const Info = () => {
    return <div className='info'>{paragraphs}</div>;
};

export default Info;
