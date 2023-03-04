import { useParams, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ContextData } from '../Createcontext/Createcontext'


const Singleproduct = () => {

  const { Data, Addtocart } = useContext(ContextData)
  const navigate = useNavigate()
  const { productId } = useParams();
  const getitems = Data.find((product) => product.id === parseInt(productId))
  return (

    <div className='min-h-[81.55vh] w-[100%] flex justify-center items-center flex-col md:flex-row lg:flex-row'>
      <div className='min-h-[80vh] lg:w-[50%] flex justify-center items-center'>


        <div className="show h-[80%] w-[100%] lg:w-[60%] flex flex-col justify-center items-center " key={getitems.id}>
          <div className="h-[60vh]"><img src={getitems.image} alt="" className='h-[100%] object-cover' /></div>

        </div>


      </div>
      <div className='min-h-[80vh] lg:w-[50%] flex justify-center items-center flex-col'>
        <div className=" h-[10%] text-black m-1 text-[30px]">Product Name : {getitems.name}</div>
        <div className=" h-[10%] text-black m-1 text-[20px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, similique.</div>
        <div className=" h-[10%] text-black m-1 text-[20px]">Features: 5G , AMOLED display, Exynos 2100 processor</div>
        <div className=" h-[10%] text-black m-1 text-[30px]">Quantity</div>
        <div>
          <button className='bg-green-500 text-white m-3  h-[35px] w-[100px] hover:bg-[#c6f4b7]' ><i class="fa-solid fa-chevron-right"></i></button>
          <button className='bg-black text-white m-3  h-[35px] w-[40px] hover:bg-[#050505]' >1</button>
          <button className='bg-pink-500 text-white m-3  h-[35px] w-[100px] hover:bg-[#f29bad]' ><i class="fa-solid fa-angle-left"></i></button>
        </div>
        <div className='flex flex-row'>
          <button className='w-[150px] h-[35px] bg-red-400 text-white m-3 shoppingbtn1' onClick={() => Addtocart(getitems.id, getitems.image, getitems.name, getitems.price)}>Buy Now</button>
          <div className="back"><button className='bg-black text-white m-3  h-[35px] w-[150px] hover:bg-[crimson]' onClick={() => navigate("/")}>Back</button></div>
        </div>

      </div>
    </div>



  )
}

export default Singleproduct
