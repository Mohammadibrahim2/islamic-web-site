import React from "react";

import About from "../About/About";

import Header from "../Header/Header/Header";
import PillarsOfIslam from "../PillersOfISlam/PillarsOfIslam";
import Services from "../Services/Services";
import OurBlog from "./OurBlog/OurBlog/OurBlog";
import Ourcauses from "./OurCauses/Ourcouses/OurCauses";
import OurScholars from "./OurScholars/Ourscholars/OurScholars";

const Home=()=>{
    return(
        <>
        
         <Header></Header>
         <About></About>
         <Services></Services>
         <PillarsOfIslam></PillarsOfIslam>
         <Ourcauses></Ourcauses>
         <OurBlog></OurBlog>
         <OurScholars></OurScholars>
       
    </>
    )
   

}
export default Home