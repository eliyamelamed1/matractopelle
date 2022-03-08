import Areas from '../components/Areas';
import Description from '../components/Description';
import Head from 'next/head';
import Hero from '../components/Hero';
import Image from 'next/image';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    return (
        <>
            <Hero />
            <Description />
            <Areas />
        </>
    );
};

export default Home;
