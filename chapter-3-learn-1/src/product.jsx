import React from 'react'

function Product() {
    //Javascript kodları yazılır
    const catagories = ["Kazak", "Pantolon", "Ayakkabı","Gömlek", "Çanta"]
   
  return (
    //html kodları yazılır.
    <div>
        {
            catagories.map((product, index) => (
                <div key={index}> {product} </div>    
            ))
        }
    </div>
    
  )
}

export default Product
