import React from "react";
import ToDo from "./ToDo";

export default function ToDoList({ todos = [] }) {
  return (
    <div>
      {todos.map((p, i) => {
          //console.log("ToDo", p);
        // <Post title={p.title} content={p.content} author={p.author} key={"post-" + i} />
       return <ToDo {...p} key={"ToDo-" + i} />
      })}
    </div>
  );
}