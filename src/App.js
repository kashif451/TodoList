import React, { useReducer, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import addItemContext from "../src/context/additemContext"
import dispatchContext from "./context/dispatchContext"
let Element = [
  {
    id: 1,
    item: "read books",
    completed: false,
  },
  {
    id: 2,
    item: "eat Food",
    completed: false,
  },
];
const App = () => {
  const [editItem, setEditItem] = useState(null);
  const [total, setTotal] = useState(2);

  const reducer = (additem, action) => {
    switch (action.type) {
      case "ADD":
        return [...additem, { ...action.payload, id: additem.length + 1 }];

      case "DELETE":
        return additem.filter((item) => item.id !== action.payload);
      case "UPDATE":
        const index = additem.findIndex((v) => v.id === action.payload.id);
        const newItems = [...additem];
        newItems.splice(index, 1, action.payload);
        setEditItem(null);
        return newItems;
      default:
        return additem;
    }
  };
  const [additem, dispatch] = useReducer(reducer, Element);

  let editText = (id) => {
    console.log(id)
    setEditItem(additem.find((item) => item.id === id));
  };

  return (
    <addItemContext.Provider value={additem}>
      <dispatchContext.Provider value={dispatch}>
    <div className="heading">
      <div>
        <h1>TODO LIST</h1>
      </div>

      {/* dispatch={dispatch} */}

      <AddTodo  editItem={editItem} />
      <hr style={{ border: "1px solid black", marginBottom: "60px" }} />
      <h5 style={{ textAlign: "center", marginBottom: "25px" }}>
        COMPLETED ITEMS : {total}
      </h5>
      {/* element={additem} */}
      <TodoList  editText={editText}   />
    </div>
    </dispatchContext.Provider>
    </addItemContext.Provider>
  );
};

export default App;
