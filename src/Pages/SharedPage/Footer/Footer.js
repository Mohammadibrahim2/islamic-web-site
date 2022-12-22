import React from "react";
import AwsomeFooter from "./awsomefooter/AwasomeFooter";

const Footer=()=>{


    return(
        <div className="bg-orange-500 relative md:h-[160vh] lg:h-[80vh] h-[270vh]">
            {/* oporer parte:- */}
            <div className="absolute   lg:mt-[-10%] md:mt-[-16%] mt-[-24%]" id="contact">
            <AwsomeFooter></AwsomeFooter>
            </div>
            {/* nicher part:- */}
            <div className="bottom-0 absolute w-full pb-5">
                <div className="flex flex-col lg:flex-row justify-center items-center py-10 px-20">
                    <div>
                    <h2 className="text-3xl text-white font-semibold lg:mr-28 py-3">Subscribes,for weekly updates</h2>
                    </div>
                    <div className="relative lg:w-1/2 md:mr-10  mr-20 ">
                    <input type="email"placeholder="Enter Your Emailadress *"className="text-black lg:w-full py-3 px-10 bg-white  rounded-full border-none"/>
                    <button className="text-white font-medium bg-orange-900 absolute lg:left-[82%] left-[85%]  py-3 px-5 border-none rounded-full w-52">Signup now</button>
                    </div>
                </div>
                <div className="px-10 my-3"> <hr></hr></div>
               
                <div className="text-center text-white">
                <h2 className="text-2xl">Islamic website is made for free learning source,2022 by Mohammad Ibrahim</h2></div>

            </div>
      
        </div>
    )
}
export default Footer