import React from "react";
import SubAbout from "./SubAbout/SubAbout";
import { FaMosque } from "react-icons/fa";
import { BsPeace } from "react-icons/bs";
import { GiBlackBook } from "react-icons/gi";
import NamazTimming from "./NamazTimming/NamazTimming";
import { Link } from "react-router-dom";


const About=()=>{

    const section=[
        {icon:<BsPeace></BsPeace>,
        title:"Health Services",
        details:"Timing : 09:00 AM - 03:00 PM"
    },
    {icon:<GiBlackBook></GiBlackBook>,
    title:"Islamic Books",
    details:"Timing : 08:00 AM-03:00 PM"
},
{icon:<FaMosque></FaMosque>,
title:"Hajj Service",
details:"Timing : 09:00 AM - 03:00 PM"
},
    ]

    return(
        <div className="w-full  z-5 relative">
            <div className=" w-2/3 mx-auto flex flex-row items-center justify-between bg-white   lg:mt-[-30px] 
         drop-shadow-xl mt-[-50px] ">
                
                    <div className="w-full flex lg:flex-row flex-col justify-between">
                        {
                            section.map(pice=><div className="py-4 px-3 flex flex-row items-start justify-between">
                                <span className="text-3xl text-orange-500">
                                    {pice.icon}
                                </span>
                                <div>
                                    <h2 className="font-bold text-orange-500 text-2xl">{pice.title}</h2>
                                    <h2 className=" text-black">{pice.details}</h2>
                                </div>
                            </div>)
                        }
                    </div>
                    
                   
                  
    
            </div>
            <SubAbout></SubAbout>
            <div className="arrow block fixed  top-[100px] right-8 text-white bg-orange-500 p-3 z-50"><a href="#heading">|||</a></div>
          
        </div>
    )
}
export default About