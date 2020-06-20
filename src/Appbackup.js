import React from 'react';
import {useState} from 'react'
import './App.css';
// 1) make answer work
// 2) errorHandling when expression is invalid



const App = () => {
//   const countingArray = useState('')
//   const userInput = countingArray[0]
//   const setUserInput = countingArray[1]
const [userInput, setUserInput] = useState('')
  

  const onClickHandler = (number) => {
    const newCount = userInput + number
    setUserInput(newCount)
  }
  const backSpaceHandler = () => {
    const newCount = userInput.substring(0, userInput.length -1)
    setUserInput(newCount)
  }
const [answer, setAnswer] = useState('hallo')
  
  const enterEqualHandler = () => {
   const newAnswer = (eval(userInput))
   setAnswer(newAnswer)
   }
  

    return (
      <div>
      <h2>Calculator</h2>
      <div  className={'UserInput'}>{userInput}</div>
      <div  className={'UserInput'}>{answer}</div>

      <div className="Calculator">
         <div>
            <button onClick = {() => onClickHandler('1')}>1</button>
            <button onClick = {() => onClickHandler('2')}>2</button>
            <button onClick = {() => onClickHandler('3')}>3</button>
            <button onClick = {() => onClickHandler('+')}>+</button>
         </div>
         <div>
            <button onClick = {() => onClickHandler('4')}>4</button>
            <button onClick = {() => onClickHandler('5')}>5</button>
            <button onClick = {() => onClickHandler('6')}>6</button>
            <button onClick = {() => onClickHandler('-')}>-</button>
         </div>
         <div>
            <button onClick = {() => onClickHandler('7')}>7</button>
            <button onClick = {() => onClickHandler('8')}>8</button>
            <button onClick = {() => onClickHandler('9')}>9</button>
            <button onClick = {() => onClickHandler('*')}>*</button>
         </div>
         <div>
            <button onClick = {() => onClickHandler('.')}>.</button>
            <button onClick = {() => onClickHandler('0')}>0</button>
            <button onClick = {backSpaceHandler}><i className="left"></i></button>
            <button onClick = {() => onClickHandler('/')}>/</button>
         </div>
         <div>
            <button onClick = {() => onClickHandler('(')}>(</button>
            <button onClick = {() => onClickHandler(')')}>)</button>
            <button onClick = {enterEqualHandler}>=</button>
            <button onClick = {() => onClickHandler('ANS')}>ANS</button>
         </div>
      </div>
   </div>
    ) 
}

export default App;