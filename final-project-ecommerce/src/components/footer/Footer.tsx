import React from "react";
import "./footer.css";
import { Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-grid'>
          <div className='footer-column'>
            <h3 className='footer-logo'>Exclusive</h3>
            <h4 className='footer-subtitle'>Subscribe</h4>
            <p className='footer-text'>Get 10% off your first order</p>
            <div className='subscribe-form'>
              <input type='email' placeholder='Enter your email' className='subscribe-input' />
              <button className='subscribe-button' aria-label='Subscribe'>
                <Send size={20} />
              </button>
            </div>
          </div>

          <div className='footer-column'>
            <h4 className='footer-heading'>Support</h4>
            <ul className='footer-links'>
              <li className='footer-link-item'>
                <span>111 Bijoy sarani, Dhaka,</span>
                <span>DH 1515, Bangladesh.</span>
              </li>
              <li className='footer-link-item'>
                <a href='mailto:exclusive@gmail.com' className='footer-link'>
                  exclusive@gmail.com
                </a>
              </li>
              <li className='footer-link-item'>
                <a href='tel:+88015-88888-9999' className='footer-link'>
                  +88015-88888-9999
                </a>
              </li>
            </ul>
          </div>

          <div className='footer-column'>
            <h4 className='footer-heading'>Account</h4>
            <ul className='footer-links'>
              <li>
                <a href='#' className='footer-link'>
                  My Account
                </a>
              </li>
              <li>
                <a href='#' className='footer-link'>
                  Login / Register
                </a>
              </li>
              <li>
                <a href='#' className='footer-link'>
                  Cart
                </a>
              </li>
              <li>
                <a href='#' className='footer-link'>
                  Wishlist
                </a>
              </li>
              <li>
                <a href='#' className='footer-link'>
                  Shop
                </a>
              </li>
            </ul>
          </div>

          <div className='footer-column'>
            <h4 className='footer-heading'>Quick Link</h4>
            <ul className='footer-links'>
              <li>
                <a href='#' className='footer-link'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#' className='footer-link'>
                  Terms Of Use
                </a>
              </li>
              <li>
                <a href='#' className='footer-link'>
                  FAQ
                </a>
              </li>
              <li>
                <a href='#' className='footer-link'>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className='footer-column'>
            <h4 className='footer-heading'>Download App</h4>
            <p className='footer-text app-text'>Save $3 with App New User Only</p>
            <div className='app-section'>
              <div className='qr-code'>
                <img
                  src='https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=ExclusiveApp'
                  alt='QR Code'
                  className='qr-image'
                />
              </div>
              <div className='app-buttons'>
                <a href='#' className='app-button'>
                  <img
                    src='https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg'
                    alt='Get it on Google Play'
                    className='app-badge'
                  />
                </a>
                <a href='#' className='app-button'>
                  <img
                    src='https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg'
                    alt='Download on the App Store'
                    className='app-badge'
                  />
                </a>
              </div>
            </div>
            <div className='social-links'>
              <a href='#' className='social-link' aria-label='Facebook'>
                <Facebook size={20} />
              </a>
              <a href='#' className='social-link' aria-label='Twitter'>
                <Twitter size={20} />
              </a>
              <a href='#' className='social-link' aria-label='Instagram'>
                <Instagram size={20} />
              </a>
              <a href='#' className='social-link' aria-label='LinkedIn'>
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className='footer-copyright'>
          <p>&copy; Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
