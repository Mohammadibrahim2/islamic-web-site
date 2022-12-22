import React, { useState } from "react"
import { useEffect } from "react"
import SingleServices from "./SingleService"

const Services = () => {

    
   const [services,setServices]=useState([])
    useEffect(()=>{
        fetch("https://islamic-web-site-server-mohammadibrahim2.vercel.app/services")
        .then(res=>res.json())
        .then(data=>{
            setServices(data)

            console.log(data)})
    },[])
    return (
        <div className=" bg-white pb-5" id="service">
             <div className="w-full text-center">
                <h3 className="text-orange-500 text-2xl py-3">What We Offer</h3>
                <h1 className="text-5xl text-black">Our Services</h1>
            </div>

       
        <div className=" py-10 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 px-3 ">
            {services.map(service=><SingleServices
            service={service}
            ></SingleServices>)}
        </div>
        </div>
    )

}
export default Services