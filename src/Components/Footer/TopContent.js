import logoSponsor1 from '../../image/LogoSponsor1.svg';
import logoSponsor2 from '../../image/LogoSponsor2.svg';
import logoSponsor3 from '../../image/LogoSponsor3.svg';
import logoSponsor4 from '../../image/LogoSponsor4.svg';
import logoSponsor5 from '../../image/LogoSponsor5.svg';
import React from 'react';

const TopContent = () => {
    return (
        <div className='container p-5 mx-auto text-[#fff] bg-[#503AE7] absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-220%]'>
            <h2 className='text-[32px] text-center mt-5 font-bold leading-[38.4px]'>Our Sponsors</h2>
            <div className='flex justify-between text-[14px] mt-10 mb-6  ml-[50px]'>
                <div> <img className='max-w-[70%]' src={logoSponsor1} alt="" /></div>
                <div> <img className='max-w-[70%]' src={logoSponsor2} alt="" /></div>
                <div>  <img className='max-w-[70%]' src={logoSponsor3} alt="" /></div>
                <div> <img className='max-w-[70%]' src={logoSponsor4} alt="" /></div>
                <div> <img className='max-w-[70%]' src={logoSponsor5} alt="" /></div>
            </div>
        </div>
    );
};

export default TopContent;