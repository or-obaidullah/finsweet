import React from 'react';
import Card from '../Card/Card';
import img1 from '../../image/article1.png';
import img2 from '../../image/article2.png';
import ArticleCard from './ArticleCard';


const Articles = () => {
    const articleData = [
        {
            heading: "Ep 1: How to build a world-class business brand",
            img: img1
        },
        {
            heading: "Ep 2: Getting the first 100 customers for your business",
            img: img2
        },
    ]
    return (
        <div className='my-10 grid grid-cols-3 gap-3 container mx-auto mb-[205px]'>
            <ArticleCard></ArticleCard>
            <Card read={true} img={articleData[0].img} heading={articleData[0].heading}></Card>
            <Card read={true} img={articleData[1].img} heading={articleData[1].heading}></Card>
        </div>
    );
};

export default Articles;