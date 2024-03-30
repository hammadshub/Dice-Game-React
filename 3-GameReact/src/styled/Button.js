import styled from "styled-components";

export const Button = styled.button`
     
    padding: 10px 18px;
 color: white;
      min-width: 220px;
    background: #000000;
    border-radius: 5px;
    border: none;
    border: 1px solid transparent;
    font-size: 16px;
    transition: 0.3s background ease-in;
    cursor: pointer;
    
    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.1s background ease-in;
    }
`;


export const OutlineButton = styled(Button)`
background-color: white;
border: 1px solid black;
color: black;
&:hover{
        background-color: black;
        border: 1px solid transparent;
        color: white;
        transition: 0.1s background ease-in;
    }
`;