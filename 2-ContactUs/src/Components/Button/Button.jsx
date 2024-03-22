 

 import styles from "./Button.module.css";

const Button = ({isOutline,icon,text,...rest}) => {

  //const {isOutline,icon,text}= props;  we can use destructuring for more conciseness..... so we by doing this we can remove props keyword from below code.
  
  return (
    <button {...rest} 
    className={isOutline ? styles.outline_btn : styles.primary_btn}> 
      
      {icon}
      {text}
    </button>
  );
};

export default Button;
