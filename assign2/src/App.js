import './App.css';
import React, { useState } from "react";
import UserBar from './UserBar'
import ToDoList from "./ToDoList";
import CreateToDo from "./CreateToDo";

function App() {
  const [user, setUser] = useState("");
  // const posts = [{title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}]
  //const posts = [{title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}]
  
  const [todos, setToDos] = useState([])
  return (
    <div>
      <UserBar user={user} setUser={setUser} />
      {user && <CreateToDo user={user} todos={todos} setToDo={setToDos} />}
      <ToDoList todos={todos} />
    </div>
  );
}

export default App;
