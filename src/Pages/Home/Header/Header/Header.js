import React from "react";
import "./Header.css"
import bgVideo from "../../../../assets/bg-video1.mp4"
import ExtraDesignNavbar from "../../../SharedPage/Navbar/ExtraDesignNavbar";
const Header=()=>{

    return(
        <div className="header relative " id="heading">
            <div className="Video">
                <video src={bgVideo} muted autoPlay loop className="video2"></video>
            </div>
            <div className="overlay flex flex-col justify-center items-center">
               
            </div>
            <div className="hidden  h-1/2 lg:flex lg:flex-row justify-center items-center absolute left-0 top-[-190px] z-1 ">
           <ExtraDesignNavbar/>

            
            
           </div>
            <div className="header-text flex flex-col uppercase">
            <h1 className=" text-white lg:text-5xl md:text-3xl text-2xl text-center">
            بســم الله الرحمــن الرحيــم
    
            </h1>
            <h1 className="text-white lg:text-5xl py-5  text-xl font-bold text-center ">He Raised  the Sky and Set Up The balance</h1>
            <p className="text-white lg:text-3xl text-xs">(Surah Ar-Rahman Verse-7)</p>
          <div className="">
          <button className="button px-9 py-3 border-2 text-sm md:text-xl text-white border-white font-semibold">Learn More</button>
    
          </div>
            </div>
        </div>
    )

}
export default Header;