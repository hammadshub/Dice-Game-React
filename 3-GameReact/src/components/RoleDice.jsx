 import styled from "styled-components";

 
const RoleDice = ({roleDice,currentDice}) => {



  

  return (
    <DeviceContainer>
      <div className="dice"
      onClick={roleDice}
      >
        <img src={`/images/dice/dice_${currentDice}.png `}alt="" />
      </div>
      <p>
        Click on Dice to Roll 
      </p>
      </DeviceContainer>
  );
};

export default RoleDice;


 const DeviceContainer = styled.div`
 display:flex;
 align-items: center;
 margin-top: 48px;
 flex-direction:column;

 .dice{
  cursor: pointer;
 }

 p{
  font-size: 24px;
 }
 `;