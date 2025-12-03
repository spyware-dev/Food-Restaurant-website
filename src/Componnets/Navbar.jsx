import React,{ Component } from 'react'
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

export default class Navbar extends Component {
  constructor(){
      super();
      this.state={
          show: true,
      }
  }
  render() {
  return (
    <>
       <nav className="navbar navbar-expand-lg py-0" >
       <div class="container-fluid mx-0 px-0">
     <Link to="/Home" className="navbar-brand ms-4">
      <img  src='./Img/logo-res1.png' alt="Logo" width={200}/>
     </Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={ ()=>{ this.setState({show: !this.state.show}) } }>
          {this.state.show ? <FiMenu /> : <IoCloseSharp />}
        </button>

     <div className={this.state.show ? 'collapse navbar-collapse col-md-5' : 'collapse navbar-collapse active'}>

       <ul className="navbar-nav  text-center  text-md-end ">
         <li className="nav-item">
           <Link to="/Home" className="nav-link a" aria-current="page">home</Link>
         </li>

         <li className="nav-item">
           <Link to="/Menu" className="nav-link a" aria-current="page" >menu</Link>
         </li>

         <li className="nav-item">
           <Link to="/About" className="nav-link a" aria-current="page" >About Us</Link>
         </li>

         <li className="nav-item">
           <Link to="/Contact" className="nav-link a " aria-current="page" >Contact Us</Link>
         </li>
       </ul> 
      <div className=' mt-2 mt-md-0 cart-i text-center '>
          <li className="nav-item header-icon ">
           <Link to="" className="nav-link a  border-0" aria-current="page" href="#"> <button className="btn-submit" type="submit">Reservation</button></Link>
         </li>

       
         </div>

     </div>
     


   </div>
 </nav>
  </>
  )
}
}


