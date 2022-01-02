import React from "react";
import "./leftcomponent.css";


function Option({ active, text, Icon }) {
  return (
      
    <span className="elements">
      <h4><Icon />{text}</h4>
    </span>
    
  );
}

export default Option;