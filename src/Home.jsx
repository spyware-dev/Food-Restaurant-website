import React from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Navbar from "./Componnets/Navbar";
import Footer from "./Componnets/footer";

const Home = () => {
  return (
    <>
    < Navbar />
      <div className="container-fluid mx-0 px-0 ">
        <div className="hero-img">
          <div className="container hero-content">
            <div className="row">
              <div className="hero-content-section">
                <div className="col-md-2 fork-img text-start">
                  <img src="./Img/fork-free-img.png" alt="" width={60} />
                </div>
                <div className="col-md-8 text-center hero-text">
                  <h1 className="text-center text-white ">
                    Taste Your fav dish from Our Restaurant
                  </h1>
                  <p className="text-center text-white ">
                    Good Food | Good Helth
                  </p>
                  {/* <img src="./Img/frill-free-img.png" alt="" className="frill-img"/> */}
                </div>
                <div className="col-md-2 text-end">
                  <img
                    src="./Img/knife-free-imge.png"
                    alt=""
                    className="knife-img"
                    width={60}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------------------- */}
      <div className="main-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 main-content mt-5 text-center text-md-start">
              <h4 className="mt-4 text-center text-md-start">
                Country's Most Loved!
              </h4>
              <h2 className=" text-center text-md-start">Welcome</h2>
              <span className=" text-center text-md-start">
                We Are Locally Crafted Food & Wine Serving Since 1978.
              </span>
              <p className=" text-center text-md-start">
                Congue, gravida. Placeat nibh sunt semper elementum anim!
                Integer lectus debitis auctor. Molestias vivamus eligendi ut,
                cupidatat nisl iaculis etiam! Laboris aenean.{" "}
              </p>
              <button type="submit" className="btn-1 text-center text-md-start">
                More About Us
                <FaArrowRight className="ms-3" />
              </button>
            </div>

            <div className="col-md-4 Pizza-slice">
              <img src="./Img/Pizza-slice.jpg" alt="" />
            </div>
            <div className="col-md-4 food-table-meet text-center ">
              <div className="food-table-meet-content">
                <h1>Hours</h1>
                <p>
                  Monday - Saturday | 9AM - 22PM <br />
                  Saturday - Sunday | 9AM - 1PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------- */}
      <div className="container-fluid mx-0 px-0">
        <div className="our-menu-section">
          <div className="our-menu-content text-center">
            <img src="./Img/parcelli.png" alt="" />
            <h1 className="text-center">Our Special Menu</h1>
            <p className="text-center">
              Quia possimus, occaecat platea provident. Reiciendis, architecto
              hymenaeos habitasse pharetra iste fugit corrupti architecto.
            </p>
          </div>

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4 cart-menu text-center ">
                <img src="./Img/pizaa.png" alt="" className="pizaa-slice-img" />
                <h3 className="">
                  Fresh <br /> Mozzarella pizza
                </h3>
                <p className="">
                  Classic marinara sauce, authentic old-world pepperoni.
                </p>
                <img src="./Img/pizza-banner-2.png" alt="" className="pizza" />
              </div>

              <div className="col-md-6 col-lg-4 cart-menu text-center ">
                <img src="./Img/fruits.png" alt="" className="fruiti-img" />
                <h3 className="">
                  Fresh <br /> Toot Fruits
                </h3>
                <p className="">
                  Fress organic fruits available at our market place.
                </p>
                <img src="./Img/menu-2.jpg" alt="" className="pizza mt-3" />
              </div>

              <div className="col-md-6 col-lg-4 cart-menu text-center ">
                <img
                  src="./Img/bread.png"
                  alt=""
                  className="fruiti-img"
                  height={80}
                />
                <h3 className="">
                  Fresh <br /> Cheese burger
                </h3>
                <p className="">
                  Fress organic fruits available at our market place.
                </p>
                <img src="./Img/menu-3.jpg" alt="" className="pizza mt-3" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------- */}

      <div className="container-fluid meeting-table mx-0 px-0">
        <div className="meeting">
          <div className="container">
            <div className="meeting-content text-center">
              <h1>Luxury Table For Customer</h1>
              <p className="col-md-8 mx-auto">
                Experience fine dining at its best with our luxury tables,
                designed for comfort and elegance. Enjoy personalized service
                and a sophisticated atmosphere, perfect for special occasions or
                business meetings.
              </p>
              <div className="table-img"></div>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------- */}

      <div className="container popular">
        <h1>Popular Dishes</h1>
        <p className="col-md-8 col-md-8 mx-auto">
          Quia possimus, occaecat platea provident. Reiciendis, architecto
          hymenaeos habitasse pharetra iste fugit corrupti architecto.
        </p>
        <div className="row mt-5">
          <div className="col-md-4 popular-dishes mt-md-0 mt-0">
            <img src="./Img/popular-1.jpg" alt="" />
            <h3>
              Tuna Roast Source
              <span class=" pull-right">$149</span>
            </h3>
            <p className="ms-0 text-start">
              Classic marinara sauce, authentic old-world pepperoni.
            </p>
          </div>

          <div className="col-md-4 popular-dishes mt-md-0 mt-5">
            <img src="./Img/popular-2.jpg" alt="" />
            <h3>
              Crab With Curry Sources
              <span class=" pull-right">$169</span>
            </h3>
            <p className="ms-0 text-start">
              Quis nibh bibendum, sed volutpat tortor ultrices. Mauris convallis
              pellen.
            </p>
          </div>

          <div className="col-md-4 popular-dishes mt-md-0 mt-5">
            <img src="./Img/popular-3.jpg" alt="" />
            <h3>
              Salted Fried Chicken
              <span class=" pull-right">$199</span>
            </h3>
            <p className="ms-0 text-start">
              Mauris Volutpat reiciendis esse luctus ipsum earums corporis Sequi
              varius.
            </p>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------------- */}

      <div className="container Offers">
        <h1>Today’s Best Offers</h1>
        <div className="row justify-content-between mt-5">
          <div className="col-md-6 offers-section p-0 d-flex">
            <div className="col-md-6 half-offer p-0 col-lg-6 col-sm-12 col-12 ">
              <img src="./Img/best-offers-image-1.jpg" alt="" />
            </div>
            <div className="col-md-6 half-offer p-5 p-md-4 col-lg-6 col-sm-12 col-12  text-start text-md-center">
              <span>$7</span>
              <h2>Greek Salad</h2>
              <p>
                Vestibulum commodo sapien non elit porttitor, vitae volutpat
                nibh mollis.
              </p>
              <button className="btn-detail" type="submit">
                More Details
              </button>
            </div>
          </div>

          <div className="col-md-6 offers-section p-0 d-flex mt-5 mt-md-0">
            <div className="col-md-6 half-offer p-0 col-lg-6 col-sm-12 col-12">
              <img src="./Img/best-offers-image-2.jpg" alt="" />
            </div>
            <div className="col-md-6 half-offer  col-lg-6 col-sm-12 p-5 p-md-4 text-start text-md-center ">
              <span>$19</span>
              <h2>cheese burger</h2>
              <p>
                Fress organic and best Quality available at our market place.
              </p>
              <button className="btn-detail" type="submit">
                More Details
              </button>
            </div>
          </div>

          <div className="col-md-6 offers-section p-0 d-flex mt-5 mt-md-5">
            <div className="col-md-6 half-offer  col-lg-6 col-sm-12 p-5 p-md-4 text-start text-md-center ">
              <span>$19</span>
              <h2>Papaya Juice</h2>
              <p>100% Locally grown GMO-Free Organic Fruits</p>
              <button className="btn-detail" type="submit">
                More Details
              </button>
            </div>

            <div className="col-md-6 half-offer p-0 col-lg-6 col-sm-12 col-12">
              <img src="./Img/fruti.jpg" alt="" className="border-rads" />
            </div>
          </div>

          <div className="col-md-6 offers-section p-0 d-flex mt-5 mt-md-5">
            <div className="col-md-6 half-offer  col-lg-6 col-sm-12 p-5 p-md-4 text-start text-md-center ">
              <span>$19</span>
              <h2>Fusilli Pasta Salad</h2>
              <p>
                {" "}
                Enjoy our Fusilli Pasta Salad, made with fresh the best of taste
                and nutrition.
              </p>
              <button className="btn-detail" type="submit">
                More Details
              </button>
            </div>

            <div className="col-md-6 half-offer p-0 col-lg-6 col-sm-12 col-12">
              <img src="./Img/nudels.jpg" alt="" className="border-rads" />
            </div>
          </div>

        </div>
      </div>

      {/* ---------------------------------------------------------------------- */}
          <div className="container">
            <div className="customer">

            
            <div className="row">
              <div className="col-md-6 happy-customer">
                <img src="./Img/qute.png" alt="" className="qutetion-img"/>
                <img src="./Img/parcelli.png" alt="" className="parcelli-img"/>
                <h1>Happy Customers!</h1>

                <div className="customer-details">
                <img src="./Img/customer1.png" alt="" className="mt-3 mt-md-5"/>
                <p>"Aliquip habitant ea suscipit ea varius cras habitasse ligula doloremque cepteur vehicula iste nibh, mattis assumenda massa"</p>
                <span>- Shamika Smith</span>
                </div>

              </div>


              <div className="col-md-6">
                <div className="customer-details">
                <img src="./Img/customer2.png" alt="" className="mt-3"/>
                <p>"Aliquip habitant ea suscipit ea varius cras habitasse ligula doloremque cepteur vehicula iste nibh, mattis assumenda massa"</p>
                <span>- Jose Hatts</span>
                </div>

                <div className="customer-details mb-md-3 mb-3">
                <img src="./Img/customer3.png" alt="" className="mt-3"/>
                <p>"Aliquip habitant ea suscipit ea varius cras habitasse ligula doloremque cepteur vehicula iste nibh, mattis assumenda massa"</p>
                <span>- Monica Tata</span>
                </div>
                 <div className="social-icon text-md-start text-center">
                  <h4>Check Out Our Reviews</h4>

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

      <Footer/>
    </>
  );
};

export default Home;
