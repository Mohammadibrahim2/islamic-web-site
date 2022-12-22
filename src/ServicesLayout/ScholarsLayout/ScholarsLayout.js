import React from "react";
import { Outlet } from "react-router-dom";
// import Navbar from "../Pages/SharedPage/Navbar/Navbar";
import ScholarsHeader from "./ScholarsHeader";


const ScholarsLayout=()=>{

    return(
        <>
        <ScholarsHeader></ScholarsHeader>
        
       
        {/* <div class="w-full px-10">

  <div className="col-span-2 ">
    <Outlet></Outlet>
  
  </div> */}
  

{/* </div> */}
 
        </>
    )

}
export default ScholarsLayout