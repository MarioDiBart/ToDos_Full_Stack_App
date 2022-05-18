import React from "react";
import ToDo from "./ToDo";

export default function ToDoList({ todos = [], dispatch }) {
  
  const updateTodo = (id, updatedTodo) => {
    const updatedTodos = todos.map((todo) => todo.id === id ? updatedTodo: todo)

    dispatch({type: 'TOGGLE_TODO', updatedTodos} )
  }

  const deleteToDo = (id) => {
    const updatedToDos = todos.filter((todo) => todo.id !== id)
    dispatch({ type: 'DELETE_TODO', updatedToDos})
   }

 
  return (
    <div>
      {todos.map((p, i) => {
          //console.log("ToDo", p);
         //<ToDo title={p.title} content={p.content} key={"ToDo-" + i} updateTodo ={updateTodo} />
      return <ToDo {...p} key={p.id} updateTodo = {updateTodo} deleteToDo = {deleteToDo} />
      })}
    </div>
  );
}