import React from 'react'
import Banner from './components/Banner/Banner';
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide';

//1.배너만들기 top popular movie
//2.popular movie
//3.top rated movie
//4.upcoming movie

const Homepage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSlide/>
    </div>
  );
};

export default Homepage;
