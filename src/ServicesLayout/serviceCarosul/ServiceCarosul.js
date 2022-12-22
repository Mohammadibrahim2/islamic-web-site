import React from "react";

const ServiceCarosul=()=>{
    return(<div>

<div className="carousel w-full h-[400px] ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="http://photos.demandstudios.com/getty/article/69/154/109747425.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle bg-orange-500 text-white">❮</a> 
      <a href="#slide2" className="btn btn-circle  bg-orange-500 text-white">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://thenewageparents.com/wp-content/uploads/2011/06/Kids-Alive-program-by-MUIS-Muslim-Childcare-centres-in-Singapore.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle  bg-orange-500 text-white">❮</a> 
      <a href="#slide3" className="btn btn-circle  bg-orange-500 text-white">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT61sw9DTIXoSXutxOGbfjEDmwrcBM5Izz9b1t67bJYocRnSc-I3Hy7xkyrFYPhnigkYAU&usqp=CAU" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle  bg-orange-500 text-white">❮</a> 
      <a href="#slide4" className="btn btn-circle  bg-orange-500 text-white">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfDXwsmM4EtZ5EXlqyBtTOnudgDsGsao-oOg&usqp=CAU" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle  bg-orange-500 text-white">❮</a> 
      <a href="#slide1" className="btn btn-circle  bg-orange-500 text-white">❯</a>
    </div>
  </div>
</div>

    </div>)
}
export default ServiceCarosul