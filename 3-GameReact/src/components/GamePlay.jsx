import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice";
 import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";
 
const GamePlay = () => {

  const [score, setScore] = useState(0);

  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
const [error, setError] = useState();
const [showRules, setShowRules] = useState(false);

 

  const generateRandomNo = (min, max) =>{
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  }
   
const roleDice = () =>{

  if(!selectedNumber) {
    setError("You have not selected any number");
    return;
  }

 


  const randomNo = generateRandomNo(1,7);

  setCurrentDice((prev)=>randomNo);

  


if(selectedNumber === randomNo){
  setScore(prev+ randomNo);

}else{
  setScore((prev)=> prev -2);
}

setSelectedNumber(undefined);

};


const resetScore = ()=>{
  setScore(0);
}




  return (
    <MainCOntainer>
      <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
      </div>
      < RoleDice currentDice={currentDice} roleDice={roleDice}/>
    
 <div className="btns">
  <OutlineButton onClick={resetScore}>Reset</OutlineButton>
  <Button onClick={ ()=> setShowRules((prev)=>!prev)}>{showRules ? "Hide" : "Show"} Rules</Button>
 </div>
 
 {showRules && <Rules/>}
    </MainCOntainer>
  );
};

export default GamePlay;

const MainCOntainer = styled.main`
  padding-top: 70px;

  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }


  .btns{
    display: flex;
    flex-direction: column;
    justify-content: center;
     gap: 22px;
     margin-top: 40px;
    align-items: center;
  }

`;
