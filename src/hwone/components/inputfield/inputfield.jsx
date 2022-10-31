import "./inputfield.css";


function InputField(props) {
    return (
      <div className="inputfield">


        
         <label className="label" htmlFor="myinput"> {props.label}</label>
      
        <input className="my-input" id="myinput" autoComplete={true}   onChange={(e)=>props.onChange && props.onChange(e.target.value)}  placeholder={props.placeholder}  type={props.type} />
        
      </div>
    );
  }
  
  export default InputField;
  