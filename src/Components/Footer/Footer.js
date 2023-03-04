import { SiApplepodcasts, SiSpotify, SiGooglepodcasts, SiSoundcloud } from 'react-icons/si';
import logo from '../../image/Logo.svg'
import React from 'react';
import Sponsor from './Sponsor';

const Footer = () => {
    return (
        <div className='container mx-auto  bg-[#14142B]  h-[574px] mt-[150px] relative'>
            <Sponsor></Sponsor>
            <div className=' grid grid-cols-4 gap-4 '>
                <div className='text-[#fff] mt-[150px]'>
                    <a href=""><img src={logo} alt="" /></a>
                </div>
                <div className='text-[#fff] flex flex-col mt-[150px]'>
                    <h6 className='text-[20px] mb-5'>Pages</h6>
                    <a href="">Home</a>
                    <a className='mt-3' href="">Postcast</a>
                    <a className='mt-3' href="">Host</a>
                    <a className='mt-3' href="">Blog</a>
                </div>
                <div className='text-[#fff] flex flex-col mt-[150px]'>
                    <h6 className='text-[20px] mb-5'>Reach Us</h6>
                    <a href="">Contact</a>
                    <a className='mt-3' href="">About</a>
                </div>
                <div className='text-[#fff] flex flex-col mt-[150px]'>
                    <h6 className='text-[20px] mb-5'>Subscribe</h6>

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
            <div className='flex items-center justify-center bg-[#503AE7] text-[#fff] h-[64px] text-[16px] mt-[200px]'>
                <p>© Copyright Finsweet 2021</p>
            </div>
        </div>
    );
};

export default Footer;