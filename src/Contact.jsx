import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Componnets/Navbar";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Footer from "./Componnets/footer";

const Contact = () => {
  return (
    <>
    
      <Navbar />
      <div className="container-fluid p-0">
        <div className="contact-img">
          <div className="contact-img-text">
            <span>THE STORY BEHIND</span>
            <h1>Contact Us</h1>
          </div>
        </div>
      </div>


        <div className="container-fluid p-0">
            <div className="contact-form">

                <div className="row p-4 p-md-5 ">
                    <div className="col-md-6 col-12 bg-white p-3 p-md-5 mt-5">
                            <h3 className="text-md-start text-center">For Online Inquiries</h3>
                            <p className="text-md-start text-center mt-md-2 mt-3">Excepteur, porttitor provident repudiandae nisi nisi. Lorem cupiditate.</p>
                            <form className="row g-3">
                                <div className="mb-3 col-sm-6 col-12">
                                    
                                    <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                                </div>
                                <div className="mb-3 col-sm-6">
                                    
                                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                                </div>

                                <div className="mb-3">
                                    
                                    <input type="text" className="form-control" id="text" placeholder="Enter your subject" />
                                </div>

                            <div className="mb-3 col-sm-6">
                                    
                                    <input type="text" className="form-control" id="name" placeholder="Enter your Company" />
                                </div>
                                <div className="mb-3 col-sm-6">
                                    
                                    <input type="number" className="form-control" id="phone" placeholder="Enter your phone"/>
                                </div>
                                
                                <div className="mb-3">
                                    
                                    <textarea className="form-control" id="message" rows="4" placeholder="Your message"></textarea>
                                </div>
                                <button type="submit" className=" btn-contact ms-2">Get Started</button>
                            </form>
                    </div>

                    <div className="col-md-6 col-12 p-5 contact-content">
                      <h1>Get in Touch</h1>
                      <p>perfect for restaurants, cafés, cloud kitchens, catering services, or food delivery businesses.</p>
                      <div className="phone">
                        <FaPhoneSquareAlt className="phone-i"/>
                                 <span className="ms-2">+91 12353 45241</span><br/> 
                                 
                      </div>

                         <div className="phone mt-2">
                        <MdEmail className="phone-i"/>
                           <span className="ms-2">Restaurant22@gmail.com</span><br/>         
                      </div>

                      <div className="Addres">
                      <h5 className="mt-4">Address :-</h5>    
                      <span> 1600 Amphitheatre Parkway
                     New York WC1 1BA</span>  
                      </div>

                         <div className="social-icon text-md-start text-center">
                                        <h4>Follow Us :-</h4>
                      
                                  <NavLink className="social-i">
                                  <FaFacebookF />
                                    </NavLink>
                      
                                    <NavLink className="social-i">
                                  <BiLogoInstagramAlt />
                                  </NavLink>
                      
                                    <NavLink className="social-i">
                                    <FaTwitter/>
                                    </NavLink>
                      
                                    <NavLink className="social-i">
                                    <FaYoutube/>
                                    </NavLink>
                      
                             
                      
                                </div>


                    </div>
                </div>
            </div>

        </div>


         <div class="container-fluid p-4">

        <div class="row p-0 mb-0">

            <div class="iframe-section mb-0">

                <iframe
                    src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
                    title="London Eye, London, United Kingdom" aria-label="London Eye, London, United Kingdom" width="100%" height="550px" class="mb-0">
                </iframe>

            </div>

        </div>

    </div>


         <Footer/>

    </>
  );
};

export default Contact;
