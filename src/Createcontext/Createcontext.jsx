import { useState } from 'react';
import {createContext} from 'react'
import Productdata from '../Productshop/Productdata'

const ContextData=createContext();

const Context = ({children}) => {

const [items,setitems]=useState([])

    
const Addtocart=(id,image,name,price,quantity)=>{
  (items.find((x)=>x.id===id))? alert('Item already added in cart'):
  setitems((prev)=>[...prev ,{id,image,name,price,quantity}])
}

let price=0
items.map((x)=>price=price+x.price)

const Removeitem=(id)=>{
  const x =items.filter((y)=>y.id !==id) 
  setitems(x)  
}

 function RemoveAll(){
  setitems([])  
}

const increment = (id) => {
    setitems(x=>x.map((data)=>{
      return (id===data.id ? {...data,quantity:data.quantity+1}:data)
    }))
    }

const decrement = (id) => {
    setitems(x=>x.map((data)=>{
      return (
        id===data.id ? {...data,quantity:data.quantity-(data.quantity===1?0:1)}:data    
      )
    }))
    }
    
// 100*1=100,100*2,100*3 price*quantity

let subPrice=0
items.map((x)=>subPrice+=x.price*x.quantity)

const Data=Productdata
return (
  <ContextData.Provider value={{Data,Addtocart,items,Removeitem,price,RemoveAll,increment,decrement,subPrice}}>
    {children}
  </ContextData.Provider>
)
}

export default Context
export {ContextData}