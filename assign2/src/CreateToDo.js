import React, {useState, useContext, useEffect} from "react";
import { useResource } from "react-request-hook";
import { useNavigation } from 'react-navi'


import StateContext from "./Context";


export default function CreateToDo() {
  const [ title, setTitle ] = useState("")
  const [ description, setDescriptiont ] = useState("")
 
  const navigation = useNavigation()

  const {state, dispatch} = useContext(StateContext)
  const{user} = state

  function handleTitle (evt) { setTitle(evt.target.value) }
  function handleDescription (evt) { setDescriptiont(evt.target.value) }
  
  const [todo, CreateToDoNet] = useResource(({title, description, dateCreated, dateCompleted, id}) => ({
    url: '/todos',
    method: 'post',
    data: {title, description, dateCreated, dateCompleted, id}
   
  }))


  
  useEffect(() => {
    if(todo && todo.data && todo.isLoading === false){
      navigation.navigate(`/`)
    }
  }, [todo])
  
  function handleCreate (evt) {  
    //const newToDo = {title, description, dateCreated: Date.now()}
    //console.log(newToDo)
    // const newPostCopy = { ...newPost }
     CreateToDoNet ({title, description, dateCreated: Date.now(), dateCompleted: undefined, completed: false, id: Math.floor(Math.random() * 100000) })
     dispatch({type: 'CREATE_TODO', title, description, dateCreated: Date.now(), dateCompleted: undefined, completed: false, id: Math.floor(Math.random() * 100000)})
  }

  return (
    <>
    <h2>Create a New To Do List</h2>
    <form onSubmit={(e) => { e.preventDefault(); handleCreate(e) }}>
      <div>
        Author: <b>{user}</b>
      </div>
      <div>
        <label htmlFor="create-title">Title:</label>
        <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
      </div>
      <textarea value={description} onChange={handleDescription} />
      <input type="submit" value="Create" />
    </form>
    </>

  );
}