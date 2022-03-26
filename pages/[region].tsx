import { citiesInDepartmentAction, isRegionExistAction } from '../redux/slices/regionSlice';
import { departmentsList, endpoints } from '../utils/enum';

import Customers from '../components/Customers';
import Items from '../components/Items';
import type { NextPage } from 'next';
import React from 'react';
import RegionsList from '../components/RegionsList';
import axios from 'axios';
import store from '../redux/store';
import { texts } from '../utils/texts';

export async function getServerSideProps(context) {
    const region: string = context.params.region;
    await store.dispatch(isRegionExistAction({ region }));
    const { isRegionExist } = store.getState().regionSlice;
    if (!isRegionExist) return { notFound: true };

    await store.dispatch(citiesInDepartmentAction({ region }));
    const { citiesInDepartment } = store.getState().regionSlice;

    return { props: { region, citiesInDepartment } };
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

const region: NextPage<{ region: string; citiesInDepartment: string[] }> = ({ region, citiesInDepartment }) => {
    const company = 'Our Compagny: plateforme, équipe, société, entreprise.';
    const sections = generateSections({ region, company });
    return (
        <div className='region'>
            {sections}
            <Items />
            <Customers />
            {citiesInDepartment && <RegionsList options={citiesInDepartment} />}
        </div>
    );
};

export default region;
