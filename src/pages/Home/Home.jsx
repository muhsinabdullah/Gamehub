import React from 'react';
import Slider from '../../components/Slider/Slider';
import Newsletter from '../../components/Newsletter/Newsletter';
import PopularGames from '../../components/PopularGames/PopularGames';

const Home = () => {
    return (
        <div>
            <title>Home</title>
            <Slider />
            <PopularGames />
            <Newsletter />
        </div>
    );
};

export default Home;