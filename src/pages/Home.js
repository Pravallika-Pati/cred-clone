import React from 'react'
import Header from '../components/common/Header';
import FeelSpecial from '../components/FeelSpecial';
import HeroSection from '../components/HeroSection';
import Product from '../components/Product';
import Exp from '../components/Exp';
import Credsecurity from '../components/Credsecurity';
import Brandslove from '../components/Brandslove';
import Windowpeak from '../components/Windowpeak';
import Mobilescroll from '../components/Mobilescroll';
import Credstory from '../components/Credstory';
import Apprating from '../components/Apprating';
const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Product />
      <FeelSpecial />
      <Brandslove />
      <Exp />
      <Mobilescroll />
      <div className='non-mobile'>
        <Windowpeak />
      </div>
      <Credsecurity />
      <Credstory />
      <Apprating />
    </div>
  )
}

export default Home;
