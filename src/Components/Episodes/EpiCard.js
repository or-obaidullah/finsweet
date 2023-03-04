import React from 'react';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { BsFillMicFill } from "react-icons/bs";

import image from '../../image/Episode(1).png'
const EpiCard = () => {
    return (

        <div class="max-w-sm bg-white col-span-1 relative">
            <div className='bg-[#503AE7] absolute top-3 right-3 w-6 h-6 rounded-[50%] flex items-center justify-center'><BsFillMicFill className='text-[#fff] text-[13px] ' /></div>
            <a href="#">
                <img class="" src={image} alt="" />
            </a>
            <div class="">
                <a href="#">
                    <h5 class=" mt-2 mb-3 text-[24px] font-[600] tracking-tight text-gray-900 dark:text-white">Ep 1: How to build a world-class business brand</h5>
                </a>
                <p class=" font-normal text-[16px] mb-2">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="" className='text-[16px] text-[#503AE7] flex items-center'>
                    <BsFillPlayCircleFill /> <span className='ml-2'>Listen Now</span>
                </a>
            </div>
        </div>

    );
};

export default EpiCard;