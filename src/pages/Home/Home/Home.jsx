import React from 'react';
import Banner from '../Banner/Banner';
import PopulerClasses from '../PopulerClasses/PopulerClasses';
import PopulerInstructor from '../PopulerInstructor/PopulerInstructor';
import MusicGroup from '../MusicGroup/MusicGroup';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Rhythmic Mansion | Home</title>
            </Helmet>
            <Banner></Banner>
            <h1 className=' my-5 text-center'>Popular Classes</h1>
            <PopulerClasses></PopulerClasses>
           <hr />
           <h1 className='mb-5 text-center'>Top Instructors</h1>
            <PopulerInstructor></PopulerInstructor>
          <hr />
            <MusicGroup></MusicGroup>
        </div>
    );
};

export default Home;