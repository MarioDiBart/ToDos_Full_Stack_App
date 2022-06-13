import {useState} from "react";
import * as React from 'react';
import {Link} from 'react-navi'
import { isContentEditable } from "@testing-library/user-event/dist/utils";

function ToDo({title,description, dateCreated, dateCompleted, completed,id,updateTodo,deleteToDo,short = false}){


//export default function ToDo({ title, description, dateCreated, dateCompleted, completed, id, updateTodo, deleteToDo}) {
    //const [dateCompleted, setDateCompleted] = useState("");
    const [checked, setChecked] = React.useState(false);
    const updatedToDo = {title, description, dateCreated, id, dateCompleted: Date.now(), completed: !completed }
  
    const handleChange = (event) => {
    setChecked(event.target.checked)
    updateTodo(id, updatedToDo)
  };
  let processedContent = description
    if (short){
      if(description.length > 30){
        processedContent = description.substring(0,30) + '...'
    }
}
  
    return (
      <div>
      <Link href={`/todo/${id}`}><h3>{title}</h3></Link>

      <div>{processedContent}</div>
      <br />
      {short &&
        <div>
            <br />
            <Link href={`/todo/${id}`}>View full post</Link>
        </div>
        }

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

export default React.memo(ToDo)