import {useState,useEffect} from 'react'
import GoodList from './GoodList/GoodList';
import BasketList from './BasketList/BasketList';
import Loading from './loading/';
import Header from './Header/Header';
import Footer from './Footer/Footer'
import './App.css'

const App = () => {
  const [goods,setGoods] = useState([]);
  const [order,setOrder] = useState([]);
  const [loading,setLoading] = useState(true);
  const [isBasketShow,setBasketShow] = useState(false);
  const [searchValue,setSearchValue] = useState('');
  const [categoryId,setCategoryId] = useState(0)
  const cats = [
    {'name' :"Բոլորը" },
    {'name' :"Մատանիներ" },
    {'name' :"Թևնոցներ" },
    {'name' :"Վզոցներ" },
  ]
  useEffect(()=>{
    fetch(`http://localhost:3000/goods?${categoryId ? `categoryId=${categoryId}` : '1'}`)
    .then(response => response.json())
    .then(data =>{
      setGoods(data);
      setLoading(false);
    })
  },[categoryId])

const addToBasket = item =>{
  const itemIndex = order.findIndex(el => el.id === item.id)
  if(itemIndex < 0){
    const newItem = {
      ...item,
      quantity:1
    };
    setOrder([...order,newItem]);
  }else{
    const newOrder = order.map((el,index)=>{
      if(index === item.index){
        return {
          ...el,
          quantity:el.quantity + 1
        }
      }else{
        return el
      }
    });
    setOrder(newOrder)
  }
}

const removeFromBasket = id =>{
  const newOrder = order.filter(el => el.id !== id)
  setOrder(newOrder)
}

const incQuantity = id => {
  const newOrder = order.map(el =>{
    if(el.id === id){
      return {
        ...el,
        quantity: el.quantity + 1
      }
    }else {
      return el
    }
  })
  setOrder(newOrder)
}

const decQuantity = id => {
  const newOrder = order.map(el =>{
    if(el.id === id){
      return {
        ...el,
        quantity:el.quantity > 0 ? el.quantity - 1 :0
      }
    }else {
      return el
    }
  })
  setOrder(newOrder)
}

const handleBasketShow = ()=>{
  setBasketShow(!isBasketShow)
}

  return (
    <>
      <Header
      handleBasketShow={handleBasketShow}
      order={order}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      cats={cats}
      categoryId={categoryId}
      setCategoryId={setCategoryId}
       />
      {isBasketShow &&
      <BasketList
        order={order}
        handleBasketShow={handleBasketShow}
        incQuantity = {incQuantity}
        decQuantity = {decQuantity}
        removeFromBasket={removeFromBasket}
      />} 
      {
        loading ? <Loading />:
        <GoodList
         goods={goods}
          addToBasket={addToBasket}
          searchValue={searchValue}
      setSearchValue={setSearchValue} />
      }
      <Footer />
    </>
  )
}

export default App
