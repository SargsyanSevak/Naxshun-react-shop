import React from 'react'
import GoodItem from '../GoodItem/GoodItem'
import './GoodList.css'
const GoodList = ({goods,addToBasket,searchValue,setSearchValue}) => {
  if(!goods.length) return <h3>Nothing here</h3>

  return (
    <div className='GoodList'>
      {
      goods
      .filter(obj => {
        return obj.title.toLowerCase().includes(searchValue.toLowerCase())
      })
      .map((el,index)=> <GoodItem key={index} {...el} addToBasket={addToBasket} />)}
    
    
    </div>
  )
}

export default GoodList