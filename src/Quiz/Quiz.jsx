/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { ApiQuery } from './Quizcard'
import axios from 'axios'

let current = 0
let count = 0
let timerpercentage = 0

const Quiz = () => {

  const { Subject, difficulty, queNo, setDifficulty, setDataSend } = useContext(ApiQuery)

  console.log(Subject);

  const [apidata, setApidata] = useState()
  const [CurrentQue, setCurrentQue] = useState()
  const [rightAns, setRightAns] = useState([])
  const [selected, setSelected] = useState(0)
  const [result, setResult] = useState(false)
  const [counter, setCounter] = useState("")


  if (Subject === "JAVASCRIPT") {
    setDifficulty("Easy")
  }

  const showResult = () => {
    setResult(true)
  }

  const StartExam = () => {
    setCounter(300)
  }

  const NextQue = () => {
    setCurrentQue(apidata[current])
    setSelected(0)
    current += 1

  }
  const closeResult = () => {
    count += 1;
    setCurrentQue(apidata[current = -1])
    setCounter("")
    setResult(false)
  }
  useEffect(() => {
    const Apidata = async () => {
      const res = await axios.get(`https://quizapi.io/api/v1/questions?apiKey=GZgAAgskNziWTw5hlot1mYCf7Ok2COZBfNqIpcWH&difficulty=${difficulty}&limit=${queNo}&tags=${Subject}`)
      setApidata(res.data);
    }
    Apidata()

  }, [count])

  useEffect(() => {
    const Timer = setTimeout(() => {
      if (counter > 0) {
        setCounter(counter - 1)
        timerpercentage = counter / 3 + "%"
      }
      if (counter === 0) {
        setResult(true)
      }
    }, 1000)
    return () => {
      clearTimeout(Timer)
    }
  }, [counter])

  const answer = (ans, id) => {
    console.log(ans, id)
    if (ans === 'true') {
      setRightAns((oldData) => [...oldData, { ans }])
    }
  }

  /////per 1 sec minus 3 on 300      counter /3 100 -1 

  return (
    <div className='w-[100%] min-h-[100vh] bg-[#cd69d8] relative QuizMain' >

      <div className='bg-violet-800 h-[8vh] flex justify-end items-center px-10'>
        <button className='h-[40px] w-[100%] lg:w-[200px] bg-red-400' onClick={() => setDataSend(false)}>Home</button>
      </div>
      {result ? <div className='transparentDiv'>
        <div className='h-[300px] w-[30%] bg-yellow-300 left-[37%] top-[25%] delay-300 absolute'>
          <div className='text-[20px] font-semibold text-black left-[40%] top-[30%] absolute'><h1 className='text bg-red-900 text-[40px] text-white'>{result ? rightAns.length : ''}</h1> <h1> {result ? '   out of ' : ""}{queNo}</h1></div>
          <button className='w-[100%] h-[30px] bg-red-400 mt-2 hover:bg-red-600 top-[88%] right-[0.1px] absolute' type='submit' onClick={closeResult}>close</button>
        </div>
      </div> : ''}
      <div className='flex justify-center items-center pt-4 flex-col'>

        <div className='text-[20px] font-semibold text-orange-600 '>Category:Tech &nbsp; {counter === "" ? "" : <span className='text-yellow-300'> {counter}s&nbsp; Left</span>}</div>
        {counter === "" ? "" :
          <div class="w-[50%] bg-gray-200 rounded-full dark:bg-gray-700 mt-4">
            <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: timerpercentage }}>{parseInt(timerpercentage)}%</div>
          </div>}
      </div>
      {
        CurrentQue ?
          <div className='flex justify-center items-center pt-11 flex-col' key={CurrentQue.id}>
            <div className='text-[20px] font-semibold text-white p-2'>{current ? 'Q.' + current + "   " : ''}
              {CurrentQue.question}
            </div>

            <div className='w-[80%] sm:w-[50%]  h-[40%] mt-11 flex justify-center items-center gap-4 flex-col  '>

              <div className={`w-[100%] h-[45px] ${selected === 1 ? 'bg-green-400 text-white' : ' bg-orange-200'}  rounded-[50px] flex justify-center items-center p-4 cursor-pointer`} onClick={() => answer(CurrentQue.correct_answers.answer_a_correct, 1)} onClickCapture={() => setSelected(1)}> {CurrentQue ? CurrentQue.answers.answer_a : null}</div>
              <div className={`w-[100%] h-[45px] ${selected === 2 ? 'bg-green-400 text-white' : ' bg-orange-200'}  rounded-[50px] flex justify-center items-center p-4 cursor-pointer`} onClick={() => answer(CurrentQue.correct_answers.answer_b_correct, 2)} onClickCapture={() => setSelected(2)}>{CurrentQue ? CurrentQue.answers.answer_b : null}</div>
              {CurrentQue.answers.answer_c ? <div className={`w-[100%] h-[45px] ${selected === 3 ? 'bg-green-400 text-white' : ' bg-orange-200'}  rounded-[50px] flex justify-center items-center p-4 cursor-pointer`} onClick={() => answer(CurrentQue.correct_answers.answer_c_correct, 3)} onClickCapture={() => setSelected(3)}>{CurrentQue ? CurrentQue.answers.answer_c : null}</div> : null}
              {CurrentQue.answers.answer_d ? <div className={`w-[100%] h-[45px] ${selected === 4 ? 'bg-green-400 text-white' : ' bg-orange-200'}  rounded-[50px] flex justify-center items-center p-4 cursor-pointer`} onClick={() => answer(CurrentQue.correct_answers.answer_d_correct, 4)} onClickCapture={() => setSelected(4)}>{CurrentQue ? CurrentQue.answers.answer_d : null}</div> : null}

            </div>


          </div>

          : null

      }
      {current === 0 ?
        <button className='w-[200px] h-[45px] bg-blue-500 rounded-[50px] mt-[200px] hover:animate-bounce' onClick={NextQue} onClickCapture={StartExam} >Start Quiz<i className="fa-solid fa-chevron-right ml-2"></i></button> :
        <div className='flex justify-center items-center pt-11 pb-11'>
          {current > queNo - 1 ? <button className='w-[200px] h-[45px] bg-green-500 rounded-[50px]' onClick={showResult}>Submit<i className="fa-solid fa-chevron-right ml-2"></i></button>
            : <button className='w-[200px] h-[45px] bg-orange-400 rounded-[50px] hover:bg-red-500 text-white nextbtn' onClick={NextQue}>Next Que<i className="fa-solid fa-chevron-right ml-2"></i></button>}
        </div>
      }
    </div>
  )
}

export default Quiz
