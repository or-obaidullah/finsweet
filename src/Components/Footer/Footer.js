import React from 'react';
import BottomContent from './BottomContent';
import TopContent from './TopContent';

const Footer = () => {
    return (
        <div className='max-w-[1440px] mx-auto  bg-[#14142B]  h-[574px] mt-[150px] relative'>
            <TopContent></TopContent>
            <BottomContent></BottomContent>
            <div className='flex items-center justify-center bg-[#503AE7] text-[#fff] h-[64px] mt-[150px]'>
                <p className='font-bold text-[16px]'>© Copyright Finsweet 2021</p>
            </div>
        </div>
    );
};

export default Footer;