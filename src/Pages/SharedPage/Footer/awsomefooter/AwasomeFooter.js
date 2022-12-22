import React from "react";
import { ImLocation2 } from "react-icons/im";
import {AiOutlineMail} from "react-icons/ai"
import {IoCall}from "react-icons/io";
import {ImMobile}from "react-icons/im";
import {BsFillCalendar2DayFill}from "react-icons/bs";
import {BsFacebook}from "react-icons/bs";
import {AiOutlineTwitter}from "react-icons/ai";
import {AiOutlineGooglePlus}from "react-icons/ai";
import mosjid from "../../../../assets/mosque.png"


const AwsomeFooter=()=>{

    const latestBlogs=[

        {
            title:"Is Quran only for muclims?",
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Qur%27an_and_Rehal.jpg/640px-Qur%27an_and_Rehal.jpg",
            date:"Jan 10, 2023"
        },
        {
            title:"Is Islam Old Philosophy?",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8itQ1xuougagEjQ0o1gNk_rKj_u7pp5907g&usqp=CAU",
            date:"Jan 08, 2020"
        },
        {
            title:"Is much important of hadis?",
            img:"https://www.yma.org/wp-content/uploads/2019/03/hifz_1.jpg",
            date:"DEcember 28, 2022"
        },
        
    ]
    const contacts=[
        {
            title:"taohid6454@gmail.com",
            icon:<AiOutlineMail/>
        },
        // {
        //     title:"01632846454",
        //     icon:<IoCall/>
        // },
        {
            title:"Maijdee, Noakhali",
            icon:<ImLocation2/>
        },
        {
            title:"01823777197",
            icon:<ImMobile/>
        },
        {
            icon:<AiOutlineTwitter/>,
            icon1:<BsFacebook/>,
            icon2:<AiOutlineGooglePlus/>
           
                
        },
    ]
    return(
        <div className="px-8 mt-[-10px]  drop-shadow-2xl ">
            
            <div className="bg-white grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-7 rounded-lg">
                {/* about us:- */}
                <div className="pl-10 text-black py-5 text-xl">
                    <h1 className="text-3xl font-semibold ">About us</h1>
                    <p className=" py-5">We have provide our email and contact details. you can contact with us for your any need at any time. Stay with us. Asslamualikum</p>
                    <div className="w-20 bg-orange-500 rounded-full p-4 mb-5">
                        <img src={mosjid} className="bg-orange-500 rounded "/></div>
                    <p className="flex flex-row items-center"><ImLocation2 className="text-orange-500"/>Boro mosjid,Noakhali</p>
                </div>
                {/* latest-blog:- */}
                <div>
                    <h1 className="text-3xl text-black font-semibold">Latest Blog</h1>
                    {/* All blog ss*/}

                    {
                      latestBlogs.map(latestblog=><div className="flex flex-row justify-start items-center border-orange-500 my-5 px-5 lg:px-2">
                      <img src={latestblog.img} className="w-[80px]"/>
                      <div className="ml-4 text-black"><h1>{latestblog.title}</h1>
                      <p className="flex flex-row justify-start items-center">
                        <BsFillCalendar2DayFill className="text-orange-500 mr-3"/>{latestblog.date}</p></div>
                      </div>)
                    }
                    
                    
                </div>
                 {/* contact us:- */}
                 <div className="">
                    <h1 className="text-3xl text-black font-semibold">Contact Us</h1>
                    <div>
                      {
                        contacts.map(contact=> 
                        <div className="flex flex-row justify-start items-center px-3 py-4 text-xl " style={{borderBottom:"2px dotted gray"}}>
                        <div className="flex flex-row ">
                        <span className="text-orange-500">{contact.icon}</span>
                        <span className="text-orange-500" style={{marginLeft:"3px"}}>{contact.icon1}</span>
                        <span className="text-orange-500" style={{marginLeft:"3px"}}>{contact.icon2}</span>
                        </div>
                        <span className="text-black ml-3 ">{contact.title}</span></div>)
                      } 
                    </div>
                 </div>

                 {/* quick-contact:- */}
                 <div className="w-full md:ml-4 ">
                    <h1 className="text-3xl font-semibold text-black">Quick Contact</h1>
                    <form className="w-full pl-3 pr-6 mt-5">
                    <input type="text" className=" w-full py-3 px-3 rounded-md  border-2 mb-2 bg-white text-black" placeholder="Name "/>
                    <input type="email" className="  w-full py-3 px-3 rounded-md border-2 mb-2 bg-white text-black" placeholder="Email "/>
                    <textarea type="text" className=" w-full py-3 px-3 rounded-md  border-2 mb-2 bg-white text-black" placeholder="Enter your text "/>
                        <input type="submit"className="bg-orange-500 py-3 w-full rounded-md text-white "/>
                    </form>
                 </div>
            </div>
        </div>
    )

}
export default AwsomeFooter