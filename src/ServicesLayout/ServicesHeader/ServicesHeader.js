import React from "react";
import { useLoaderData } from "react-router-dom";
import ExtraDesignNavbar from "../../Pages/SharedPage/Navbar/ExtraDesignNavbar";
import "./ServicesHeader.css"
const ServicesHeader = () => {
    const service=useLoaderData()
    console.log(service)

    return (
        <div className=" serviceHeader ">
           

            <div className="h-[40vh] serviceHeaderoverly  ">
            </div>
            <div className=" flex flex-col justify-center items-center header-text font-semibold text-white">
                <h1 className="text-5xl font-semibold text-white ">Community Service</h1>
                
                <div className="text-xl breadcrumbs  text-white mt-5 ">
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Service</a></li>
                    <li className="text-orange-500">Add Document</li>
                </ul>
            </div>
                </div>
            


        </div>

    )

}
export default ServicesHeader