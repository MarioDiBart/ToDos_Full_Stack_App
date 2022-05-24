import {useState} from "react";
import * as React from 'react';

export default function ToDo({ title, description, dateCreated, dateCompleted, completed, id, updateTodo, deleteToDo}) {
    //const [dateCompleted, setDateCompleted] = useState("");
    const [checked, setChecked] = React.useState(false);
    const updatedToDo = {title, description, dateCreated, id, dateCompleted: Date.now(), completed: !completed }
  
    const handleChange = (event) => {
    setChecked(event.target.checked)
    updateTodo(id, updatedToDo)
  };
  
    return (
    <div>
      <h3>{title}</h3>
      <div>{description}</div>
      <div>Date Created: { new Date(dateCreated).toDateString()}</div>
      <div>Date Completed{ completed ? new Date(dateCompleted).toDateString(): 'Not Yet Completed'}</div>
      <input 
        type = "checkbox"
        value={checked}
        onChange={handleChange}
      />
      <input 
        type = "button"
        value = "Delete Todo"
        onClick = {() => deleteToDo(id)} />
    </div>
  );
}

//1.) Add mark up to render check box.
//2.) Checkbox input value must be set to complete. 
//3.) Checkbox onChangeEvent should update value of complete.
//4.) Add a usestate hook in this file to manage the checkbox events. 