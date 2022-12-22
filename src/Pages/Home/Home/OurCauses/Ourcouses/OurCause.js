import React from "react";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
const OurCause = ({ causes }) => {

    const { picture, title, details, Raised, Goal, date, name, percentage } = causes
    let num=parseInt(percentage)-5

    return (
        <div>
            <div className="card bg-white shadow-2xl lg:h-[500px] ">
                <img className="h-1/2" src={picture} alt="Shoes" />
                <div className="card-body h-1/2">
                    <Link to="/"><h2 className="text-orange-500 text-3xl text-start">{title}</h2></Link>
                    <div className="flex flex-row justify-start text-black text-xl">

                        <div className="flex flex-row justify-center items-center ">
                            <IoCalendarNumberOutline className="text-orange-500 " />
                            <span className="ml-3">{date}</span></div>

                        <div className="flex flex-row justify-around items-center  ml-10">
                            <FiUser className="text-orange-500 " />
                            <span className="ml-3">{name}</span>
                        </div>

                    </div>

                    <p className="text-start text-black">{details}</p>
                    <div className="w-full bg-gray-200 h-3 mb-6 rounded-lg">
                        <div className="bg-orange-500 h-3 relative rounded-lg" style={{width: `${percentage}`}}></div>
                        <div className={`bg-orange-500 h-3 absolute d-block  p-5 rounded-full ` }
                        style={{width: "25px",bottom:"55px",left:`${num}%`}}><span className=" text-sm ">{percentage}</span></div>
                    </div>
                    <div className="flex flex-row justify-around">
                        <div className="">Raised :<span className="text-orange-500">$ {Raised}</span></div>
                        <div className="">Goal :<span className="text-orange-500">$ {Goal}</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OurCause