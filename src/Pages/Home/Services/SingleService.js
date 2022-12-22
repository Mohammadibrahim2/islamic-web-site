import React from "react"
import { Link } from "react-router-dom"

const SingleService = ({service}) => {

    const {serviceName,image,id,_id}=service
    console.log(_id)
   
    
    
    return (
       
            <div className="card h-[290px] bg-white text-black font-semibold drop-shadow-xl rounded-md  hover:bg-orange-500 hover:text-white">
                <img className="h-2/3 " src={image} alt="car!" />
                <div className="card-body text-center ">
                    
                    <Link to={`/services/${_id}`}><button className="text-2xl">{serviceName}</button></Link>
                    
                </div>
            </div>
       
    )

}
export default SingleService