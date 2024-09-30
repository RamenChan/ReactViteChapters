import React from 'react'
import "./Category.css"
import arrow from "./image/Arrow`s.png"
import phones from "./image/phones.png"
import watch from "./image/watch.png"
import camera from "./image/camera.png"
import headphones from "./image/headphones.png"
import computers from "./image/computers.png"
import gaming from "./image/gaming.png"


function Category() {
  return (
    
    <div   className="category"  >
        <div className="browse">
            
        <h1> <b>Browse By Category </b> </h1>
            <img src={arrow} alt="" />
        
        </div>
        <div className="buttons">
            
            <button ><img src={phones} alt="" />  </button>
            <button > <img src={watch} alt="" />  </button>
            <button ><img src={camera} alt="" />  </button>
            <button ><img src={headphones} alt="" />  </button>
            <button ><img src={computers} alt="" />  </button>
            <button >i<img src={gaming} alt="" />  </button>
        </div>
        
        
      

     </div>
  )
}

export default Category
