import React from "react";
import SingleNamazTimming from "./SingleNamazTiming";
const NamazTimming=()=>{

    const NamazTime=[
        {
            name:"Fazar",
            begains:"6:05 AM",
            Iqamah:"1:30 PM",
            back:"bg-zinc-100"

        },
        {
            name:"ZUHR",
            begains:"6:05 AM",
            Iqamah:"1:30 PM"

        },
        {
            name:"ASR",
            begains:"6:05 AM",
            Iqamah:"1:30 PM",
            back:"bg-zinc-100"

        },
        {
            name:"MAGRIB",
            begains:"6:05 AM",
            Iqamah:"1:30 PM"

        },
        {
            name:"ISHA",
            begains:"6:05 AM",
            Iqamah:"1:30 PM",
            back:"bg-zinc-100"

        },
        {
            name:"JUMMAH",
            begains:"12:30 PM",
            Iqamah:"1:30 PM",
            back:"bg-orange-500",
            text1:"text-white",
            text2:"text-white"
           

        }
    ]

    return(
        <div className="text-center  w-full bg-white lg:py-10 pt-32">
            <div  className=" w-full text-center">
                <h3 className="text-orange-500 text-2xl py-3">Associated Mosque</h3>
                <h1 className="text-5xl text-black">Namaz Timings</h1>
            </div>
            <div>
                <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 w-full z-10 mt-5 px-3 gap-3">
               {
                NamazTime.map(namaz=><SingleNamazTimming
                namaz={namaz}
                
                ></SingleNamazTimming>)
               }
                </div>
            </div>
        </div>
    )

}
export default NamazTimming