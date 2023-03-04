import React from 'react'
import { useState } from 'react'
import { useReducer } from 'react'
import './Bmi.css'


const initial={
   height:0,
   weight:0,
   calculate:0
}

const reducer=(state,action)=>{

    console.log(action.payload);

    if (action.type==="BMI"){
        return{
            ...state,height:action.payload?.height,weight:action.payload?.weight
        }
    }
    if (action.type==="CALCULATE"){
        return{
            ...state,calculate:((Number(state.weight) / (Number(state.height)*Number(state.height)))*10000).toFixed(1)
        }
    }

}

const BmiCalculator = () => {
    const [input,setInput]=useState({
        height:80,
        weight:65
    })
    const [state,dispatch]=useReducer(reducer,initial)

    const handelChange=(e)=>{
            const {name,value}=e.target
            setInput(()=>{
                return{
                    ...input,[name]:value
                }     
            })
            dispatch({type:"BMI",payload:input})
            dispatch({type:"CALCULATE"})
    }


    // const dataSubmit=()=>{
    //     dispatch({type:"BMI",payload:input})
    //     dispatch({type:"CALCULATE"})
    // }

  return (
    <div>  
<div className="container">
  <div className="row">
    <div className="col-md-12">
      <div className="bmi-calculator">
        <div className="result">
          <div className="result-text"> 
            <h1><span id="bmiValue">{state.calculate}</span>kg/m2</h1><small id="bmid">Normal</small>
          </div>
        </div>
        <div className="calculator">
          <h2 className="text-center calculator-title">What's Your BMI?</h2>
          <hr className="calculator-hr"/>
          <div className="height">
            <input className="value_range" id="height" type="range" min="100" max="250" step="1" name="height" value={input.height} onChange={handelChange}  />
            <div className="label-height field-text">{input.height}</div>
          </div>
          <div className="weight">
            <input className="value_range" id="weight" type="range" min="0" max="250" step="1" name="weight"  value={input.weight} onChange={handelChange}/>
            <div className="label-weight field-text">{input.weight}</div>
          </div>
          <div className="submit">
            {/* <input className="submit" id="submit" type="submit" value="Calculate" onChange={dataSubmit}/> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default BmiCalculator
