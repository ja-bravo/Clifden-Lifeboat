import React from 'react'
import './icons.scss';

const SocialIcons = ({ isMobile }) => (
  <div className={`${!isMobile ? 'is-hidden-touch' : 'is-hidden-desktop'} socialIcons`}>
    <a href="https://www.facebook.com/clifdenLifeboat10k/"><span className="mdi mdi-facebook-box" /></a>
    <a href="https://www.instagram.com/clifdenlifeboat10krun/"><span className="mdi mdi-instagram" /></a>
    <a href="https://twitter.com/clifden10k"><span className="mdi mdi-twitter-box" /></a>
</div>
)

export default SocialIcons
