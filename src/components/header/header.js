import React from 'react'
import SocialIcons from '../socialIcons';
import './header.scss';

const Header = ({ }) => (
  <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <span className="headerTitle">Clifden Lifeboat 10k Race</span>

    <SocialIcons />
  </nav>
)

export default Header
