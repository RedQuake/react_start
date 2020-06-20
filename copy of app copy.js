import React from 'react';
import {useState} from 'react'
// import './App.css';

const App = () => {
   const [numberOfClicks, setNumberOfClicks] = useState(0)

   const onClickHandler = () => {
      const newValue = numberOfClicks + 1
      setNumberOfClicks(newValue)
   }
   const onClickHandlerMinus = () => {
      const newValue = numberOfClicks - 1
      setNumberOfClicks(newValue)
   }
}


return (
   <div>
      <h1>{'Clicked  ' + numberOfClicks} </h1>
      
      <button onClick={onClickHandler}>+++</button>
      <button onClick={onClickHandlerMinus}>---</button>
   </div>
)


export default App;