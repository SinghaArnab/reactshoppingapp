import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ContextData } from '../Createcontext/Createcontext'

const ProductCart = () => {
  const { items, Removeitem, RemoveAll, increment, decrement, subPrice } = useContext(ContextData)
  const navigate = useNavigate()
  return (
    <div className='min-h-[90vh]'>
      {items.length > 0 ?
        <h1 className='text-[25px]  bg-gray-800 text-white'>Total cart items : <span className='text-red-300 font-semibold mr-10'>{items.length}</span>
          <span><button className='m-2 rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto ml-8' onClick={() => navigate("/")}>Go Back</button></span> </h1> : ''
      }
      <div className='w-[100%] flex flex-col'>
        {items.length > 0 ?
          <div>
            <button className='bg-green-500 text-white m-3  h-[35px] w-[300px] hover:bg-[#c6f4b7]' onClick={RemoveAll} ><i className="fa-solid fa-trash-can"></i>Clear</button>
          </div> : ''
        }
        <div className=' justify-between items-center w-[100%] flex flex-col lg:flex-row'>


          <div className='Product_cartbody w-[100%] lg:w-[70%]'>

            {
              items.length > 0 ?
                items.map((x, index) => {
                  return (
                    <div className='Product_cartPage h-[120px]'>
                      <div className='flex flex-row w-[100%] h-[120px]' key={index}>
                        <div className='Product_img_tab_cart w-[20%] h-[120px]'>
                          <img src={x.image} alt="img" />
                        </div>
                        <div className=' w-[30%] h-[100px] flex flex-col justify-center items-start'>
                          <h1 className=' text-black font-semibold text-[25px] mr-10'>{x.name}</h1>
                          <h1 className=' text-red-600 font-semibold text-[25px] mr-10'>{x.price}</h1>
                        </div>
                        <div className=' w-[30%] h-[120px] flex flex-col lg:flex-row justify-center items-center'>
                          <button className='bg-green-500 text-white m-3  h-[35px] w-[40px] hover:bg-[#c6f4b7] lg:text-2xl' onClick={() => increment(x.id)}>+</button>
                          <button className='bg-black text-white m-3  h-[35px] w-[30px] hover:bg-[#050505]' >{x.quantity}</button>
                          <button className='bg-pink-500 text-white m-3  h-[35px] w-[40px] hover:bg-[#f29bad] lg:text-2xl' onClick={() => decrement(x.id)} >-</button>
                        </div>
                        <div>
                        </div>
                        <div className='Product_Cart_button w-[20%] h-[120px]  flex justify-center items-center'>
                          <button className='w-[80%] h-[35px] bg-red-400 text-black font-semibold  ' onClick={() => Removeitem(x.id)}>Delete</button>
                        </div>

                      </div>

                    </div>
                  )
                }) :
                <div className='flex justify-center items-center h-[20vh] bg-gray-800 min-w-full absolute'>

                  <h1
                    class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                  >
                    No items Added, Go back to Product Page
                  </h1>

                  <a
                    onClick={() => navigate("/")} class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto ml-8"
                    href="/"
                  >
                    Product Page
                  </a>

                </div>


            }


          </div>

          {items.length > 0 ?

            <div className='w-[100%] lg:w-[30%] h-[300px] bg-[#eaf1ff] text-Black flex justify-start items-start pl-10 pt-5'>
              <div>
                <h1 className='text-[30px] font-bold flex justify-start items-start '>Summary</h1>
                <h1 className='flex justify-start items-start'>Total Cart items:<span className='text-red-300 font-semibold '>  {items.length}</span></h1>
                <h1 className='text-[20px] font-semibold flex justify-start items-start '>Sub Total :Rs. {subPrice}</h1>
                <h1 className='text-[20px] font-semibold flex justify-start items-start '>Service Charged:0</h1>
                <h1 className='flex justify-start items-start text-xl lg:text-3xl text-red-400'>Total Cart price :Rs. {subPrice}</h1>
                <button className='w-[200px] padding-[20px] bg-purple-400 m-8'  >Check Out</button>
              </div>

            </div> : ''
          }
        </div>

      </div>

    </div>
  )
}

export default ProductCart
