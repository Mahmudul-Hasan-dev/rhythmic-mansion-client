import React from 'react';
import useAllClass from '../../hooks/useAllClass';
import Classes from './Classes';

const AllClassContainer = () => {
  
    const [allClasses] = useAllClass();
    return (
        <>
            <h1 className='mt-5 text-center bg-dark text-light'> All Music Classes</h1>
        <div  className='all-class-container my-5'>
           
             {
               allClasses && allClasses.map( cls=> 
               
             <Classes
             key={cls._id}
             cls={cls}
             ></Classes>
                 )
                
             }
             
        </div>
        </>
    );
};

export default AllClassContainer;