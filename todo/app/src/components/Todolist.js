// Todolist.js
import React from 'react'; // Import react, usestate from react

// Todo list function
function Todolist(props) {

  
  // Handle edit click function
  const handleEditClick = () => {
    props.editList(props.index, props.item); // Set props.index,item in edit list
  };

  
   // Handle delete click function
   const handleDeleteClick = () => {
    props.deleteList(props.index, props.item); // Set props.index,item in delete list
  }; 

  // Return output
  return (
    <li className="list-item">
      {props.item}
      <span className="status">
        <label className="status-todo">{props.status}</label>
      </span>
      <span className="icons">
        <i className="fa-solid fa-pencil icon-edit" onClick={handleEditClick}></i>
        <i className="fa-solid fa-trash-can icon-delete" onClick={handleDeleteClick}></i>
      </span>
    </li>
  );
}
export default Todolist; // Return Todolist
