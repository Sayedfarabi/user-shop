import React, { createContext, useEffect, useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';

export const DataProvider = createContext();

const Root = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('/users.json')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const dataInfo = {
        users
    }

    return (
        <>
            <section>
                <Navbar></Navbar>
            </section>
            <section className='min-h-screen'>
                <DataProvider.Provider value={dataInfo}>
                    <Outlet></Outlet>
                </DataProvider.Provider>
            </section>
            <section>
                <Footer></Footer>
            </section>
        </>
    );
};

export default Root;