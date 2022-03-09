import Areas from '../components/Areas';
import Info from '../components/Info';
import type { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <>
            <Info />
            <Areas />
        </>
    );
};

export default Home;
