import React from 'react';

import Banner from '../Components/Home/Banner/Banner';
import Footer from '../Components/Home/Footer/Footer';
import Navbar from '../Nabvar/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;