import React from "react";
import "./subpillerOfIslam.css"
const SubPillarsOfIslam=({piller})=>{
const{img,name,subname}=piller


    return(
        <div className=" text-center bg-transparent flex flex-col justify-center items-center">
      <div className="border-black border-4 border-dashed rounded-full p-10  bg-transparent ">
      <img src={img} alt ="apillers"className=" lg:w-28 md:w-20 w-16  ">
      
      </img>
    
      </div>
         
        <div className="card-body text-center">
         
          <h2 className="text-black text-3xl">{name}</h2>
          <p className="text-orange-500 text-2xl">{subname}</p>
          
        </div>
      </div>
    )

}
export default SubPillarsOfIslam