import Areas from '../components/Areas';
import Description from '../components/Description';
import type { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <>
            <Description />
            <Areas />
        </>
    );
};

export default Home;
