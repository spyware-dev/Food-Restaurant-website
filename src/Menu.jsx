import React from "react";
import Navbar from "./Componnets/Navbar";
import Footer from "./Componnets/footer";

const Menu = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid p-0 mb-5">
        <div className="menu">
          <div className="text-center menu-text">
            <h1 className="">Our Menu</h1>
            {/* <img src="./Img/frill-free-img.png" alt="" className='mt-1'/> */}

            <p>
              A taste of perfection in every dish - fine dining with a modern
              twist.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid p-0">
        <div className="main-menu-div">

        
        <div className="main-menu-1">
          <div className="menu-section">

            <div className="container">
              <div className="row pt-5">
                <div className="col-md-6 menu-half">
                  <div className="menu-half-img"></div>
                </div>

                <div className="col-md-6 menu-half-content p-5">
                  <h1>Pasta</h1>
                  <img src="./Img/divider-free-img.png" alt="" />

                  <div className="half-box">
                    <h3>
                      Creamy Spinach <span className=" pull-right1">$25.00</span>
                    </h3>
                    <p>
                      Penne pasta tossed in a rich, velvety three-cheese cream
                      sauce, mixed with sautéed spinach.
                    </p>
                  </div>

                  <div className="half-box">
                    <h3>
                      Pepper Penne <span className=" pull-right1">$21.00</span>
                    </h3>
                    <p>
                      
                      sweet roasted red peppers shredded mozzarella & cheddar.
                      Served warm in a rustic bowl for hearty comfort with every
                      bite.
                    </p>
                  </div>

                  <div className="half-box">
                    <h3>
                      Tuscan Cream Pasta
                      <span className=" pull-right1">$23.00</span>
                    </h3>
                    <p>
                      
                      A comforting bowl of penne pasta smothered in a rich,
                      creamy garlic parmesan sauce.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          {/* ---------------------------------- */}
              <div className="menu-section-1">
            <div className="container mt-100">
              <div className="row pt-5">
                

                <div className="col-md-6 menu-half-content menu-half-content1 p-5">
                  <h1 className="mt-5">Desserts</h1>
                  <img src="./Img/divider-free-img.png" alt="" />

                  <div className="half-box">
                    <h3>
                      Salted Caramel Tart <span className=" pull-right1">$18.00</span>
                    </h3>
                    <p>
                      Salted caramel custard tart, vanilla ice-cream, almond biscuit or
                      Apple, sorbet, brown butter, puff pastry.
                    </p>
                  </div>

                  <div className="half-box">
                    <h3>
                     Basque cheesecake<span className=" pull-right1">$17.00</span>
                    </h3>
                    <p>
                      
                    Spanish-style cheesecake with a beautifully caramelized top and a creamy, melt-in-the-mouth center.  Puff pastry, poached rhubarb, cheesecake mousse, vanilla ice-cream.
                    </p>
                  </div>

                  <div className="half-box">
                    <h3>
                      Red Cheese Mousse
                      <span className=" pull-right1">$14.50</span>
                    </h3>
                    <p>
                      
                      Layers of soft red velvet sponge and whipped cheesecake mousse, Hints of vanilla and cocoa in every bite.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 menu-half1 mt-5">
                  <div className="menu-half-img1"></div>
                </div>
              </div>
            </div>
        </div>  
        {/* ------------------------ */}

        <div className="container main-menu-1">
              <div className="row pt-5 mt-100 ">
                <div className="col-md-6 menu-half2">
                  <div className="menu-half-img2"></div>
                </div>

                <div className="col-md-6 menu-half-content p-5">
                  <h1>Platter</h1>
                  <img src="./Img/divider-free-img.png" alt="" />

                  <div className="half-box">
                    <h3>
                      Sautéed Spinach <span className=" pull-right1">$12.00</span>
                    </h3>
                    <p>
                     Netus integer minus fugit, animi accumsan adipisicing egestas aperiam.
                    </p>
                  </div>

                  <div className="half-box">
                    <h3>
                      Vegetable Sauté<span className=" pull-right1">$13.00</span>
                    </h3>
                    <p>
                      
                     Eius nisl nihil corporis mauris debitis per aliquam laudantium officia Roasted eggplant spread, marinated tomatoes with garlic & fresh basil 8.
                    </p>
                  </div>

                  <div className="half-box">
                    <h3>
                      Crumbled Sausage
                      <span className=" pull-right1">$15.00</span>
                    </h3>
                    <p>
                      
                      Rerum esse aliquid molestias diamlorem purus atque ante eget, nostra orci cum, condimentum euis.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          {/* ------------------------- */}

             <div className="menu-section-1">
            <div className="container mt-100">
              <div className="row pt-5">
                

                <div className="col-md-6 menu-half-content menu-half-content1 p-5">
                  <h1 className="mt-5">Pizza</h1>
                  <img src="./Img/divider-free-img.png" alt="" />

                  <div className="half-box">
                    <h3>
                      BBQ Special Pizza <span className=" pull-right1">$15.00</span>
                    </h3>
                    <p>
                      Roasted eggplant spread, marinated tomatoes with garlic & fresh basil. 
                    </p>
                  </div>

                  <div className="half-box">
                    <h3>
                     Spe. Cheesy Cheese <span className=" pull-right1">$13.00</span>
                    </h3>
                    <p>
                      
                    Dive into a rich, creamy indulgence with our Special Cheesy Cheese Pizza — a dream come true for all cheese lovers.
                    </p>
                  </div>

                  <div className="half-box">
                    <h3>
                      Chilly Pizza
                      <span className=" pull-right1">$11.50</span>
                    </h3>
                    <p>
                      
                     Chilly Pizza a bold blend of spicy green chilies, jalapeños, and chili flakes layered over melted mozzarella on a crisp, golden crust.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 menu-half3  mt50">
                  <div className="menu-half-img3"></div>
                </div>
              </div>
            </div>
        </div> 




          </div>
        </div>
        </div>
      </div>

    <Footer/>
    </>
  );
};

export default Menu;
