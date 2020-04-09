import React from 'react';
import Header from '../Header/Header';
import { useEffect } from 'react';
import AppBody from '../AppBody/AppBody';
import Footer from '../Footer/Footer';
const Home = () => {
    useEffect(() => {window.scrollTo(0,0)}, [])

    return (
        <>
            <Header></Header>
            <AppBody></AppBody>
            <Footer></Footer>
        </>
    );
};

export default Home;