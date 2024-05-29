import React from 'react';
import Banner from '../Banner/Banner';
import PopulerClasses from '../PopulerClasses/PopulerClasses';
import PopulerInstructor from '../PopulerInstructor/PopulerInstructor';
import MusicGroup from '../MusicGroup/MusicGroup';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopulerClasses></PopulerClasses>
            <PopulerInstructor></PopulerInstructor>
            <MusicGroup></MusicGroup>
        </div>
    );
};

export default Home;