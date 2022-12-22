import React from "react";
import { FaClock } from "react-icons/fa";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import{FaMosque}from "react-icons/fa";

const Navbar1=()=>{

    return(
        <div className="bg-amber-900 text-white ">
            <div className="flex flex-row justify-between px-10 py-5 ">
                <div className="lg:flex lg:flex-row hidden ">
                    <div className="flex flex-row justify-center items-center">
                    <span className="text-orange-400"><FaFontAwesomeFlag></FaFontAwesomeFlag></span>
                    <h1 className="ml-2">Boro MOsjid,Noakhali</h1></div>
                    <div className="mx-3">|</div>
                    <div className="flex flex-row justify-center items-center">
                        <span className="text-orange-400"><FaClock></FaClock>
                        </span><h1 className="ml-2">Mon - Sat 8:00 am - 18:00 pm</h1></div>
                </div>

                <div className="flex flex-row justify-between">
                    <div className="flex flex-row justify-center items-center">
                        <span className="text-orange-400" >
                        <FaMosque></FaMosque>
                        </span><h1 className="ml-2"> Namaz Timming</h1></div>
                    <div>
                        <div className="lg:flex lg:flex-row justify-between items-center hidden">
                             <div className="mx-5"><h1> Follow us:</h1></div>
                             
                            <span ><FaTwitter></FaTwitter></span>
                            <span className="mx-4"><FaFacebookF></FaFacebookF></span>
                            <span><FaGooglePlusG></FaGooglePlusG></span>
                             </div>
                             </div>
                </div>
            </div>
    
        </div>
    )
}
export default Navbar1