import React from 'react';
import Button from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Join the adventure newsletter!
            </p>
            <p className="footer-subscription-text">
                You can unsubscribe at any time
            </p>
            <div className="input-areas">
                <form action="">
                    <input type="email" name="email" placeholder='Your Email' className='footer-input'/>
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us1</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>                
            </div>
            
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us2</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>                
            </div>            
            
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us3</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>                
            </div>

        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to="/" className="social-logo">
                        TRVL <i className="fab fa-typo3  "></i>
                    </Link>
                </div>
                <small className="website-rights">APLMR &copy; 2022</small>
                <div className="social-icons">
                    <Link className="social-icon-link facebook" to="/" target="_blank" aria-label="Facebook">
                        <i className="fab fa-facebook-f"></i>
                    </Link>                    
                    <Link className="social-icon-link twitter" to="/" target="_blank" aria-label="Twitter">
                        <i className="fab fa-twitter"></i>
                    </Link>                    
                    <Link className="social-icon-link linkedin" to="/" target="_blank" aria-label="LinkedIn">
                        <i className="fab fa-linkedin"></i>
                    </Link>
                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer