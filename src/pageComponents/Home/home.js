import React from 'react';
import HomeHeader from './homeHeader';
import HomeInfo from './homeInfo';
import HomeAboutMe from './homeAboutMe';
import HomeTestimonial from './homeTestimonials';

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeInfo />
      <HomeAboutMe />
      <HomeTestimonial />
    </>
  );
};

export default Home;
