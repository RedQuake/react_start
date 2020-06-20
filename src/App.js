import React from 'react';
import {useState} from 'react'

const App = () => {
  const [numberOfClicks, setNumberOfClicks] = useState(0)
  const [colorHeader, setColorHeader] = useState('purple')

  const onClickHandler = () => {
     const newValue = numberOfClicks + 1
     setNumberOfClicks(newValue)
  }

  const onClickHandlerMinus = () => {
     const newValue = numberOfClicks - 1
     setNumberOfClicks(newValue)
  }
  const onClickHandlerColor = () => {
     const newColor = (Math.random() > 0.8) ? 'red' : 'orange'
     setColorHeader(newColor)
  }
  const style = {
   fontSize: 20px,
   color: colorHeader
  }
  return (
     <div>
        <h1 style={style}>{'Clicked   ' + numberOfClicks}</h1>

        <button onClick={onClickHandler}>+++</button>
        <button onClick={onClickHandlerMinus}>---</button>
        <button onClick={onClickHandlerColor}>Color</button>

     </div>
  )


}
export default App;