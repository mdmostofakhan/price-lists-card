import React, { useEffect, useState } from 'react';
import SingelPrice from '../singlePrice/SingelPrice';

const Prices = () => {
    const [prices, setPrices] = useState([])

    useEffect(()=> {
        fetch('prices.json')
        .then(res => res.json())
        .then(data => setPrices(data))
    },[])

    return (
        <div className='mx-12'>
            <h3 className='text-5xl text-center text-purple-700 bg-lime-400 font-bold p-5'>Awesome Affordable Prices</h3>
               
               <div className='grid md:grid-cols-3 md:static gap-4'>
               {
                prices.map(price => <SingelPrice
                key={price.id}
                price={price}
                ></SingelPrice>)
               }
               </div>
        </div>
    );
};

export default Prices;