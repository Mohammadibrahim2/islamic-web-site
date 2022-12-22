import React from "react";
import { Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import {FiPhoneCall} from "react-icons/fi";
import {FiCalendar}from "react-icons/fi";


const Navbar2=()=>{

    const menu=[
        <li className=" font-semibold lg:text-black text-white hover:bg-base-100" ><Link to="/"><span className="text-orange-500 p-4 border rounded-full border-dotted border-slate-400"><FiCalendar></FiCalendar></span>
        Info:<span className="text-orange-500 "> Starts From 10th March</span></Link></li>,
        <li className="font-semibold lg:text-black text-white hover:bg-base-100"><Link to="/"><span className=" text-orange-500 p-4 border rounded-full border-dotted border-slate-400"><FiPhoneCall></FiPhoneCall></span>
        Call Us:<span className="text-orange-500">Call Us: +(88) 01632846454</span></Link></li>,
        <li className="font-semibold lg:text-black text-white hover:bg-base-100"><Link to="/"><span className="text-orange-500 p-4 border rounded-full border-dotted border-slate-400"><FiMail></FiMail></span>
        Email:<span className="text-orange-500">tawhid6454@gmail.com</span></Link></li>,
       
    ]
   const menu2=[
    <li className="text-orange-500 hover:bg-base-100"><Link to="/">Home</Link></li>,
    <li className="text-orange-500 hover:bg-base-100"><Link to="#service">Services</Link></li>,
    <li className="text-orange-500 hover:bg-base-100"><Link to="#blog">Blog & Event</Link></li>,
    <li className="text-orange-500 hover:bg-base-100"><Link to="#scholar">Scholars</Link></li>,
    
    <li className="text-orange-500 hover:bg-base-100"><Link to="#contact">Contact</Link></li>,
   
    <li className="text-orange-500 hover:bg-base-100"><Link to="/login">Login</Link></li>,
   ]
    return(
      
  <div>
    <div className="navbar bg-white">
  <div className="navbar-start px-10">
    <div className="dropdown">
      <label tabIndex={0} className="btn text-orange-500 lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className=" menu menu-compact dropdown-content mt-2 py-2 shadow-2xl bg-black rounded w-96">
        
      {menu2}
      <hr/>
       {menu}
       
        
      </ul>
     
    </div>
    <a className="btn btn-ghost normal-case text-2xl text-orange-500 font-extrabold">Tawhid</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    
    <ul className="menu menu-horizontal p-0">
    {menu}
    </ul>
  </div>
  <div className="navbar-end pr-5 ">
 
    
    <Link to="/"><button className=" btn bg-orange-500 text-white border-none hover:text-orange-500 hover:bg-blcak">Make donation</button> </Link>
  </div>
 
</div>
 
</div>
       
    )
}
export default Navbar2