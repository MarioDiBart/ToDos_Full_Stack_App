import {useState} from "react";
import * as React from 'react';

export default function ToDo({ title, description, dateCreated}) {
    const [dateCompleted, setDateCompleted] = useState("");
    const [checked, setChecked] = React.useState(false);
  

  const handleChange = () => {
    setChecked(!checked);
    if(!checked){
      setDateCompleted(Date.now)
    }
    else {
      setDateCompleted("")
    }
  };
    return (
    <div>
      <h3>{title}</h3>
      <div>{description}</div>
      <div>{dateCreated}</div>
      <div>{dateCompleted}</div>
      <input 
        type = "checkbox"
        value={checked}
        onChange={handleChange}
      />
    </div>
  );
}

//1.) Add mark up to render check box.
//2.) Checkbox input value must be set to complete. 
//3.) Checkbox onChangeEvent should update value of complete.
//4.) Add a usestate hook in this file to manage the checkbox events. 