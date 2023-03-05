import React from 'react';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { BsFillMicFill } from "react-icons/bs";

const Card = (props) => {
    return (
        <div className=" bg-white col-span-1 relative">
            {
                props.mic ? <div className='bg-[#503AE7] absolute top-3 right-3 w-6 h-6 rounded-[50%] flex items-center justify-center'><BsFillMicFill className='text-[#fff] text-[13px] ' /></div> : ''

            }


            <a href="#">
                <img className="" src={props.img} alt="" />
            </a>
            <div className="">
                <a href="#">
                    <h5 className=" mt-2 mb-3 text-[24px] font-[600] tracking-tight text-gray-900 dark:text-white">{props.heading}</h5>
                </a>
                <p className=" font-normal text-[16px] mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                {
                    props.read ?
                        <a href="" className='text-[16px] text-[#503AE7]'>Read Now</a> : <a href="" className='text-[16px] text-[#503AE7] flex items-center'>
                            <BsFillPlayCircleFill /> <span className='ml-2'>Listen Now</span>
                        </a>
                }



            </div>
        </div>

    );
};

export default Card;