import React from 'react'
const GoodItem = ({id,title,price,img,addToBasket}) => {
  return (         
 
        <div className="item-box">
            <div className="item">
                <div className="img-box">
                    <img src={img} alt="" />
                </div>
                <div className="description">
                    <div className="title">
                        <h4>{title}</h4>
                    </div>
                    <div className="price">
                        <span>${price}</span>
                        <button className="add-to-cart"  onClick={()=>addToBasket({
                              id:id,
                              name:title,
                              price:price
                        })}>add to cart</button>
                    </div>
                </div>
            </div>
        </div>
  

      
  )
}

export default GoodItem