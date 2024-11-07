import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const MainLayouts = () => {

    
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer position="top-center" autoClose={2000}></ToastContainer>
        </div>
    );
};

export default MainLayouts;