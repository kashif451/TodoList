import React, { useEffect, useState } from "react";
import "./AddTodo.css";
const AddTodo = ({ collectData, updateItem, editItem }) => {
  
  const [items, setItems] = useState('');
  let clickHandler = (e) => {
    e.preventDefault();

    let data ={
      item:items,
    }
   
    collectData(data)
    setItems("");
  };
  let inputHandler = (e) => {
    setItems(e.target.value);
  };
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
        style={{ marginBottom: "60px", marginTop: "60px", textAlign: "center" }}
      >
        <input
          type="text"
          value={items}
          name="items"
          onChange={inputHandler}
          className="input-Style"
        />
        <button className="primary-btn" onClick={clickHandler}>
          {editItem ? "Edit" : "Add"} Item
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
