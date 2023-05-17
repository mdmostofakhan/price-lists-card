import React, { useState } from 'react';
import Links from '../Link/Links';
import {  Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navber = () => {
    const [open, setOpen] = useState(false)


    const rounsd = [
        {
            id:1,
            name: 'Home',
            path:'/'
        },
        {
            id:1,
            name: 'About',
            path:'/about'
        },
        {
            id:1,
            name: 'Contact',
            path:'/contact'
        },
        {
            id:1,
            name: 'Servies',
            path:'/servies'
        },
    ]
    return (
        <nav className='bg-purple-400 mx-12 my-4'>

           <div className='md:hidden' onClick={() => setOpen(!open)} >
            <span>{
              open === true ?  
               < Bars3Icon className="h-6 w-6 text-blue-500" /> :
               < XMarkIcon className="h-6 w-6 text-blue-500" /> 
            }</span>
           </div>

           <ul className={`md:flex absolute md:static duration-500 bg-amber-300 pl-6 pb-4 ${open ? "top-6" : "-top-36"}`}>
               {
                rounsd.map(rounds => <Links
                key={rounds}
                round={rounds}
                ></Links> )
               }
           </ul>
        </nav>
    );
};

export default Navber;

//{`md:flex duration-500 absolute md:static bg-orange-400 pl-8 pb-4 ${open ? 'top-6' : '-top-36'  }`}