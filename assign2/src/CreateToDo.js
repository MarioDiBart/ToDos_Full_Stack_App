import React, {useState} from "react";

export default function CreateToDo({ user, setToDo, todos }) {
  const [ title, setTitle ] = useState("")
  const [ description, setDescriptiont ] = useState("")
 
  function handleTitle (evt) { setTitle(evt.target.value) }
  function handleDescription (evt) { setDescriptiont(evt.target.value) }
  function handleCreate (evt) {  
    const newToDo = {title, description, dateCreated: Date.now()}
    //console.log(newToDo)
    // const newPostCopy = { ...newPost }
     setToDo([newToDo, ...todos])
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