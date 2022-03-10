import Customers from '../components/Customers';
import Info from '../components/Info';
import Items from '../components/Items';
import type { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <>
            <Info />
            <Items />
            <Customers />
        </>
    );
};

export default Home;
