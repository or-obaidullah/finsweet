import logoSponsor from '../../image/LogoSponsor.svg'
import React from 'react';

const Sponsor = () => {
    return (
        <div className='w-[80%] p-5 mx-auto text-[#fff] bg-[#503AE7] absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-218%]'>
            <h2 className='text-[32px] text-center mt-5'>Our Sponsors</h2>
            <div className='flex items-center justify-center text-[14px] mt-6 mb-4'>
                <a href="#"> <img className='max-w-[60%]' src={logoSponsor} alt="" /></a>
                <a href="#"> <img className='max-w-[60%]' src={logoSponsor} alt="" /></a>
                <a href="#">  <img className='max-w-[60%]' src={logoSponsor} alt="" /></a>
                <a href="#"> <img className='max-w-[60%]' src={logoSponsor} alt="" /></a>
            </div>
        </div>
    );
};

export default Sponsor;