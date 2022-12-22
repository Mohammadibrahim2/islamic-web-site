import React from "react";

import { useLoaderData } from "react-router-dom";
const SingleScholarsDetails = () => {

    const singlescholar = useLoaderData()
 console.log(singlescholar)

    return (
        <div>
            {/* <div className="card w-full  shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{serviceName}</h2>
                    <p>{details}</p>
                   
                </div> 
             </div> */}

        </div>
    )

}
export default SingleScholarsDetails