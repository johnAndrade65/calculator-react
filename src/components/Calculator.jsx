//IMPORTS
import React, { useState } from 'react'
import '../styles/Calculator.css'
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

//EXPORT FUNCTION WITH COMPONENT CALCULATOR TO APP.JS
export default function Calculator() {

  //USESTATES
  const[num,setNum]=useState(0);
  const[oldNum,setOldNum]=useState(0);
  const[operator,setOperator]=useState();
  
  //FUNCTION INPUTNUM
  function inputNum(e){
    var input = e.target.value;
    if(num===0){
      setNum(input);
    }else{
      setNum(num + input)
    }
  }

  //FUNCTION CLEAR NUM OF THE CALCULATOR
  function clear(e){
    setNum(0)
  }
  //PORCENTAGE = NUM(VAR) / 100
  function porcentage(){
    setNum(num / 100)
  }
  //CHANGE SIGN OF THE RESULT VARIABLE
  function changeSign(){
    if(num>0){
      setNum(-num)
    }else{
      setNum(Math.abs(num))
    }
  }

  //FUNCTIONS TO UPDATE OPERATOR + OLD NUMBER + NUMBER
  function operatorHandler(e){
    var operatorInput = e.target.value
    setOperator(operatorInput)
    setOldNum(num)
    setNum(0)
  }
  //WILL VERIFY THE OPERATOR AND MAKE THE MATHEMATICAL OPERATION ACCORDING TO THE SELECTED OPERATOR
  function calculate(){
    if(operator==='/'){
      setNum(parseFloat(oldNum) / parseFloat(num))
    }
    if(operator==='*'){
      setNum(parseFloat(oldNum) * parseFloat(num))
    }
    if(operator==='-'){
      setNum(parseFloat(oldNum) - parseFloat(num))
    }
    if(operator==='+'){
      setNum(parseFloat(oldNum) + parseFloat(num))
    }
  }

  //WILL RETURN THE CALCULATOR ELEMENT TO App.js
  return (
  <Box m={5}>
    <Container maxWidth="xl">
      <div className='wrapper'>
       <Box m={12}/>
        <h1 className='result'>{num}</h1>

        <button onClick={clear}>AC</button>
        <button onClick={changeSign}>+/-</button>
        <button onClick={porcentage}>%</button>
        <button className='blue' onClick={operatorHandler} value="/">/</button>
        <button className='gray' onClick={inputNum} value={7}>7</button>
        <button className='gray' onClick={inputNum} value={8}>8</button>
        <button className='gray' onClick={inputNum} value={9}>9</button>
        <button className='blue' onClick={operatorHandler} value="*">X</button>
        <button className='gray' onClick={inputNum} value={4}>4</button>
        <button className='gray' onClick={inputNum} value={5}>5</button>
        <button className='gray' onClick={inputNum} value={6}>6</button>
        <button className='blue' onClick={operatorHandler} value="-">-</button>

        <button className='gray' onClick={inputNum} value={1}>1</button>
        <button className='gray' onClick={inputNum} value={2}>2</button>
        <button className='gray' onClick={inputNum} value={3}>3</button>
        <button className='blue' onClick={operatorHandler} value="+">+</button>

        <button className='gray' onClick={inputNum} value={0}>0</button>
        <button className='gray' onClick={inputNum} value={"."}>.</button>
        
        <button className='blue' id='result' onClick={calculate}>=</button>
      </div>
    </Container>
  </Box>
  ) 
}
