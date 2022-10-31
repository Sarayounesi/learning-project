import "./button.css";
import React, { Component } from 'react';


function Button(props) {
  return ( 

    <div className="my-button">
      <button className="buttonText"  onClick={()=>props.onClick&&props.onClick()} >  {props.buttonName}  </button>
    </div>
  );
}

export default Button;
