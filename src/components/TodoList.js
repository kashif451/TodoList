import React, { useContext } from "react";
import Todo from "./Todo";
import addItemContext from "../context/additemContext";
const TodoList = ({ editText}) => {

  // element

  const element =  useContext(addItemContext)
  return (
 
    <div>
       
      {element.map((d) => (
       
        <Todo 
        key={d.id}
        name={d.item}
         id={d.id}
        //  dispatch={dispatch}
        editText={editText}
       
        element={element}
      
     
        /> 
      ))}
    </div>
  );
};

export default TodoList;
