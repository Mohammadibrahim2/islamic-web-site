import React from "react";

import Educate from "../../../../../assets/causes1.jpg"
import homless from "../../../../../assets/casues2.jpg"
import shelter from "../../../../../assets/causes3.jpg"
import OurCause from "./OurCause";


const Ourcauses=()=>{

    const ourCauses=[
        {
             picture:Educate,
            title:"Educate Rural Kenya",
            details:"Islam is definitely accommodates olor sit amet, consectetur adipisicing eli...",
            Raised:"33,000",
            Goal:"50,000",
            date:"5 Days Left",
            name:"Inam Ullah",
            percentage:"66%"
          

        },
        {
            picture:homless,
           title:"Educate Rural Kenya",
           details:"Islam is definitely accommodates olor sit amet, consectetur adipisicing eli...",
           Raised:"33,000",
           Goal:"50,000",
           date:"5 Days Left",
           name:"Inam Ullah",
           percentage:"70%"
          

       },
       {
        picture:shelter,
       title:"Educate Rural Kenya",
       details:"Islam is definitely accommodates olor sit amet, consectetur adipisicing eli...",
       Raised:"33,000",
       Goal:"50,000",
       date:"5 Days Left",
       name:"Inam Ullah",
       percentage:"50%"
      

   }
    ]
    return(
    <div className="w-full bg-white h-auto py-10 ">
        <div  className=" w-full text-center z-10 top-20">
                <h3 className="text-orange-500 text-2xl py-3">Need Help For</h3>
                <h1 className="text-5xl text-black font-semibold">Our Causes</h1>
                <p className="w-1/2 mt-5 mx-auto  py-5">Join hands with us to accomplish all these projects of serving humanity and making this world a better place to live.</p>
    


<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 lg:px-10">
    {ourCauses.map(causes=>< OurCause
    causes={causes}
    
    ></OurCause>)}
</div>

            </div>

    </div>)

}
export default Ourcauses