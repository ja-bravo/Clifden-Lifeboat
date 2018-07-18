import React from 'react';
import './categories.scss';
import prices from '../../images/prices.jpg';

const Categories = () => (
  <section className="section categories" id="categories">
    <div className="container">
      <div className="columns">

        <div className="column is-hidden-touch">
          <figure className="image" />
        </div>

        <div className="column is-three-quarters">
          <h1 className="title">Race categories</h1>
          <h2 className="subtitle">Trophies for 1st, 2nd and 3rd overall male/female</h2>
          <div className="content">
            <h3 className="title"> Runners </h3>
            <p className="subtitle is-spaced">Trophies for 1st male and female Under 40, Under 50, Under 60 and 60+ </p>

            <h3 className="title">Walkers and Run/Walkers </h3>
            <p className="subtitle is-spaced">Trophies for 1st</p>

            <h3 className="title"> Teams </h3>
            <p className="subtitle is-spaced">Perpetual shield for 1st team, and smaller individual trophy for each winning team member to keep. <br className="is-hidden-desktop"/><br className="is-hidden-desktop"/>
            Smaller individual trophies for each member of 2nd and 3rd team</p>

            <h3 className="title"> Trophy for anyone who can beat the best finishing times </h3>
            <p className="subtitle men"><span className="best"> Men </span> 35.34 minutes (Martin Lyons, 2010)</p>
            <p className="subtitle woman is-spaced"><span className="best">Women </span> 45.07 minutes (Rachel Mannion, 2010)</p>

            <p>Entry fee is <span className="mdi mdi-currency-eur" /> 20 individuals or <span className="mdi mdi-currency-eur" /> 50/teams</p>
          </div>
        </div>

        <div className="column is-hidden-desktop">
          <figure className="image"/>
        </div>
      </div>
    </div>
  </section>
);

export default Categories;