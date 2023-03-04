import {
    Link
} from "react-router-dom";
import React from 'react';

const Navbar = () => {
    return (
        <div className='container mx-auto'>
            <div className='bg-[#fff] flex items-center justify-between h-[72px] '>
                <Link href="/" className='font-bold'>FinSweet</Link>
                <Link to="About" className='text-[16px] leading-[28px]'>About</Link>
            </div>
        </div>
    );
};

export default Navbar;