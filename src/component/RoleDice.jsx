import { useState } from "react";
import styled from "styled-components";

const RoleDice = ({currentDice , roleDice}) => {
    
  return (
    <DiceContainer>
        <div className="dice" onClick={roleDice}>
            <img src={`/images/dice/dice_${currentDice}.png`} alt="" />
        </div>
        <p>Click on Dice to Role</p>
    </DiceContainer>
  )
}

export default RoleDice;

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;

    p{
        font-size: 24px;
    }

    .dice {
        cursor: pointer;
    }
`;