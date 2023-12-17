import React from 'react' // import react, usestate from react

// Todo list item function 
function Todolist(props) {
    // return output
  return (
   <li className="list-item">
    {props.item}

    <span className="status">
     <label className="status-todo">{props.status}</label>
     </span>
     <span className="icons">
     <i className ="fa-solid fa-trash-can icon-delete" onClick={e=>{
            props.deleteItem(props.index,props.item);
     }}></i>
     </span>
   </li>
  )
}
export default Todolist // export todolist