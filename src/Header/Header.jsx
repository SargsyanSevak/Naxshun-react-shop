import React, { useState } from 'react'
import './Header.css'
import Nav from '../Nav/Nav'
import { useRef } from 'react'
const Header = ({order,handleBasketShow,searchValue,setSearchValue,cats,categoryId,setCategoryId}) => {
  const refContainer = useRef(null);

  return (
    <header>
      <div className='mobile-menu' onClick={()=>{
        if(refContainer.current.style.display === 'none'){
          refContainer.current.style.display = 'block'
        }else{
          refContainer.current.style.display = 'none'
        }
      }}><i className="fa fa-solid fa-bars"></i>
        <div className="menu-links" ref={refContainer}>
        <ul>
            {cats.map((obj,i)=>{
              return (<li onClick={() => setCategoryId(i)} className={categoryId === i ? 'active' : ''}><a href="#" key={i}>{obj.name}</a></li>)
            })
          }
        </ul>
        </div>
      </div>
       <div className="logo">Նախշուն
        <img src="https://freepngimg.com/thumb/categories/62.png" alt="" />
       </div>
       <Nav 
        cats={cats}
        categoryId={categoryId}
        setCategoryId={setCategoryId}
       />
       <div className="search">
        <input type="text" placeholder="փնթրել ․․․" value={searchValue} onChange={e=>{setSearchValue(e.target.value)}}/>
    </div>
    <div className='basket'>
       <i id='basket' className="fa fa-shopping-basket" onClick={handleBasketShow}><span className="quantity">{order.length}</span></i>
    </div>
    </header>
  )
}

export default Header