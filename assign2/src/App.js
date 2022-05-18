import './App.css';
import React, { useState, useReducer } from "react";
import UserBar from './UserBar'
import ToDoList from "./ToDoList";
import CreateToDo from "./CreateToDo";

import appReducer from "./Reducers";

function App() {
  //const [user, setUser] = useState("");
  // const posts = [{title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}]
  //const posts = [{title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}]
  
  //const [todos, setToDos] = useState([])
  
  const [state , dispatch] = useReducer(appReducer, {user:'', todos: []})
  
  
  return (
    <div>
      <UserBar user={state.user} dispatch = {dispatch} />
      {state.user && <CreateToDo user={state.user} dispatch={dispatch} todos={state.todos}  />}
      <ToDoList todos={state.todos} dispatch={dispatch}/> 
    </div>
  );
}

export default App;
