import React from 'react' // import react, usestate from react

// Todo list item function 
function Todotitle(props) {
// return output
  return (
   <li className="list-title">
    <span className="label-task">
     <label className="label-todo">Task</label>
     </span>
    <span className="label-status">
     <label className="label-todo">Status</label>
     </span>
     <span className="label-action">
     <label className="label-todo">Action</label>
     </span>
   </li>
  )
}
export default Todotitle // export Todotitle