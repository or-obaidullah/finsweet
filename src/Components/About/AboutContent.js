import React from 'react';

const AboutContent = () => {
    return (
        <div className='container mx-auto mt-[100px] mb-[175px]'>
            <div className='w-[80%] mx-auto'>
                <h1 className='font-bold text-[48px] leading-[52.8px] text-[#14142B] mb-5'>About Finsweet <br /> Podcast</h1>
                <p className='text-[16px] leading-[24px] text-[#14142B] mb-4'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed <br /> diam nonumy eirmod tempor invidunt ut labore et dolore <br /> magna aliquyam erat, sed diam voluptua.</p>
                <button className='bg-[#503AE7] text-white w-[121px] p-2 leading-[24px]'>Subscribe</button>
            </div>
        </div>
    );
};

export default AboutContent;