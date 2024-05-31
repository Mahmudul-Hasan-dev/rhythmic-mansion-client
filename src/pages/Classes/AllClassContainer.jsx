import React from 'react';
import useAllClass from '../../hooks/useAllClass';
import AllClasses from './AllClasses';

const AllClassContainer = () => {
  
    const [classes] = useAllClass();
   
    
   
    return (
        <div>
             {
               classes && classes.map( cls=> <AllClasses 
                key={cls._id}
                cls={cls} 
                ></AllClasses>
                 )
                
             }
             
        </div>
    );
};

export default AllClassContainer;