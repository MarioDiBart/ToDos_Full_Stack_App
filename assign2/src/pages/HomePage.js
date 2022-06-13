import React, { useEffect, useContext } from 'react'
import StateContext from '../Context'
import { useResource } from 'react-request-hook'
import ToDoList from '../ToDoList'


export default function HomePage() {

  const {state, dispatch} = useContext(StateContext)
      
  const [ todos, getTodos ] = useResource(() => ({
    url: '/todos',
    method: 'get'
  }))

  useEffect(getTodos, [])

  useEffect(() => {
    if (todos && todos.data) {
        dispatch({ type: 'TOGGLE_TODOS', todos: todos.data })
    }
  }, [todos])

  return <ToDoList dispatch = {dispatch} todos={state.todos} />
}