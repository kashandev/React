// Todotitle.js

import React from 'react' // Import react, usestate from react

// Todo title function 
function Todotitle(props) {
// Return output
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
export default Todotitle // Export Todotitle