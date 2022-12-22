import React from "react";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./OurBlog.css"

const OurBlog = () => {

    return (
        <div id="" className="bg-white py-7">
            <div className="text-center py-3">
                <h3 className="text-orange-500 text-2xl py-3">Event & Blog</h3>
                <h1 className="text-5xl text-black font-semibold">Our Blog & Events</h1>
            </div>
            {/* 2/3 section:- */}
            <div className="flex lg:flex-row flex-col justify-center items-center w-full lg:px-24 px-6">

                
            <div className="lg:w-2/3 w-full ">
                <div className="lg:w-full w-full ">
                    <div className="w-full flex flex-row  drop-shadow-2xl rounded-md lg:h-[200px] my-7 overflow-hidden blogHover">
                        <img className="md:w-1/3 w-1/2 blogHover" src="https://cdn.pixabay.com/photo/2016/03/27/18/31/book-1283468__480.jpg" alt="iamge" />
                        <div className="text-center lg:text-left bg-white w-full h-full md:pl-5 md:py-4 px-4">
                            <h1 className="text-2xl font-semibold  text-black hover:text-orange-500 md:text-start">Is Islam Old Philosophy?</h1>
                            {/* repeat */}
                            <div className="flex md:flex-row flex-col md:justify-start text-black text-lg my-2">

                                <div className="flex md:flex-row justify-center items-center ">
                                    <IoCalendarNumberOutline className="text-orange-500 " />
                                    <span className="ml-3">date</span></div>

                                <div className="flex flex-row justify-center items-center  ml-10">
                                    <FiUser className="text-orange-500 " />
                                    <span className="ml-3">name</span>
                                </div>

                            </div>
                            <p className="py-3 text-black md:text-start">Islamic philosophy  is a branch of Islamic studies, and is a longstanding attempt....</p>
                            <Link to="/"><h2 className="text-lg md:text-start text-orange-500">view details</h2></Link>
                        </div>
                    </div>

                    </div>

                    <div className="lg:w-full w-full ">
                    <div className="w-full flex flex-row  drop-shadow-2xl rounded-md lg:h-[200px] my-7 overflow-hidden blogHover">
                        <img className="md:w-1/3 w-1/2 blogHover" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Kaaba_%281%29_Makkah_%28Mecca%29_%28crop%29.png/1200px-Kaaba_%281%29_Makkah_%28Mecca%29_%28crop%29.png" alt="iamge" />
                        <div className="text-center lg:text-left bg-white w-full h-full md:pl-5 md:py-4 px-4">

                            <h1 className="text-2xl font-semibold  text-black hover:text-orange-500 md:text-start">Is Quran Only for the muslims?</h1>
                            {/* repeat */}
                            <div className="flex md:flex-row flex-col md:justify-start text-black text-lg my-2">

                                <div className="flex md:flex-row justify-center items-center ">
                                    <IoCalendarNumberOutline className="text-orange-500 " />
                                    <span className="ml-3">date</span></div>

                                <div className="flex flex-row justify-center items-center  ml-10">
                                    <FiUser className="text-orange-500 " />
                                    <span className="ml-3">name</span>
                                </div>

                            </div>
                            <p className="py-3 text-black md:text-start">The Quran, Muslims believe is the final testament God revealed for ....</p>
                            <Link to="/"><h2 className="text-lg md:text-start text-orange-500">view details</h2></Link>
                        </div>
                    </div>

                    </div>
                </div>
                
{/* blog section is end:- */}

{/* event section:- */}
 <div className="lg:w-1/2 w-full md:ml-7"> 
       {/* hero gri start:- */}
  <div className="hero bg-white mb-5 ">

<div className="card  w-full   drop-shadow-2xl bg-white ">
    <div className="h-[130px] w-full  relative  rounded-lg border">
        <img className="h-full w-full object-fill " src="https://media.istockphoto.com/id/864378594/photo/muslims-prayer-in-mosque.jpg?s=612x612&w=0&k=20&c=yk1hivbjEzmd5_hQ0NRGLCW4SN3vjMihHEp9g-llaIg=" alt="iamge" />
        <div className=" text-black  flex flex-row  osadaron d-block absolute top-0 h-full w-full  bg-white px-5 py-3">
            
            <div>
                <h2 className="text-2xl text-orange-500 flex flex-col  justify-center font-semibold"><span className="text-4xl">15th</span> <span>DEC</span></h2>
            </div>
            <div className="texthover text-black hover:text-orange-500 font-semibold ml-10">
            <h2 className=" text-xl">Importance of Namaz</h2>
            <div className="flex flex-row my-2"><span>Maijdee,Noakhali</span><span>9:00am to 11:am</span></div>
            <Link to="/"><span>Event details</span></Link>
            </div>
            
                
  </div>
    </div>
</div>
</div>
{/* hero gri sec:- */}

<div className="hero bg-white  mb-5  ">

<div className="card  w-full   drop-shadow-2xl bg-white ">
    <div className="h-[130px] w-full  relative  rounded-lg border">
        <img className="h-full w-full object-fill " src="https://cdn.pixabay.com/photo/2016/03/27/18/31/book-1283468__480.jpg" alt="iamge" />
        <div className=" text-black  flex flex-row  osadaron d-block absolute top-0 h-full w-full  bg-white px-5 py-3">
            
            <div>
                <h2 className="text-2xl text-orange-500 flex flex-col  justify-center font-semibold"><span className="text-4xl">10th</span> <span>JAN</span></h2>
            </div>
            <div className="texthover text-black hover:text-orange-500 font-semibold ml-10">
            <h2 className=" text-xl">Importance of Quran learning</h2>
            <div className="flex flex-row my-2"><span>Maijdee,Noakhali</span><span>8:00am to 11:am</span></div>
            <Link to="/"><span>Event details</span></Link>
            </div>
            
                
  </div>
    </div>
</div>
</div>

{/* hero gri sec:- */}

<div className="hero bg-white  ">

<div className="card  w-full   drop-shadow-2xl bg-white ">
    <div className="h-[130px] w-full  relative  rounded-lg border">
        <img className="h-full w-full object-fill " src="https://www.ancient-origins.net/sites/default/files/field/image/The-Kaaba.jpg" alt="iamge" />
        <div className=" text-black  flex flex-row  osadaron d-block absolute top-0 h-full w-full  bg-white px-5 py-3">
            
            <div>
                <h2 className="text-2xl text-orange-500 flex flex-col  justify-center font-semibold"><span className="text-4xl">20th</span> <span>JAN</span></h2>
            </div>
            <div className="texthover text-black hover:text-orange-500 font-semibold ml-10">
            <h2 className=" text-xl">Importance of HAjj</h2>
            <div className="flex flex-row my-2"><span>Maijdee,Noakhali</span><span>11:00am to 12:00pm</span></div>
            <Link to="/"><span>Event details</span></Link>
            </div>
            
                
  </div>
    </div>
</div>
</div>

{/* hero gri sec:- */}




























                </div>
            </div>




        </div>)


}
export default OurBlog