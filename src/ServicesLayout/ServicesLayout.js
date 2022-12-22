import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/SharedPage/Navbar/Navbar";
import ServiceCarosul from "./serviceCarosul/ServiceCarosul";
import ServicesHeader from "./ServicesHeader/ServicesHeader";
import CatagoriesBlog from "./ServiceSideContent/CatagoriesBlog";
import NamazTimming from "./ServiceSideContent/NamazTimming";
import RecentPost from "./ServiceSideContent/RecentPost";
import SearchSection from "./ServiceSideContent/SearchSection";

const ServicesLayout=()=>{

    return(
        <>
        
        <ServicesHeader></ServicesHeader>
        <div class="grid grid-cols-3 gap-4">

  <div className="col-span-2 ">
    <Outlet></Outlet>
  
  </div>
  <div className="p-10">
    <SearchSection></SearchSection>
    <NamazTimming></NamazTimming>
    <CatagoriesBlog></CatagoriesBlog>
  <ServiceCarosul></ServiceCarosul>
  <RecentPost></RecentPost>

  </div>
  
 
</div>
 
        </>
    )

}
export default ServicesLayout