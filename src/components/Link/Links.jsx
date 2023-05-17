import React from 'react';


const Links = ({round}) => {
    return (
       <li className='mr-12 hover:bg-red-600'>
          
         <a href={round.path}>{round.name}</a>
       </li>
    );
};

export default Links;