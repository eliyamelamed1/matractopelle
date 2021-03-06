import * as React from 'react';

import Link from 'next/link';
import List from '@mui/material/List';
import { useRouter } from 'next/router';

const EmptyLink = () => <a style={{ cursor: 'unset' }} />;

const RegionsList: React.FC<{ options: string[] }> = ({ options }) => {
    const router = useRouter();

    const displayDepartmentsLinks = () => {
        options = [...options, '/'];

        return options.map((value) => {
            if (value === '/') return <EmptyLink />;
            return (
                <Link key={value} href={value}>
                    {value === '/' ? '' : `→ ${value}`}
                </Link>
            );
        });
    };

    const displayRegionCitiesLinks = () => {
        options = [...options];

        options.forEach((value, index) => {
            const indexOfComma = value.indexOf('(');
            const postalCode = value.slice(0, indexOfComma - 1);
            const name = value.slice(indexOfComma + 1, value.length - 1);
            options[index] = `${name} (${postalCode})`;
        });

        options.sort();
        options.push('/');

        return options.map((value) => {
            const indexOfComma = value.indexOf('(');
            const name = value.slice(0, indexOfComma - 1);
            const postalCode = value.slice(indexOfComma + 1, value.length - 1);

            if (value === '/') return <EmptyLink />;
            return (
                <Link key={value} href={`${postalCode} (${name})`}>
                    {`→ ${name} (${postalCode})`}
                </Link>
            );
        });
    };

    return (
        <div className='regionList'>
            <h1>UNE LIVRAISON ULTRA RAPIDE</h1>
            <h2>Nous intervenons sur toute la France sous 24 à 48 Heures. </h2>
            <p>
                Avec plus de 1000 collaborateurs dans toute la France, notre équipe est au plus proche de votre
                chantier. Prestation de proximité par excellence, notre service de location de tractopelles et engins de
                chantiers sont à votre disposition à tout moment. En choisissant de louer votre tractopelle avec nous,
                vous faites travailler un acteur local, proche et disponible. Travaillez avec nous, c’est la garantie
                d’une prestation réussie !
            </p>
            <List className='list'>
                {router.pathname === '/' ? displayDepartmentsLinks() : displayRegionCitiesLinks()}
            </List>
        </div>
    );
};
export default RegionsList;
