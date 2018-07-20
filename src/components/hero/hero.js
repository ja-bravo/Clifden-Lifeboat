import React from 'react';
import './hero.scss';
import * as axios from 'axios';

export default class Hero extends React.Component {

  state = {
    customText: '',
  }
  componentWillMount() {
    axios.get('https://clifden10k.jabravo.com/race').then(r => {
      if (r.data) {
        this.setState({customText: r.data[0].title})
      }
    });
  }

  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title"> Clifden Lifeboat 10k race</h1>
            <h2 className="subtitle">Do you have what it takes?</h2>
          </div>

          <div className="extraInfo">
            <p className="custom">{this.state.customText}</p>
            <a href="https://www.runireland.com/events/clifden-lifeboat-10k-run/" className="enter">Enter online</a>
          </div>
        </div>
      </section>
    )
  }
}