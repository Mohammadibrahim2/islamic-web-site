import React from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";


const Navbar3=()=>{

const menu=[
    <li><Link to="/">Home</Link></li>,
    <li><a href="#service">service</a></li>,
    <li><a href="#blog">Blogs & Event</a></li>,
    <li><a href="#scholars">Scholars</a></li>,
    <li><a href="#contact">Contact</a></li>,
 
   <li> <Link to="/login">Login</Link></li>
   

]
    

    return(
        <div className="relative   bg-orange-500 z-20">
           <div className=" w-full h-full lg:flex lg:flex-row justify-evenly py-5 pr-5 hidden ">
            <div className="w-full  " >
                <ul className=" bg-orange-500 flex flex-row text-2xl text-white justify-around ">
                    {menu} 
                    
                </ul>
            </div>



            <div className="flex flex-row justify-center items-center " >
                <h1 className="text-2xl text-white hidden lg:block">Search</h1>
                <span className=" hidden lg:blocktext-white  border rounded-full border-white mx-4 text-xl p-3">
                    <FiSearch></FiSearch>
                    </span>
            </div>
           </div>
           
        </div>
    )
}
export default Navbar3