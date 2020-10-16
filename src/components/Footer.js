import React from 'react';
import './Footer.css';
//import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>O mnie</h2>
            <Link to='/o-mnie'>Moje doświadczenie</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Kontakt</h2>
            <Link to='/contact'>Kontakt</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <a href="https://github.com/kosowskie" target="_blank" rel="noopener noreferrer">
                Github
            </a>
            <a href="https://www.linkedin.com/in/emanuel-kosowski-051b8a1b1/" target="_blank" rel="noopener noreferrer">
                LinkedIn
            </a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Figury</h2>
            <Link to='/'>Muscle up</Link>
            <Link to='/'>Backlever</Link>
            <Link to='/'>Human-flag</Link>
            <Link to='/'>Dragon-flag</Link>
            <Link to='/'>Handstand</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.instagram.com/mcnuelk/' target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href='https://www.facebook.com/emanuelmc.kosowski/' target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href='https://www.youtube.com/channel/UCe2cRV_oYCAZ02Hg7s1Wivw/featured?view_as=subscriber' target="_blank" rel="noopener noreferrer">Youtube</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <i className='fas fa-dumbbell'/>&nbsp;CALISOMETRIC
            </Link>
          </div>
          <small class='website-rights'>Calisthenic&nbsp;<i class="fas fa-circle"/>&nbsp; Street Workout &nbsp;<i class="fas fa-circle"/>&nbsp;Gymnastic&nbsp;<i class="fas fa-circle"/>&nbsp;Street Lifting</small>
          <div class='social-icons'>
          <a
          href="https://www.facebook.com/emanuelmc.kosowski/" class="social-icon-link facebook" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-facebook"></i>
            </a>
            <a
          href="https://www.instagram.com/mcnuelk/" class="social-icon-link instagram" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCe2cRV_oYCAZ02Hg7s1Wivw/featured?view_as=subscriber" class="social-icon-link youtube" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="https://github.com/kosowskie" class="social-icon-link github" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/emanuel-kosowski-051b8a1b1/" class="social-icon-link linkedin" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;