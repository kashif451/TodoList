import React, { useContext } from 'react'
import './Todo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faPenToSquare } from '@fortawesome/free-solid-svg-icons'
// import addItemContext from '../context/additemContext'
import dispatchContext from '../context/dispatchContext'

const Todo = ({id,name,editText}) => {
  // editText,selectItem,element
          // console.log( element.completed)
          // }
          // ,dispatch
     const dispatch = useContext(dispatchContext)
    //  console.log(dispatch)
      
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
        <div className="todolist" >
          <h3>
         
         { ` ${name}`}
          </h3>
        </div>
      <button className='btn-up'>up</button>
      <button className='btn-up' style={{backgroundColor:"#00bfff",color:"white"}}>Down</button>
      <button className='btn-up Delete '  onClick={()=> dispatch({ type:'DELETE' ,payload:id })}><FontAwesomeIcon icon={faTrash} /></button>
      <button className='btn-up edit' onClick={()=>editText(id) }><FontAwesomeIcon icon={faPenToSquare} /></button>
    </div>
  )
}

export default Todo