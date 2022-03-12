import Customers from '../components/Customers';
import Items from '../components/Items';
import type { NextPage } from 'next';
import React from 'react';
import { regions } from '../utils/enum';
import { texts } from '../utils/texts';

export async function getServerSideProps(context) {
    const region: string = context.params.region;
    const lowerCaseRegions = regions.map((region) => region.toLowerCase());
    const lowerCaseRegion = region.toLowerCase();
    const isRegionExist = lowerCaseRegions.includes(lowerCaseRegion);

    if (isRegionExist) {
        return { props: { lowerCaseRegion } };
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

const region: NextPage<{ region: string }> = ({ region }) => {
    const company = 'company name';
    const sections = generateSections({ region, company });
    return (
        <div className='region'>
            {sections}
            <Items />
            <Customers />
        </div>
    );
};

export default region;
