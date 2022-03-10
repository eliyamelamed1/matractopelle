import Areas from '../components/Areas';
import Info from '../components/Info';
import Items from '../components/Items';
import type { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <>
            <Info />
            <Items />
        </>
    );
};

export default Home;
