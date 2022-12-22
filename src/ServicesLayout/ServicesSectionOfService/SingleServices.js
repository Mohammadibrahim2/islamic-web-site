import React from "react";

import { useLoaderData } from "react-router-dom";
const SingleServiceDetails = () => {

    const singleervice = useLoaderData()
    const {details,id,serviceName,image}=singleervice

    return (
        <div>
            <div className="card w-full  shadow-xl mt-5">
               <img  className="lg:w-1/2 mx-auto"src={image} alt="Shoes" />
                <div className="card-body text-black text-left">
                    <h2 className="card-title text-2xl">{serviceName}</h2>
                    <p>{details}</p>
                   
                </div>
            </div>

        </div>
    )

}
export default SingleServiceDetails