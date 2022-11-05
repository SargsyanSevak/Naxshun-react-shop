import React from 'react'
import BasketItem from '../BasketItem/BasketItem'
import './BasketList.css'
const BasketList = ({order,handleBasketShow,incQuantity,decQuantity, removeFromBasket}) => {

const totalPrice = order.reduce((sum,el)=>{
  return sum + el.price * el.quantity
},0);

  return (
    <div className='BasketList'>
      <div className='container'>
      <h2>Իմ զամբյուղը</h2>
    {
      order.map((el,index) => <BasketItem 
      key={index} 
      {...el}
      incQuantity={incQuantity}
      decQuantity={decQuantity}
      removeFromBasket={removeFromBasket}
      />)
    }
    <div className='totalPrice'>Ընդհանուր՝ ${totalPrice}</div>
    <button className='pay'>Վճարել</button>
    </div>
    </div>
  )
}

export default BasketList