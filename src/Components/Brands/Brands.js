import ApplePodcast from '../../image/ApplePodcast.svg';
import SoundCloud from '../../image/SoundCloud.svg';
import GooglePodcast from '../../image/GooglePodcast.svg';
import Spotify from '../../image/Spotify.svg';
import React from 'react';

const Brands = () => {
    const brandLogo = [ApplePodcast, SoundCloud, GooglePodcast, Spotify]
    return (
        <div className='container mx-auto h-[37px] top-[628px] flex items-center justify-between '>
            <div className='font-[600] text-[24px] leading-[36px] text-[#14142B]'>Podcast Available On</div>

            {
                brandLogo.map(logo => <a href=""><img className='w-[80%]' src={logo} alt="" /></a>)
            }
        </div>
    );
};

export default Brands;