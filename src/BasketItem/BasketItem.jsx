import React from 'react'
const BasketItem = ({quantity,id,name,price,image,incQuantity,decQuantity,removeFromBasket}) => {
  return (
    <div className='BasketItem'>
        <span>{name}</span>
      <button className='decbtn' onClick={()=>decQuantity(id)}><i className="fa fa-solid fa-minus"></i></button>
      <span>{quantity}</span>
      <button  className='incbtn' onClick={()=>incQuantity(id)}><i className="fa fa-solid fa-plus"></i></button>
      ${price * quantity}
      <span  className='removebtn' onClick={()=>removeFromBasket(id)}><i className=" fa fa-regular fa-trash"></i></span>
      </div>
      
  )
}

export default BasketItem