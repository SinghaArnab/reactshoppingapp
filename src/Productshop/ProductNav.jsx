import {useState} from 'react'
import { NavLink,Outlet,useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ContextData } from '../Createcontext/Createcontext'

const ProductNav = () => {
  const{items,price}=useContext(ContextData)
  const Navigate=useNavigate()

    const [Query,setQuery]=useState({searchData:""})

    console.log(Query);

    const handelChanged=(e)=>{
        const {name,value}=e.target;
        setQuery((prevdata)=>{
          return {...prevdata,[name]:value}      
        })
    }
    
    const formSubmit=(e)=>{
      e.preventDefault()
    }
    
  return (
    
<div className='w-[100%]'>
    <nav className="h-[70px] bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-900 flex  items-center mx-auto lg:flex-row sm:flex-col mainnav_contain overflow-x-scroll lg:overflow-hidden">
        <div className="container flex  lg:text-left sm:text-center w-[20%]">
            <NavLink to='/' className="items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white logonameextra"><span className='text-[#DC0000] mr-[10px] text-[20px] logoname'>
            V</span>Shop</span>
            </NavLink>
        </div>
            <div className='search w-[50%]'>
              <form onSubmit={formSubmit}>
            <div className="input-box">
              <i className="fa-solid fa-magnifying-glass "></i>
            <input type="text" name='cityname'  placeholder="Search any Product..."  onChange={handelChanged}/>
            </div>
              </form>
           </div>

           <div className="Product_cart_icon  h-[70px]  w-[30%] ">
             <button onClick={()=>Navigate('/Productcart')} > <i className="fa-solid fa-cart-shopping  text-[30px] text-center shopcart"><span className='ml-[10px] text-[#FF7000]'>{items.length}</span></i></button>
              <div><span className='shopingpricetext'>Rs:{price}</span></div>
              <div><i className="fa-solid fa-angles-down text-[30px] text-center shopcart" onClick={()=>Navigate('/Productcart')}></i></div>
            </div>
      </nav>

      <Outlet/>
</div>
  )
}

export default ProductNav
