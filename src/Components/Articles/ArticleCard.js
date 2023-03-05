import React from 'react';

const ArticleCard = () => {
    return (
        <div className='bg-[#F4F2FF] relative overflow-hidden'>
            <h2 className='text-[32px] leading-[38.4px] font-bold mt-6 mb-3'>Read our articles & news</h2>
            <a href="" className='text-[16px] text-[#503AE7]'>See More</a>
            <div className='flex items-center justify-center absolute top-[105px] right-[18px] rotate-45'>
                <div className='h-[232.45px] w-[74.43px] bg-[#503AE7] mr-20 mt-[95px]'></div>
                <div className='h-[614.9px] w-[74.43px] bg-[#1AD993] mr-20'></div>
                <div className='h-[420.24px] w-[74.43px] bg-[#503AE7]'></div>
            </div>
        </div>
    );
};

export default ArticleCard;