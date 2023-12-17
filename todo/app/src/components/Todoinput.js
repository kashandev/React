import React, { useState } from 'react' // import react, usestate from react

// Todo list input function 
function Todoinput(props) {
  const [inputText,setInputText] = useState('');  // set empty string into usestate
  const handleEnterPress =(e) => {
     if(e.keyCode === 13){
      props.addList(inputText)
      setInputText("")     
     }
  }
 // return output
  return (
    <div className="input-container">
      <input type="text" 
        className="input-box-todo" 
        placeholder="Enter a task" 
        onChange={e=>{setInputText(e.target.value)
        }}
         onKeyDown={handleEnterPress}
        />
        <button className="add-btn" 
        onClick={()=>{
        props.addList(inputText)
      }}>+</button>
    </div>
  )
}
export default Todoinput // export input