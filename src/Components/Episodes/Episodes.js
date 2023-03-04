import React from 'react';
import EpiCard from './EpiCard';

const Episodes = () => {
    return (
        <div className='container mx-auto mt-20'>
            <h2 className='text-[32px] font-bold'>Recent Episodes</h2>
            <div className='flex justify-between items-center mt-4'>
                <p className='text-[16px]'>Apparently we had reached a great height in the <br />
                    atmosphere, for the sky was a dead black.</p>
                <button className='bg-[#503AE7] text-white w-[154px] p-2 text-[16px]'>See All Episodes</button>
            </div>
            <div className=' my-10 grid grid-cols-3 gap-3'>
                <EpiCard></EpiCard>
                <EpiCard></EpiCard>
                <EpiCard></EpiCard>
            </div>
        </div>
    );
};

export default Episodes;