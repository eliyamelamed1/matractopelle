import Customers from '../components/Customers';
import Info from '../components/Info';
import Items from '../components/Items';
import type { NextPage } from 'next';
import React from 'react';
import RegionsList from '../components/RegionsList';
import axios from 'axios';

export async function getServerSideProps() {
    const options = [];
    const num = Math.round(Math.random());
    const res = await axios.get(
        `https://data.opendatasoft.com/api/records/1.0/search/?dataset=geonames-postal-code%40public&q=${num}&rows=50&facet=country_code`
    );
    for (const record of res.data.records) {
        let { postal_code, place_name } = record.fields;
        postal_code = postal_code.replace('CEDEX', '');
        options.push(`${postal_code} (${place_name})`);
    }

    return { props: { options } };
}

const Home: NextPage<{ options: string[] }> = ({ options }) => {
    return (
        <>
            <Info />
            <Items />
            <Customers />
            {options && <RegionsList options={options} />}
        </>
    );
};

export default Home;
