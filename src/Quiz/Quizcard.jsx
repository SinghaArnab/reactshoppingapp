import {createContext} from 'react'
import { useState } from 'react';
import Quiz from './Quiz'


const ApiQuery=createContext();

const Quizcard = () => {

  const [dataSend,setDataSend]=useState(false)
  const [Subject,setSubjects]=useState("JavaScript")
  const [category,setCategory]=useState("")
  const [queNo,setQueNo]=useState(10)
  const [difficulty,setDifficulty]=useState("Easy")

  console.log(category);
  return (
    <>
    {  !dataSend ?

    <div className='h-auto min-h-[100vh] w-[100%] flex justify-center items-center flex-col quizcardmain  gap-10 lg:gap-0'>
    <div className='mt-[100px]'>     
     <h1 className='text-[40px] text-white Quiztext'><span className='text-green-400'>Quiz</span> App</h1>
     <h1 className='text-[40px] text-white Quiztext'>If you think you are Pro then <span className='text-red-400'>Prove it !</span></h1>
    </div>
    <div className='h-auto lg:h-[20vh] w-[100%] lg:w-[90%] flex justify-around items-center flex-col lg:flex-row'>
    
    <div>
    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
    <div class="Quiz_card_Dropdown w-[100%]">
      <select name="menu" className='card_Select'  value={category} onChange={(e)=>setCategory(e.target.value)}>
        <option disabled selected>Select Category</option>
        <option value="Web Technology">Web Technology</option>
        <option value="Linux">Linux</option>
        <option value="SQL">SQL</option>
        <option value="DevOps">DevOps</option>
        <option value="Docker">Docker</option>
      </select>
    </div>
    </div>

    <div>
    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Difficulty</label>
    <div class="Quiz_card_Dropdown">
      <select name="menu" className='card_Select'   value={difficulty} onChange={(e)=>setDifficulty(e.target.value)}>
        <option disabled selected>Select Difficulty</option>
        <option value="Easy" >Easy</option>
        <option value="Hard">Hard</option>
      </select>
    </div>
    </div>

    <div>
    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number of questions</label>
    <div class="Quiz_card_Dropdown">
      <select name="menu" className='card_Select'  value={queNo} onChange={(e)=>setQueNo(e.target.value)}>
        <option disabled selected>Select questions No</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
    </div>
    </div>

    <div>
    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
    <div class="Quiz_card_Dropdown">
      <select name="menu" className='card_Select'  value={Subject} onChange={(e)=>setSubjects(e.target.value)}>
        <option disabled selected >Select Subject</option>
        <option value="JAVASCRIPT">JAVASCRIPT</option>
        <option value="HTML">HTML</option>
        <option value="PHP">PHP</option>
        <option value="MySQL">MySQL</option>
      </select>
    </div>
    </div> 
    <button class="bg-transparent mt-[29px] hover:bg-red-500 text-red-400 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
     onClick={()=>setDataSend(true)}>Start Quiz
    </button>
    </div>
    <div className='h-auto lg:h-[40vh] w-[90%] flex justify-around items-center flex-col lg:flex-row  gap-10 mb-20 lg:mb-20'>
     
    <div className='h-[200px] w-[90%] lg:h-[50%] lg:w-[22%] flex justify-center items-center gap-4 quizcard1 transition delay-700 duration-300 ease-in-out' onClickCapture={()=>setSubjects("HTML")} onClick={()=>setDataSend(true)}></div>
    <div className='h-[200px] w-[90%] lg:h-[50%] lg:w-[22%] flex justify-center items-center gap-4 quizcard2 transition delay-700 duration-300 ease-in-out' onClickCapture={()=>setSubjects("JavaScript")} onClick={()=>setDataSend(true)}></div>
    <div className='h-[200px] w-[90%] lg:h-[50%] lg:w-[22%] flex justify-center items-center gap-4 quizcard3 transition delay-700 duration-300 ease-in-out' onClickCapture={()=>setSubjects("PHP")} onClick={()=>setDataSend(true)}></div>
    <div className='h-[200px] w-[90%] lg:h-[50%] lg:w-[22%] flex justify-center items-center gap-4 quizcard4 transition delay-700 duration-300 ease-in-out' onClickCapture={()=>setSubjects("MySQL")} onClick={()=>setDataSend(true)}></div>

    </div>
    
    </div>:
    <ApiQuery.Provider value={{Subject,category,queNo,difficulty,setDifficulty,setDataSend}}>
    <Quiz/>
   </ApiQuery.Provider>
}
   </>
  )
}

export default Quizcard
export {ApiQuery}
