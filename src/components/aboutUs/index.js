import React from 'react';
import './aboutUs.scss';
import mikey from '../../images/mikey.jpg';

const AboutUs = () => (
  <section className="section aboutUs" id="aboutUs">
    <div className="container">
      <div className="columns">
        <div className="column is-hidden-touch">
          <figure className="image">
            <img src={mikey} />
            <p className="subtitle">Mikey Mullen, 2004</p>
          </figure>
        </div>

        <div className="column is-three-quarters">
          <h1 className="title">About us</h1>
          <h2 className="subtitle">Fundraising for the RNLI and the Clifden Lifeboat</h2>
          <div className="content">
            <p>The inaugural Clifden Lifeboat 10k Race took place on the 14th September 2008, in a bid to raise funds for the RNLI and the Clifden Lifeboat.</p>

            <p> The event was held close to the anniversary of a tragic event which shocked the West Galway community.
            The MVF St Oliver sank in bad weather on the 17th September 2004, claiming the lives of 4 local fishermen, including 18 year old Mikey Mullen, who had only been at sea for 6 months.
            <br/>This race was organised as a tribute to Mikey and the other three fishermen who lost their lives. </p>

            <p> Due to the overwhelming positive response we have received following the first race, it was decided to make this into a yearly fixture.
            The race is open to all athlethes, as well as leisure runners and walkers, and can be entered into individually or as teams of 3 or 4 people.</p>
          </div>
        </div>

        <div className="column is-hidden-desktop">
          <figure className="image">
            <img src={mikey} />
            <p className="subtitle">Mikey Mullen, 2004</p>
          </figure>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;