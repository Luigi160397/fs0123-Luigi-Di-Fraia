const ButtonComponent = props => (
  <button style={{ backgroundColor: props.bgColor, fontSize: props.textSize + "rem" }}>{props.buttonText}</button>
);

export default ButtonComponent;
