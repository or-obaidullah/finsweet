import React from 'react';
import EpiCard from '../Episodes/EpiCard';

const Articles = () => {
    return (
        <div className='my-10 grid grid-cols-3 gap-3 container mx-auto'>
            <EpiCard></EpiCard>
            <EpiCard></EpiCard>
            <EpiCard></EpiCard>
        </div>
    );
};

export default Articles;