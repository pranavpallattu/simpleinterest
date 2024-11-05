import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css'

function App() {

  const [principle , setPrinciple] = useState("")

  const [rate , setRate] = useState("")

  const [year , setYear] = useState("")

  const[isPrinciple , setIsPrinciple] = useState(true)

  const[isRate , setIsRate] = useState(true)

  const[isYear , setIsYear] = useState(true)

  const [interest , setInterest] = useState(0)



 const validate = (e) =>{
  const {name , value}=e.target
  console.log(name);
  console.log(value);

  // match(regExpression)
  // match returns array when the value matches with regexpression else null

  if(!!value.match('^[0-9]*$')){
    if(name == "principle"){
      setPrinciple(value)
      setIsPrinciple(true)
    }
    else if(name == 'rate'){
      setRate(value)
      setIsRate(true)
    }
    else{
      setYear(value)
      setIsYear(true)
    }
  }
  else{
    if(name == "principle"){
      setPrinciple(value)
      setIsPrinciple(false)
    }
    else if(name == 'rate'){
      setRate(value)
      setIsRate(false)
    }
    else{
      setYear(value)
      setIsYear(false)
    }

    
  }
  
  
 }

 const handleReset = ()=>{
 setPrinciple("")
  setRate("")
  setYear("")
  setIsPrinciple(true)
  setIsRate(true)
  setIsYear(true)
  setInterest(0)

 }

 const calculate = ()=>{
  setInterest((principle*year*rate)/100)
 }

    


  return (
    <>
  <div className='bg-dark d-flex justify-content-center align-items-center' style={{height:'100vh', width:'100%'}}>
    <div className='bg-light p-5 rounded-2' style={{width:'500px'}}>
      <h1>Simple Interest App</h1>
      <p className='text-center'>Calculate your simple Interest Easily</p>

      <div className='bg-warning p-3 mt-4 d-flex justify-content-center align-items-center rounded flex-column' style={{height:'150px'}}>
            <h1>₹ {interest}</h1>
            <p>Total simple interest</p>
      </div>
      <div className='my-3'>
      <TextField className='w-100' id="outlined-basic" value={principle} name="principle" label="Principle amount" variant="outlined" onChange={(e)=>validate(e)} />
      { isPrinciple == false && <p className='text-danger'>*Invalid input</p>}  
      </div>
      <div className="mb-3">
      <TextField className='w-100' id="outlined-basic" value={rate} name="rate" label="Rate of interest" variant="outlined" onChange={(e)=>validate(e)} />
      { isRate == false && <p className='text-danger'>*Invalid input</p> }  

      </div>
      <div className="mb-3">
      <TextField className='w-100' id="outlined-basic" value={year} name="year" label="Year" variant="outlined" onChange={(e)=>validate(e)} />
      { isYear == false &&  <p className='text-danger'>*Invalid input</p>}

      </div>
      <div className="mb-3 d-flex justify-content-between">
      <Button disabled={isPrinciple && isRate && isYear ? false:true} variant="contained" style={{width:'190px'}} color='success' className='p-3' onClick={calculate}>CALCULATE</Button>
      <Button variant="outlined" style={{width:'190px'}} className='p-3' onClick={handleReset}>RESET</Button>
      </div>
    </div>
  </div>
    </>
  )
}

export default App
