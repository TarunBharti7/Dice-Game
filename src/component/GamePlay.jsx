import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { Button, OutlineButton } from '../styled/Button'
import Rule from './Rule'

const GamePlay = () => {
  const [score , setScore] = useState(0);

  const [selectedNumber , setSelectedNumber] = useState();

  const [currentDice , setCurrentDice]  = useState(1);

  const [error , setError] = useState("");

  const [showRule , setShowRule] = useState(false);

  const generateRandomNum = (min , max) =>{
    return Math.floor(Math.random() * (max - min) + min);
  }

  const roleDice = () => {
    if(!selectedNumber) {
      setError("You have not selected any number")
      return
    };

    setError("");
    const randomNum = generateRandomNum(1,7);
    setCurrentDice(randomNum)

    if(selectedNumber === randomNum){
      setScore((prev) => prev + randomNum);
    }
    else{
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  }

  const reset = () => {
    setScore(0);
  }



  return (
    <MainContainer>
    <div className='top_section'>
       <TotalScore score={score} />
       <NumberSelector
        setError={setError}
        error={error}
        selectedNumber={selectedNumber}   setSelectedNumber={setSelectedNumber}
       />
    </div>
    <RoleDice currentDice={currentDice} roleDice={roleDice} />
    <div className="btns">
      <OutlineButton onClick={reset} >Reset</OutlineButton>
      <Button onClick={() => setShowRule((prev) => !prev)}>  {showRule ? "Hide" : "Show"} Show Rule</Button>
    </div>
    {showRule && <Rule/>}
    </MainContainer>
  )
}

export default GamePlay;


const MainContainer = styled.main`
  padding-top: 70px;

  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 40px;
  }
`;