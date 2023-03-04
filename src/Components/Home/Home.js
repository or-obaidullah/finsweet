import React from 'react';
import Articles from '../Articles/Articles';
import Brands from '../Brands/Brands';
import Episodes from '../Episodes/Episodes';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <Navbar></Navbar>
            <Header></Header>
            <Brands></Brands>
            <Episodes></Episodes>
            <Articles></Articles>
            <Footer></Footer>
        </div>
    );
};

export default Home;