import React from 'react';
import {useState} from 'react'
// import './App.css';

const App = () => {
   const [numberOfClicks, setNumberOfClicks] = useState(0)
   const [colorHeader, setColorHeader] = useState('red')

   const onClickHandler = () => {
      const newValue = numberOfClicks + 1
      setNumberOfClicks(newValue)
   }
   const onClickHandlerMinus = () => {
      const newValue = numberOfClicks - 1
      setNumberOfClicks(newValue)
   }
   const onClickHandlerColor = () => {
      const newColor = (Math.random() > 0.5) ? 'green' : 'red'
      setColorHeader(newColor)
   }
const style = {
   color: colorHeader 
}
   return (
      <div>
         <h1 style={style}>{'Clicked ' + numberOfClicks}</h1>

         <button onClick={onClickHandler}>+++</button>
         <button onClick={onClickHandlerMinus}>---</button>
         <button onClick={onClickHandlerColor}>COLOR</button>
      </div>
      
   )
}




export default App;