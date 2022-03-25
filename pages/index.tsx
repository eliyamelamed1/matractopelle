import Customers from '../components/Customers';
import Info from '../components/Info';
import Items from '../components/Items';
import type { NextPage } from 'next';
import React from 'react';
import RegionsList from '../components/RegionsList';
import axios from 'axios';
import { departmentsList } from '../utils/enum';

const Home: NextPage = () => {
    console.log(departmentsList);
    return (
        <>
            <Info />
            <Items />
            <Customers />
            {departmentsList && <RegionsList options={departmentsList} />}
        </>
    );
};

export default Home;
