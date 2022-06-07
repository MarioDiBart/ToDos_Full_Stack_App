import './App.css';
import React, { useState, useReducer } from "react";
import UserBar from './UserBar'
import ToDoList from "./ToDoList";
import CreateToDo from "./CreateToDo";
import StateContext from './Context';

import HeaderBar from "./pages/HeaderBar";
import HomePage from "./pages/HomePage";

import { Router, View } from 'react-navi'
import { mount, route } from 'navi'
import ToDoPage from "./pages/ToDoPage";

import appReducer from "./Reducers";


function App() {
  //const [user, setUser] = useState("");
  // const posts = [{title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}]
  //const posts = [{title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}]
  
  //const [todos, setToDos] = useState([])
  const routes = mount({
    '/': route({ view: <HomePage /> }),
    '/todo/create':route({ view: <CreateToDo /> }),
    '/todo/:id': route(req => {
        return { view: <ToDoPage id={req.params.id} /> }
    }),
})
  
  
  const [state , dispatch] = useReducer(appReducer, {user:'', todos: []})
  
  
  return (
    <><div>
      <UserBar user={state.user} dispatch={dispatch} />
      {state.user && <CreateToDo user={state.user} dispatch={dispatch} todos={state.todos} />}
      <ToDoList todos={state.todos} dispatch={dispatch} />
    </div><Router routes={routes}>
        <StateContext.Provider value={{ state, dispatch }}>
          <HeaderBar />
          <View />
        </StateContext.Provider>
      </Router></>
    
  );

  }
export default App;
