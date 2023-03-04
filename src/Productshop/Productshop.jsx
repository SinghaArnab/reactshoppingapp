import { useContext } from 'react'
import { NavLink,useNavigate} from 'react-router-dom'
import { ContextData } from '../Createcontext/Createcontext'

const Productshop = () => {

const{Data,Addtocart}=useContext(ContextData)
const navigate=useNavigate()



  return (
    <div >
<div className='Product_body'>

{
  Data.map((x ,index)=>{
    return  (
      <div className='Product_cart h-[450px]'key={index}>
    
<NavLink to={`/${x.id}`}> 
  <div className='flex justify-between p-4'>
      <button className='max-w-[100px] h-[30px] bg-yellow-300 pl-2 pr-2 rounded-md'>18% off</button>
      <button><i className="fa-solid fa-heart loveimg_cart"></i></button>
  </div>
  <div className='Product_img_tab'>
      <img src={x.image} alt="img" width="300" height="600" />
  </div></NavLink>
  <div className='product_price_tab w-[100%]'>
  <div>
  <h1 className='cart_text_title'>{x.name}</h1>
  <h1 className='text-sm font-semibold'>From $ {x.price}</h1><span className='line-through'>₹ 17,299</span>
  </div>
  <div>
  <button className='w-[40%] h-[35px] bg-black text-white m-3 shoppingbtn1' onClick={()=>Addtocart(x.id,x.image,x.name,x.price,x.quantity)}>Buy Now</button>
  <button className='w-[40%] h-[35px] bg-white text-black m-3  shoppingbtn2'  onClick={()=>navigate(`/${x.id}`)}>Learn More</button>
  </div>
</div>
</div>
    )
  })


}

</div>

    </div>
  )
}

export default Productshop