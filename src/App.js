import React, { useState } from "react";
import './App.css'
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

let Element = [
  {
    id: 1,
    item: "read books",
  },
  {
    id: 2,
    item: "eat Food",
  },
];
const App = () => {

  const [additem, setAddItem] = useState(Element);
  const [editItem,setEditItem]=useState("")

  let collectData = (b) => {
   console.log(b)
    setAddItem([...additem, { ...b, id: additem.length + 1 }]);

  };

  let deleteItem = (id) => {
    setAddItem(additem.filter((item)=>item.id!==id))
  }

  let editText= (id) =>{
    
    setEditItem(additem.find((item)=>item.id===id))
  
   
  }

  let updateItem =(item)=>{
    // console.log(item)
  //  const index = additem.findIndex((v)=>v.id===item.id)
  //  const newItems =[...additem]
  //  newItems.splice(index,1,item)
  //  setAddItem(newItems)
  }

  return (
    <div className="heading">
   <div>

   <h1 >TODO LIST</h1>
   </div>
       
  
       
      <AddTodo collectData={collectData} editItem={ editItem } updateItem={updateItem} />
      <TodoList deleteItem={deleteItem} editText={editText} element={additem} />
    </div>
  );
};

export default App;
