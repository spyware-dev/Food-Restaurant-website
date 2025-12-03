import React from 'react';
import { NavLink } from "react-router-dom";
// import './App.css'
import { FaFacebookF } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const Footer = () => (
  <>
    <footer className='footer'>
      <div className="container-fluid">
        <div className="row p-5 p-md-5">

          <div className="col-md-4">
            <NavLink to="/home" className="navbar-brand ms-1 ms-md-5">
              <img src="./Img/logo-res1.png" alt="" width={200} height={80} />
            </NavLink>

            <p className='pe-4 px-4 pt-3 mb-0 mb-md-0 logo-p'>Felis in purus molestiae arcu cumque purus faucibus leo habitant neque tempore ullamcorper aliquam quaerat convallis!</p>

            <div className="social-icon">

              <NavLink className="social-i">
                <FaFacebookF />
              </NavLink>

              <NavLink className="social-i">
                <BiLogoInstagramAlt />
              </NavLink>

              <NavLink className="social-i">
                <FaTwitter />
              </NavLink>

              <NavLink className="social-i">
                <FaYoutube />
              </NavLink>






            </div>

          </div>

          <div className="col-md-2 mt-5 mt-md-0">
            <h3>Useful links</h3>
            <ul className="navbar-nav   mb-2 mb-lg-0 ">
              <li className="nav-item p-0">
                <NavLink to="/home" className="nav-link a link-fs" aria-current="page">Home</NavLink>
              </li>

              <li className="nav-item p-0">
                <NavLink to="/menu" className="nav-link a link-fs" aria-current="page">Menu</NavLink>
              </li>

              <li className="nav-item p-0">
                <NavLink to="/about" className="nav-link a link-fs" aria-current="page">About Us</NavLink>
              </li>

              <li className="nav-item p-0">
                <NavLink to="/contact" className="nav-link a link-fs" aria-current="page">Contact Us</NavLink>
              </li>
            </ul>

          </div>

          <div className="col-md-2 mt-5 mt-md-0">
            <h3>Infomation</h3>
            <ul className="navbar-nav  mb-2 mb-lg-0 ">
              <li className="nav-item  p-0">
                <NavLink to="" className="nav-link a link-fs text-md-start" aria-current="page">Start a Return</NavLink>
              </li>

              <li className="nav-item p-0">
                <NavLink to="" className="nav-link a link-fs" aria-current="page">Shipping FAQ</NavLink>
              </li>

              <li className="nav-item p-0">
                <NavLink to="" className="nav-link a link-fs" aria-current="page">Terms & Conditions</NavLink>
              </li>

              <li className="nav-item p-0">
                <NavLink to="" className="nav-link a link-fs" aria-current="page">Privacy Policy</NavLink>
              </li>

            </ul>
          </div>

          <div className="col-md-4 mt-5 mt-md-0">
            <h3 className=''>Get in Touch</h3>
            <div className="mt-3">
              <NavLink className="text-dark phone">
                <FaPhoneAlt />
              </NavLink>
              <span className='ms-2 phone-num'>+91 12353 45241</span>
            </div>
            <div className="mt-2">
              <NavLink className="email ">
                <MdEmail />
                <span className='ms-2'>Restaurant22@gmmail.com</span>
              </NavLink>
            </div>

            <div className="mt-2">
              <NavLink className="email ">
                <FaLocationDot />
                <span className='ms-2'>1600 Amphitheatre Parkway New York WC1 1BA</span>
              </NavLink>
            </div>
            <div className="pay mt-4">
              <NavLink>
                <img src="./Img/pay.png" alt="" width="80%" height="" />
              </NavLink>
            </div>

          </div>
        </div>
      </div>
      <hr />
      <div className=" mt-4 text-center copyright">© 2025 Food Restaurant | All Rights Reserved. Built with ❤️ by Raj Narigara</div>

    </footer>
  </>
)

export default Footer
