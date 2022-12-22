import React from "react";
import Shahadah from  "../../../assets/finger.png";
import Salah from  "../../../assets/praying.png"
import Sawm from  "../../../assets/islamic-ramadan-.png"
import Zakat from  "../../../assets/zakat.png"
import Hajj from  "../../../assets/kaaba.png"


import "./PillarsOfIslam.css"
import SubPillarsOfIslam from "./SubPillarOfIslam";
const PillarsOfIslam=()=>{

    const pillarsOfIslam=[


        {
            img:Shahadah,
            name:"Shahadah",
            subname:"(Faith)",
        },
        {
            img:Salah,
            name:"Salah",
            subname:"(Prayer)",
        },
        {
            img:Sawm ,
            name:"Sawm",
            subname:"(Fasting)",
        },
        {
            img:Zakat,
            name:"Zakat",
            subname:"(Almsgiving)",
        },
        {
            img:Hajj,
            name:"Hajj",
            subname:"(Pilgrimage)",
        }
    ]

    return(
        <div className="Pillers lg:h-[90vh] md:h[100vh] h-[150vh]">
             <div  className="absolute w-full text-center z-10 top-20">
                <h3 className="text-orange-500 text-2xl py-3">About Essential</h3>
                <h1 className="text-5xl text-black font-semibold">Pillars of Islam</h1>
            </div>

            <div className="grid lg:grid-cols-5 grid-cols-3 absolute w-full text-center z-10 top-52">
                {
                    pillarsOfIslam.map(piller=><SubPillarsOfIslam
                    piller={piller}
                    
                    ></SubPillarsOfIslam>)

                }
            </div>
             <div className="Background">
            
             </div>
             <div className="overLay"></div>

        </div>
        
       
    )

}
export default PillarsOfIslam