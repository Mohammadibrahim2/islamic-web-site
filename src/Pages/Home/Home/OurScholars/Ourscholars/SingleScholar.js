import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare} from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleScholar=({scholar})=>{

    const{name,position,image,_id}=scholar

    

return(
    <div className=" mt-10 h-[570px] px-10 w-full rounded-lg">


<div className=" card drop-shadow-xl relative w-full  h-2/3 ">
 <img src={image} className="w-full object-cover h-full" alt="scholars" />
  <div className=" absolute d-block top-[80%]  w-[80%]  left-[10%] h-[110px] text-slate-500 mt-5 rounded-md p-3 bg-white drop-shadow-2xl hover:bg-orange-500 hover:text-white">
    <div className="text-center text-xl flex flex-col justify-around items-center  ">
        <div className="flex flex-row justify-evenly w-full"><FaFacebook/><FaTwitter/><FaInstagramSquare/><FaGooglePlusG/></div>
    <h2 className=" my-2"><Link to="">{name}</Link></h2>
    <h2>{position}</h2>
    </div>
   
    
  </div>
</div>
          
            
            
    </div>
)

}
export default SingleScholar