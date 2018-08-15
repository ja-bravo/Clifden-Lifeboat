import React from 'react';
import './raceDay.scss';
import SocialIcons from '../socialIcons';

const RaceDay = () => (
  <section className="section raceDay" id="raceDay">
    <div className="container">
      <div className="columns">
        <div className="column">
          <h1 className="title">Race day</h1>
          <div className="content">
           <p>Registration and number collection will be from 12.15 until 1.30pm in the Town Hall, Clifden. <br/>
           The race will begin at 2pm, at the court House, (across from the Topaz Petrol station). <br/> <br/> There will be 2 water stations, one at the mid point and one at the finish line. </p>
        </div>
        
        <div className="columns">
          <div className="column info is-6">
            <p className="subtitle"> Public car parking </p>
            <ul>
              <li> <span className="mdi mdi-map-marker" /> Beside the Station House Hotel on the N59 Galway rd (free) </li>
              <li> <span className="mdi mdi-map-marker" /> At the Church beside the Court House across from the Topaz petrol station </li>
              <li> <span className="mdi mdi-map-marker" /> In the Supervalue car park on the Square (please note this car park operates shop hours) </li>
            </ul>
          </div>

          <div className="column info is-6">
            <p className="subtitle"> Public toilets </p>
            <ul>
              <li> <span className="mdi mdi-map-marker" /> In Supervalue, on The Square (across from the Alcock and Brown) </li>
              <li> <span className="mdi mdi-map-marker" /> At the Topaz petrol station </li>
              <li> <span className="mdi mdi-map-marker" /> The coach park, across from the Station House Hotel (coin operated) </li>
            </ul>
          </div>

          <div className="column is-hidden-desktop">
           <a href="https://www.njuko.net/clifden-lifeboat-10k/select_competition" className="enter">Enter online</a>

           <SocialIcons isMobile/>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
);

export default RaceDay;