import React from 'react';

const Header = () => {
    return (
        <div className='w-[918px] h-[302px] mx-auto flex justify-between my-[80px]'>
            <div className='w-[486px] mr-8'>
                <h1 className='font-bold text-[48px] leading-[52.8px] text-black'>Become The Hero Of Your Own Story</h1>
                <p className='text-[16px] leading-[28px] text-black my-6'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                <div>
                    <input type="text" placeholder='Enter your Email Id' className='bg-[#F4F2FF] p-2' />
                    <input type="button" value="Subsribe" className='bg-[#503AE7] text-white w-[154px] p-2 ' />
                </div>
            </div>
            <div className='w-[432px] flex items-center justify-between'>
                <div className='h-[99px] w-[32px] bg-[#503AE7] mr-5 ml-8'></div>
                <div className='h-[256px] w-[32px] bg-[#1AD993] mr-5'></div>
                <div className='h-[178px] w-[32px] bg-[#503AE7] mr-5'></div>
                <div className='h-[99px] w-[32px] bg-[#1AD993] mr-5'></div>
                <div className='h-[256px] w-[32px] bg-[#503AE7] mr-5'></div>
                <div className='h-[178px] w-[32px] bg-[#1AD993] mr-5'></div>
            </div>
        </div>
    );
};

export default Header;