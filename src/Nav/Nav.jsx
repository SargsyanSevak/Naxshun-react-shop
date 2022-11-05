import React from 'react'
import './Nav.css'
const Nav = ({cats,categoryId,setCategoryId}) => {
  return (
    <nav>
       <ul>
            {cats.map((obj,i)=>{
              return (<li onClick={() => setCategoryId(i)} className={categoryId === i ? 'active' : ''}><a href="#" key={i}>{obj.name}</a></li>)
            })
          }
        </ul>
    </nav>
  )
}

export default Nav