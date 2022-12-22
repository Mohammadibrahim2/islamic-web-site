import React from "react";
import "./SubAbout.css"
import mosque from "../../../../assets/mosque.jpg"
import NamazTimming from "../NamazTimming/NamazTimming";
const SubAbout = () => {

    return (
        <div className="w-full  ">
            <div className="hero  aboutBg  lg:h-[450px]">
                <div className="hero-content flex-col md:flex-row  ">
                    <div className="lg:relative  border-8 lg:border-orange-500 p-3 w-full lg:h-[240px]">
                    <img src={mosque} className=" rounded lg:shadow-2xl lg:absolute bottom-3 left-5" />

                    </div>
                    
                    <div className="text-black lg:w-auto md:w-2/3 w-full ml-5">
                        <h3 className="text-xl font-semibold text-orange-500">Our History</h3>
                        <h1 className=" md:text-5xl text-2xl py-6 font-semibold ">About Islamic Center</h1>
                        <p>We established our center in 1954, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris .Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                       <p className="my-2">Visit our premises sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                       
                        <button className="btn bg-orange-500 border-none text-white drop-shadow-md mt-5">Read More</button>
                    </div>
                </div>
            </div>
            <NamazTimming></NamazTimming>

        </div>
    )

}
export default SubAbout