import React from 'react';
import Navbar from '../components/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';

const Root = () => {
    return (
        <>
            <section>
                <Navbar></Navbar>
            </section>
            <section className='min-h-screen'>
                <Outlet></Outlet>
            </section>
            <section>
                <Footer></Footer>
            </section>
        </>
    );
};

export default Root;