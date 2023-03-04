import { SiApplepodcasts, SiSpotify, SiGooglepodcasts, SiSoundcloud } from 'react-icons/si';
import React from 'react';

const Brands = () => {
    return (
        <div className='container mx-auto h-[37px] top-[628px] flex items-center justify-between '>
            <div>Podcast Available On</div>
            <div className='flex items-center'>
                <div className='text-[#9C33CF] mr-1'><SiApplepodcasts /></div>
                <div>Apple Podcasts</div>
            </div>
            <div className='flex items-center'>
                <div className='text-[#FFF] mr-1 w-5 h-5 flex items-center justify-center rounded-[50%] bg-[#FF4702]'><SiSoundcloud /></div>
                <div>Apple Podcasts</div>
            </div>
            <div className='flex items-center'>
                <div className='text-[#9C33CF] mr-1'><SiGooglepodcasts /></div>
                <div>Apple Podcasts</div>
            </div>
            <div className='flex items-center'>
                <div className='text-[#1AD993] mr-1'><SiSpotify /></div>
                <div>Apple Podcasts</div>
            </div>
        </div>
    );
};

export default Brands;