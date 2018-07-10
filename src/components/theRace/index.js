import React from 'react';
import './theRace.scss';
import mikey from '../../images/mikey.jpg';
import Map from '../map';

const TheRace = () => (
  <section className="section theRace">
    <div className="container">
      <div className="columns">
        <div className="column is-8">
          <h1 className="title">The race</h1>
          <div className="content">
            <p> Race start at the Court House, across from the Topaz petrol station. It is an out and back route, which goes up the scenic Sky road and while walkers will be able to enjoy the beautiful scenery and views of Clifden Bay, 
            it is challenging enough for any serious runners.</p>
            
            <p>It returns by the Thomas Whelan Memorial, to finish outside the Alcock and Brown Hotel in the town centre. 
            A water station and race marshalls will be in attendance at the turn back point. </p>

            <p> You must give your race number to marshalls at this point before turning back.</p>

            <p> The route is accuratly measured by an AAI official, and will be well marked out with markers at every kms (on the road). Marshalls will be in attendance at every junction </p>
          </div>
        </div>

        <div className="column">
          <Map />
        </div>
      </div>
    </div>
  </section>
);

export default TheRace;