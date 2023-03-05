import React from 'react';
import logo from '../../image/Logo.svg';
import appleIcon from '../../image/appleIcon_Si.svg'
import googleIcon from '../../image/Google_Si.svg'
import cloudIcon from '../../image/Cloud_Si.svg'
import spotifyIcon from '../../image/Spotify_Si.svg'

const BottomContent = () => {
    // const logos = [appleIcon, googleIcon, cloudIcon, spotifyIcon]
    const datas = [
        {
            name: 'Apple Podcasts',
            logo: appleIcon
        },
        {
            name: 'Google Podcasts',
            logo: googleIcon
        },
        {
            name: 'SoundCLOUD',
            logo: cloudIcon
        },
        {
            name: 'Spotify',
            logo: spotifyIcon
        }
    ]
    return (
        <div className='max-w-[1280px] mx-auto'>
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

                    {
                        datas.map(data =>
                            <div className='flex items-center mt-6'>
                                <img className='max-w-[13%]'  src={data.logo} alt="" />
                                <div className='ml-2'>{data.name}</div>
                            </div>
                        )
                    }



                </div>
            </div>
        </div>
    );
};

export default BottomContent;