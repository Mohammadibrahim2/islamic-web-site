import React from "react";
import ExtraDesignNavbar from "../../Pages/SharedPage/Navbar/ExtraDesignNavbar";

import "./ScholarsHeader.css"
const ScholarsHeader = () => {
    

    return (
        <div className="scholarsHeader mb-60">
            
          
            <div className="h-[40vh] scholarsHeaderoverly ">
            </div>
            <div className=" flex flex-col justify-center items-center header-text font-semibold text-white">
                <h1 className="text-5xl font-semibold text-white ">Scholars</h1>
                
                <div className="text-xl breadcrumbs  text-white mt-5 ">
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Team</a></li>
                    <li className="text-orange-500">Scholars Name</li>
                </ul>
            </div>
                </div>
            


        </div>

    )

}
export default ScholarsHeader