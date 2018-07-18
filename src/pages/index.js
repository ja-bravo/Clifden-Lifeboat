import React from 'react'
import Hero from '../components/hero/hero';
import AboutUs from '../components/aboutUs';
import TheRace from '../components/theRace';
import RaceDay from '../components/raceDay';
import Categories from '../components/categories';
import Footer from '../components/footer';

const IndexPage = () => (
  <div>
    <Hero />
    <AboutUs />
    <TheRace />
    <Categories />
    <RaceDay />
    <Footer />
  </div>
)

export default IndexPage
