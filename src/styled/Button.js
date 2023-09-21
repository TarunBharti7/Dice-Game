import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 8px;
  border: none;
  background-color: black;
  color: white;
  border-radius: 4px;
  min-width: 220px;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;
  cursor: pointer;

  &:hover{
    background-color: lightgray;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;

export const OutlineButton = styled(Button)`

  background-color: lightgray;
  border: 1px solid black;
  color: black;

&:hover{
    background-color: black;
    border: 1px solid black;
    color: white;
    transition: 0.3s background ease-in;
  }

`;