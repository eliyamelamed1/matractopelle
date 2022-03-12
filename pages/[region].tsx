import Contact from './contact';
import Hero from '../components/Hero';
import Items from '../components/Items';
import type { NextPage } from 'next';
import React from 'react';
import { regions } from '../utils/enum';

export async function getServerSideProps(context) {
    const region: string = context.params.region;
    const isRegionExist = regions.includes(region);

    if (isRegionExist) {
        return { props: { region } };
    } else {
        return { notFound: true };
    }
}

const region: NextPage<{ region: string }> = ({ region }) => {
    return (
        <div className='regions'>
            <section>
                <h1></h1>
                <p></p>
            </section>
        </div>
    );
};

export default region;
