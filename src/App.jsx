import React, { useState } from 'react'
import styled from 'styled-components'
import StartGame from './component/StartGame'
import GamePlay from './component/GamePlay';

const App = () => {
  const [isGamePlay, setIsGamePlay] = useState(false);

  const toggleGamePlay = () => {
    setIsGamePlay((prev) => !prev)
  }
  return (
    <>
      {
        isGamePlay ? <GamePlay/> : <StartGame toggle={toggleGamePlay}/>
      }
    </>
  )
}

export default App


const Button = styled.button`
background-color: grey;
padding: 10px;
border: none;
`;