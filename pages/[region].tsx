import Customers from '../components/Customers';
import Items from '../components/Items';
import type { NextPage } from 'next';
import React from 'react';
import RegionsList from '../components/RegionsList';
import axios from 'axios';
import { texts } from '../utils/texts';

export async function getServerSideProps(context) {
    const region: string = context.params.region;
    let res = await axios.get(
        `https://data.opendatasoft.com/api/records/1.0/search/?dataset=geonames-postal-code%40public&q=${region}&rows=50&facet=country_code`
    );
    let options = [];
    for (const record of res.data?.records) {
        const { postal_code, place_name } = record.fields;
        options.push(`${postal_code} (${place_name})`);
    }
    const isRegionExist = options.includes(region);

    options = [];
    const num = Math.round(Math.random());
    res = await axios.get(
        `https://data.opendatasoft.com/api/records/1.0/search/?dataset=geonames-postal-code%40public&q=${num}&rows=50&facet=country_code`
    );
    for (const record of res.data.records) {
        let { postal_code, place_name } = record.fields;
        postal_code = postal_code.replace('CEDEX', '');
        options.push(`${postal_code} (${place_name})`);
    }

    if (isRegionExist) {
        return { props: { region, options } };
    } else {
        return { notFound: true };
    }
}

const generateSections = ({ region, company }: { region: string; company: string }) => {
    const memo: number[] = [];
    while (memo.length < 5) {
        const randomNum = Math.floor(Math.random() * 100);
        if (!memo.includes(randomNum)) memo.push(randomNum);
    }

    const sections = (
        <div className='sections'>
            <section key={memo[0]}>
                <h1>{texts({ region, company })[memo[0]].title}</h1>
                <p>{texts({ region, company })[memo[0]].paragraph}</p>
            </section>

            <section key={memo[1]}>
                <h1>{texts({ region, company })[memo[1]].title}</h1>
                <p>{texts({ region, company })[memo[1]].paragraph}</p>
            </section>

            <section key={memo[2]}>
                <h1>{texts({ region, company })[memo[2]].title}</h1>
                <p>{texts({ region, company })[memo[2]].paragraph}</p>
            </section>

            <section key={memo[3]}>
                <h1>{texts({ region, company })[memo[3]].title}</h1>
                <p>{texts({ region, company })[memo[3]].paragraph}</p>
            </section>
        </div>
    );

    return sections;
};

const region: NextPage<{ region: string; options: any }> = ({ region, options }) => {
    const company = 'Our Compagny: plateforme, équipe, société, entreprise.';
    const sections = generateSections({ region, company });
    return (
        <div className='region'>
            {sections}
            <Items />
            <Customers />
            {options && <RegionsList options={options} />}
        </div>
    );
};

export default region;
