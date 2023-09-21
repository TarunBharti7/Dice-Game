import { useState } from "react";
import styled from "styled-components"

const NumberSelector = ({setError , error , selectedNumber , setSelectedNumber}) => {
    const arrNumber = [1,2,3,4,5,6];

    const numberSelectedHandler = (value) => {
        setSelectedNumber(value);
        setError("");
    }

  return (
    <BoxContainer>
    <p className="error">{error}</p>
    <div className="flex">
        {
            arrNumber.map((value , i) =>(
                <Box 
                    isSelected= {value === selectedNumber}
                    key={i}
                    onClick={()=>numberSelectedHandler(value) }>
                    {value}
                </Box>
            ))
        }
    </div>
    <p>Select Number</p>
    </BoxContainer>
  )
}

export default NumberSelector;


const BoxContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: end;

    .flex {
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700;

    }
    .error {
        color: red;
    }
`;

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${({isSelected}) => isSelected ? "black" : "white" };
    color: ${({isSelected}) => isSelected ? "white" : "black" };
`;