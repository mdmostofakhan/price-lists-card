import React from 'react';
import Feature from '../feature/Feature';

const SingelPrice = ({price}) => {
    return (
       <div  className='bg-indigo-400  mt-4 p-4 rounded-md flex flex-col'>
            <h4 className='text-center'>
                <span  className='text-4xl  text-purple-500 font-extrabold'>{price.price}</span>
                    <span className='text-2xl font-bold text-white'>/mon</span>
            </h4>
            <h1 className='text-2xl text-center my-6 font-bold'>{price.name}</h1>
            <p className='underline text-emerald-100 font-bold'>Featuer:</p>
            {
                price.features.map((feature, idx) => <Feature
                key={idx}
                feature={feature}
                ></Feature>)
            }
            <button className='w-full mt-auto hover:bg-teal-500 bg-green-600 text-white py-2 rounded-md font-bold'>By Now</button>
       </div>
    )
};

export default SingelPrice;