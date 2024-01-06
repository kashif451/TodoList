import React from "react";
import Todo from "./Todo";
const TodoList = ({ element ,deleteItem,editText}) => {

  
  return (
 
    <div>
       
      {element.map((d) => (
       
        <Todo 
        key={d.id}
        name={d.item}
       id={d.id}
        deleteItem={deleteItem}
        editText={editText}
        /> 
      ))}
    </div>
  );
};

export default TodoList;
