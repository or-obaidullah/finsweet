import {
    Link
} from "react-router-dom";
import logo from '../../image/LogoBlack.svg'
import React from 'react';

const Navbar = () => {
    return (
        <div className='container mx-auto'>
            <div className='bg-[#fff] flex items-center justify-between h-[72px] '>
                <Link to="/" className='font-bold'><img className="text-black" src={logo} alt="" /></Link>
                <Link to="About" className='text-[16px] leading-[28px]'>About</Link>
            </div>
        </div>
    );
};

export default Navbar;