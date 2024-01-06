import React from 'react'
import './Todo.css'
const Todo = ({id,name,deleteItem,editText}) => {
  return (
    <div style={{display:"flex"}}>
        <div className="todolist">
          <h3>
           {name}
          </h3>
        </div>
      <button className='btn-up'>up</button>
      <button className='btn-up' style={{backgroundColor:"#00bfff",color:"white"}}>Down</button>
      <button className='btn-up' style={{backgroundColor:"maroon",color:"white"}} onClick={()=>deleteItem(id)}>Delete</button>
      <button className='btn-up' onClick={()=>editText(id)}>Edit</button>
    </div>
  )
}

export default Todo