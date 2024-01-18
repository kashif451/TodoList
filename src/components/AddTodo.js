import React, { useContext, useEffect, useState } from "react";
import "./AddTodo.css";
// import addItemContext from "../context/additemContext";
import dispatchContext from "../context/dispatchContext";

const data ={
  item:"",
}

const AddTodo = ({ editItem }) => {
 
  //  dispatch
 const  dispatch =  useContext(dispatchContext)

  const [items, setItems] = useState(data);
  // console.log(items)
  let clickHandler = (e) => {
    e.preventDefault();
    
    if(editItem){
      dispatch({ type:'UPDATE' ,payload:items });

    }else{

      dispatch({ type:'ADD' ,payload:items })
    }
  
   
   

    setItems(data);

  };
  let inputHandler = (e) => {
    setItems({...items,
     [e.target.name]: e.target.value});
    }

  useEffect(
    ()=>{
      if(editItem)
      {
        setItems(editItem)
      }
    },[editItem])

  return (
    <div>
      <form
        style={{ marginBottom: "60px", marginTop: "60px", textAlign: "center"}}
      >
        <input
          type="text"
          name="item"
          onChange={inputHandler}
          className="input-Style"
          value={items.item}
          placeholder="✍ Add Items"
        />
        <button className="primary-btn" onClick={clickHandler}>
          {editItem ? "Edit" : "Add"} Item
        </button>
      </form>
    </div>
  );
};


export default AddTodo;
