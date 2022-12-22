import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SingleScholar from "./SingleScholar";

const OurScholars=()=>{

    const [ sscholars,setScholars]=useState([])
    // useEffect(()=>{

    //     fetch('http://localhost:5000/schalars')
    //     .then(res=>res.json())
    //     .then(data=>setScholars(data))
    // },[])

    const scholars=[
        {
            name:"Mufti Reja saqib",
            position:"Founder & CEO",
            image:"https://i1.sndcdn.com/artworks-000462716340-wtby6i-t500x500.jpg"
        },

        {
            name:"Mawlana tarek jamel",
            position:"Co-Founder ",
            image:"https://i.pinimg.com/474x/70/29/7a/70297aa5707712cd98f92388f937d2ca.jpg"
        },

        {
            name:"Mowlana tarek masud",
            position:"Co-founder",
            image:"https://www.parhlo.com/wp-content/uploads/2020/11/Mufti-Tariq-Masood-wisdom-Explorer-1.jpg.webp"
        },
    ]

return(
    <div id="scholars" className=" w-full bg-white lg:mb-48 md:mb-32 mb-20" id="scholars">
          <div className="text-center py-3 pt-16">
                <h3 className="text-orange-500 text-2xl py-3" >Meet The Experts</h3>
                <h1 className="text-5xl text-black font-semibold">Islamic Scholars</h1>
            </div>
            {/* scholars:- */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5 md:px-10">
                {
                    scholars.map(scholar=><SingleScholar
                    scholar={scholar}
                    key={scholar._id}
                    
                    ></SingleScholar>)
                }
            </div>
    </div>
)

}
export default OurScholars