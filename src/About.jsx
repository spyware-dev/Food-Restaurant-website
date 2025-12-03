import React from 'react'
import Navbar from './Componnets/Navbar'
import { RiTableLine } from "react-icons/ri";
import Footer from './Componnets/footer';
import { FaWifi } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";

import { FaCar } from "react-icons/fa";


const About = () => {
  return (
    <>
    <Navbar/>

    <div className="container-fluid p-0">
        <div className="about">
            <div className="about-text text-center">
                <span>THE STORY BEHIND</span>
                <h1>About Us</h1>
            </div>

        </div>
    </div>
    {/* ------------------------------------------------ */}
    
    <div className="container">
      <div className="main-about mt-5">
        <div className="row">
          <div className="col-md-3 col-sm-3 col-lg-3 col-6 about-img-1">
            <img src="./Img/about-1.jpg" alt="" />
          </div>

          <div className="col-md-3 col-sm-3 col-lg-3 col-6 about-img-2">
            <img src="./Img/about-2.jpg" alt="" />
          </div>

          <div className="col-md-6 main-about-content mt-md-0 mt-4">
            <span>QUALITY SERVICE</span>
            <h1>Delicious food & exquisite drinks</h1>
              <p>
         Experience a culinary journey where every dish is crafted with passion and the freshest ingredients. Our chefs blend tradition with innovation to bring you flavors that delight thesenses.
        </p>

        <p class="text-dark fw-500">Mon-Fri :&nbsp; 9 AM – 22 PM<br/>Sunday :&nbsp; 9 AM – 1 PM</p>
        <button className="btn-2" type="submit"> <RiTableLine className='me-2 ri-table'/>
         Book a table now</button>
          </div>
        </div>
      </div>
    </div>

{/* ----------------------------------------------- */}

    <div className="container-fluid p-0 dine-out-img">
      <div className="container">
        <div className="Our-Chefs pt-5 text-center">
          <h1 className='text-center pt-5'>Our Chefs</h1>
          <img src="./Img/frill-free-img.png" alt="" className='mt-4' />
        </div>

        <div className="row mt-5">
          <div className="col-md-4 mt-5 chef-img text-center ">
            <div className="chef-content">

           
            <h5 className=''>Chef John</h5>
            <p>Expert in Italian Cuisine</p>
             </div>
          </div>

          <div className="col-md-4 mt-5 chef-img2 text-center">
            <div className="chef-content">

           
            <h5 className=''>Chef Julian Stone</h5>
            <p>French gourmet specialist</p>
             </div>
          </div>

          <div className="col-md-4 mt-5 chef-img3 text-center">
            <div className="chef-content">

           
            <h5 className=''>Chef Leo Bennett</h5>
            <p>Restaurant Manager</p>
             </div>
          </div>

        </div>

        <div className="row mt-5 mt-md-4">
          <div className="col-md-6 chef-img4 mt-md-0 mt-1">
             <div className="chef-content">

           
            <h5 className=''>Chef Isabella Cruz</h5>
            <p>French gourmet specialist</p>
             </div>
          </div>

          <div className="col-md-6 chef-img5 mt-md-0 mt-5">
             <div className="chef-content">

           
            <h5 className=''>Kenji Nakamura </h5>
            <p>Looking For Management Interns</p>
             </div>
          </div>
        </div>

      </div>

    </div>
    {/* ------------------------------------------- */}

    <div className="container-fluid p-0 bgpink">  
          <div className="container amenities">
            <h1 className=''>Restaurant Amenities</h1>
            <img src="./Img/divider-free-img.png" alt="" />



          </div>
          <div className="container">

          
          <div className="row mt-0 mt-md-5">

              <div className="col-md-3 col-6 mt-md-0 ">
                <FaWifi className='amenities-i'/> <span className='ms-2 icon-box-text'>Free WiFi</span>
              </div>

              <div className="col-md-3 col-6 mt-md-0 ">
                <FaFire className='amenities-i'/> <span className='ms-2 icon-box-text'>Smoking Zone</span>
              </div>

                <div className="col-md-3 col-6 mt-md-0 mt-3">
                <FaMusic  className='amenities-i'/> <span className='ms-2 icon-box-text'>Live Music</span>
              </div>

                <div className="col-md-3 col-6 mt-md-0 mt-3">
                <FaCar className='amenities-i'/> <span className='ms-2 icon-box-text'>Parking</span>
              </div>
          </div>
          </div>

    </div>


    {/* ------------------------------------------------------------------- */}

    <div className="container-fluid about-banner-img  p-0 m-0">
        <div className="about-banner-content text-center">
          <span>COME AND SEE</span>
          <h1>We create good dish expertise</h1>
          <p> Good Food | Good Helth</p>
        </div>

      </div>


      <Footer/>
    </>
  )
}

export default About
