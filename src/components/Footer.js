import React from 'react';
import './Footer.css';
//import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>O mnie</h2>
            <Link to='/o-mnie'>Moje doświadczenie</Link>
          </div>
          <div className='footer-link-items'>
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
          <div className='footer-link-items'>
            <h2>Figury</h2>
            <Link to='/muscle-up'>Muscle up</Link>
            <Link to='/backlever'>Backlever</Link>
            <Link to='/'>Human-flag</Link>
            <Link to='/'>Dragon-flag</Link>
            <Link to='/'>Handstand</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.instagram.com/mcnuelk/' target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href='https://www.facebook.com/emanuelmc.kosowski/' target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href='https://www.youtube.com/channel/UCe2cRV_oYCAZ02Hg7s1Wivw/featured?view_as=subscriber' target="_blank" rel="noopener noreferrer">Youtube</a>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            <i className='fas fa-dumbbell'/>&nbsp;CALISOMETRIC
            </Link>
          </div>
          <small className='website-rights'>Calisthenic&nbsp;<i className="fas fa-circle"/>&nbsp; Street Workout &nbsp;<i className="fas fa-circle"/>&nbsp;Gymnastic&nbsp;<i className="fas fa-circle"/>&nbsp;Street Lifting</small>
          <div className='social-icons'>
          <a href="https://www.facebook.com/emanuelmc.kosowski/" className="social-icon-link facebook" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/mcnuelk/" className="social-icon-link instagram" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCe2cRV_oYCAZ02Hg7s1Wivw/featured?view_as=subscriber" className="social-icon-link youtube" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://github.com/kosowskie" className="social-icon-link github" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/emanuel-kosowski-051b8a1b1/" className="social-icon-link linkedin" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;