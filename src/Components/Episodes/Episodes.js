import React, { useState } from 'react';
import img1 from '../../image/Episode1.png';
import img2 from '../../image/Episode2.png';
import img3 from '../../image/Episode3.png';
import Card from '../Card/Card';

const Episodes = () => {
    const epiData = [
        {
            id: 1,
            heading: "Ep 1: How to build a world-class business brand",
            img: img1
        },
        {
            id: 2,
            heading: "Ep 2: Getting the first 100 customers for your business",
            img: img2
        },
        {
            id: 3,
            heading: "Ep 3: Should I raise money for my startup, or not?",
            img: img3
        },
    ]

    return (
        <div className='container mx-auto mt-20 mb-20'>
            <h2 className='text-[32px] font-bold'>Recent Episodes</h2>
            <div className='flex justify-between items-center mt-4'>
                <p className='text-[16px]'>Apparently we had reached a great height in the <br />
                    atmosphere, for the sky was a dead black.</p>
                <button className='bg-[#503AE7] text-white w-[154px] p-2 text-[16px]'>See All Episodes</button>
            </div>
            <div className=' my-10 grid grid-cols-3 content-between gap-6'>
                <Card mic={true} img={epiData[0].img} heading={epiData[0].heading} ></Card>
                <Card mic={true} img={epiData[1].img} heading={epiData[1].heading} ></Card>
                <Card mic={true} img={epiData[2].img} heading={epiData[2].heading} ></Card>
            </div>
        </div>
    );
};

export default Episodes;