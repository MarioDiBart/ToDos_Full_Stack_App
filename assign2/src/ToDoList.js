import React from "react";
import ToDo from "./ToDo";

export default function ToDoList({ todos = [], dispatch }) {
  
  const updateTodo = (id, updatedTodo) => {
    console.log("Input Id and todo", id, updatedTodo)
    const updatedTodos = todos.map((todo) => todo.id === id ? updatedTodo: todo)
    console.log("Updated Todos: ", updatedTodos)
    dispatch({type: 'TOGGLE_TODO', updatedTodos: updatedTodos} )
  }

  const deleteToDo = (id) => {
    const updatedToDo = todos.filter((todo) => todo.id !== id)
    console.log(updatedToDo)
    dispatch({ type: 'DELETE_TODO', updatedToDo})
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