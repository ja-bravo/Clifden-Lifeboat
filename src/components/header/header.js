import React from 'react'
import Link from 'gatsby-link'
import './header.scss';

const Header = ({ siteTitle }) => (
  <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <span className="headerTitle">Clifden Lifeboat 10k Race</span>

    <div className="socialIcons is-hidden-touch">
      <a href="https://www.facebook.com/clifdenLifeboat10k/"><span className="mdi mdi-facebook-box" /></a>
      <a href="https://www.instagram.com/clifdenlifeboat10krun/"><span className="mdi mdi-instagram" /></a>
      <a href="https://twitter.com/clifden10k"><span className="mdi mdi-twitter-box" /></a>
    </div>
  </nav>
)

export default Header
