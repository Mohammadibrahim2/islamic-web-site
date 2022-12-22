import React from "react";

const SingleNamazTimming =({namaz}) => {

const {name,begains,Iqamah,back,text1,text2}=namaz
    return (
        <div>
            <div className={`${back} py-7 text-black`}>

                <h1 className={`${text2} lg:text-4xl text-2xl`}>{name}</h1>
                <h3>Begins :<span className="text-orange-500">{begains}</span></h3>
                <h3>Iqamah:<span className="text-orange-500">{Iqamah}</span></h3>
            </div>
        </div>
    )
}
export default SingleNamazTimming