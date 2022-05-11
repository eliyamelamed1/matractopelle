import { citiesInDepartmentAction, isRegionExistAction } from '../redux/slices/regionSlice';

import Customers from '../components/Customers';
import Items from '../components/Items';
import type { NextPage } from 'next';
import React from 'react';
import RegionsList from '../components/RegionsList';
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

const generateSections = (region: string) => {
    const memo: number[] = [];
    const companies = ['plateforme', 'équipe', 'société', 'entreprise'];
    const considerables = ['considérable', 'important', 'consequent', 'substantiel'];

    while (memo.length < 6) {
        const randomNum = Math.floor(Math.random() * 100);
        if (!memo.includes(randomNum)) memo.push(randomNum);
    }

    const sections = (
        <div className='sections'>
            {memo.map((item) => {
                const dep = region.slice(0, 2) + 'BlahBlah';
                const company = companies[Math.floor(Math.random() * companies.length)];
                const considerable = considerables[Math.floor(Math.random() * companies.length)];
                return (
                    <section key={item}>
                        <h1>{texts({ region, company, dep, considerable })[item].title}</h1>
                        <p>{texts({ region, company, dep, considerable })[item].paragraph}</p>
                    </section>
                );
            })}
        </div>
    );

    return sections;
};

const region: NextPage<{ region: string; citiesInDepartment: string[] }> = ({ region, citiesInDepartment }) => {
    const sections = generateSections(region);
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
