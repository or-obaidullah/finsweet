import React from 'react';
import { SiApplepodcasts, SiSpotify, SiGooglepodcasts, SiSoundcloud } from 'react-icons/si';
import logo from '../../image/Logo.svg';

const BottomContent = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex justify-between '>
                <div className='text-[#fff] mt-[150px]'>
                    <a href=""><img className='w-[60%]' src={logo} alt="" /></a>
                </div>
                <div className='text-[#fff] flex flex-col mt-[150px]'>
                    <h6 className='text-[20px] mb-5 font-bold'>Pages</h6>
                    <a href="">Home</a>
                    <a className='mt-3 text-[16px]' href="">Postcast</a>
                    <a className='mt-3 text-[16px]' href="">Host</a>
                    <a className='mt-3 text-[16px]' href="">Blog</a>
                </div>
                <div className='text-[#fff] flex flex-col mt-[150px]'>
                    <h6 className='text-[20px] mb-5 font-bold'>Reach Us</h6>
                    <a href="">Contact</a>
                    <a className='mt-3 text-[16px]' href="">About</a>
                </div>
                <div className='text-[#fff] flex flex-col mt-[150px]'>
                    <h6 className='text-[20px] mb-5 font-bold'>Subscribe</h6>

                    <div className='flex items-center'>
                        <div className='text-[#9C33CF] mr-1'><SiApplepodcasts /></div>
                        <div>Apple Podcasts</div>
                    </div>
                    <div className='flex items-center mt-6'>
                        <div className='text-[#FFF] mr-1 w-5 h-5 flex items-center justify-center rounded-[50%] bg-[#FF4702]'><SiSoundcloud /></div>
                        <div>Apple Podcasts</div>
                    </div>
                    <div className='flex items-center mt-6'>
                        <div className='text-[#9C33CF] mr-1'><SiGooglepodcasts /></div>
                        <div>Apple Podcasts</div>
                    </div>
                    <div className='flex items-center mt-6'>
                        <div className='text-[#1AD993] mr-1'><SiSpotify /></div>
                        <div>Apple Podcasts</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomContent;