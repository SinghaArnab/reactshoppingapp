/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

let datatype=""
let count=0

const Fakeuser = () => {
    
const [apidata,setApidata]=useState()
const [tougledata,setTougledata]=useState()
const [isLoading,setLoading]=useState(true)
const newuser=()=>{
  count+=1;
  setTougledata(apidata[0].name.first);
  datatype="Name"
}
 
const Apidata=async ()=>{
  const res = await axios.get(`https://randomuser.me/api/`);
  setTimeout(()=>{
    setLoading(false)
  },500)
  setApidata(res.data.results);
  
}

useEffect(() => { 
Apidata()

}, [count])

const profile=()=>{setTougledata(apidata[0].name.first);datatype="name"}
const email=()=>{setTougledata(apidata[0].email);datatype="email"}
const dob=()=>{setTougledata(apidata[0].dob.date.slice(0,10));datatype="Date of birth"}
const add=()=>{setTougledata(apidata[0].location.city+" ,"+apidata[0].location.country);datatype="Location"}
const phone=()=>{setTougledata(apidata[0].phone);datatype="Phone no "}
const pass=()=>{setTougledata(apidata[0].login.password);datatype="password"}

  return (
    <div className="bg-[#2c2e31] h-[100vh] w-[100%] flex justify-center items-center flex-col gap-11">
    <div className="flex justify-center items-start w-[50%] h-[200px] flex-col">
    <h1 className="text-[40px] text-white font-mono w-[100%] text-center">RANDOM USER GENERATOR</h1><br/>
    <h1 className="text-[15px] text-white font-mono">A free, open-source API for generating random user data. Like Lorem Ipsum, but for people.</h1>
    <h1 className="text-[20px] text-white font-mono w-[100%] text-center mt-4"><i className="fa-brands fa-twitter text-blue-400 mr-2"></i>Follow us @randomapi</h1>
    </div>

    {

isLoading?
<div>
<img src="https://i.gifer.com/origin/2f/2fdd8b1c7eaa39011c7a541f81f72a56_w200.webp" alt="" />
<h1>hello</h1>

</div>
:
 
apidata.map((x)=>{
  return (
       <div className="flex justify-center items-center w-[50%] h-[400px] bg-white flex-col mt-6">


       <div className="flex justify-center items-center w-[50%] h-[200px] rounded-[50%] ">
                <img src={x.picture.large} className="rounded-[50%] border-8 border-grey-500" alt="" /> 
      </div>     
    <div className="flex justify-center items-center w-[100%] h-[200px] bg-pink-200 flex-col">

<div className="flex justify-center items-center flex-col mt-5 " id='one'>
         <h1  className="text-[20px]" >Hi, My {(datatype)?datatype:"Name"} is</h1>
         <h1 className=" text-[40px] font-bold flex flex-wrap sm:text-[30px] ">{(tougledata)?tougledata:x.name.first}</h1>
</div>
<div className="flex justify-center items-end w-[70%] h-[200px] bg-pink-200 flex-col">

<div className="flex justify-center items-center flex-wrap w-[100%] h-[50%]">
 <div className="h-[100%] w-[80px] flex justify-center items-center hover:animate-bounce" name='name'><h1 className="text-[30px]" onMouseOver={profile}> <i className="fa-solid fa-user text-red-500 opacity-1 hover:text-green-500"></i></h1></div>
 <div className="h-[100%] w-[80px] flex justify-center items-center hover:animate-bounce" name='email'><h1  className="text-[30px]" onMouseOver={email}><i className="fa-solid fa-envelope  text-red-500 opacity-1  hover:text-green-500"></i></h1></div>
 <div className="h-[100%] w-[80px] flex justify-center items-center hover:animate-bounce" ><h1  className="text-[30px]"  onMouseOver={dob}><i className="fa-solid fa-calendar  text-red-500 opacity-1  hover:text-green-500"></i></h1></div>
 <div className="h-[100%] w-[80px] flex justify-center items-center hover:animate-bounce" ><h1  className="text-[30px]"  onMouseOver={add}><i className="fa-solid fa-map-location-dot  text-red-500 opacity-1  hover:text-green-500"></i></h1></div>
 <div className="h-[100%] w-[80px] flex justify-center items-center hover:animate-bounce" name='phone'><h1  className="text-[30px]"  onMouseOver={phone}><i className="fa-regular fa-address-book  text-red-500 opacity-1  hover:text-green-500"></i></h1></div>
 <div className="h-[100%] w-[80px] flex justify-center items-center hover:animate-bounce" name='password'><h1  className="text-[30px]"  onMouseOver={pass}><i className="fa-solid fa-lock  text-red-500 opacity-1  hover:text-green-500"></i></h1></div>
</div>
</div>
<button className='bg-green-500 w-[100%] h-[50px] text-white hover:h-[60px] ' onClick={newuser}>Next</button>
</div>

</div>
       )

})
}

    </div>
  )
}

export default Fakeuser