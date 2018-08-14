import React from 'react'
import Hero from '../components/hero/hero';
import AboutUs from '../components/aboutUs';
import TheRace from '../components/theRace';
import RaceDay from '../components/raceDay';
import Categories from '../components/categories';
import Footer from '../components/footer';

class IndexPage extends React.Component {

  componentDidMount() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'UA-123994969-1');
  }

  render() {
    return (
      <div>
        <Hero />
        <AboutUs />
        <TheRace />
        <Categories />
        <RaceDay />
        <Footer />
      </div>
    )
  }
}

export default IndexPage
