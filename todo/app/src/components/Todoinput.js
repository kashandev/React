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

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };


 // return output
  return (
    <div className="input-container">
      <input type="text" 
        className="input-box-todo" 
        placeholder="Enter a task"
        value={inputText} 
        onChange={handleInputChange}
        onKeyDown={handleEnterPress}
        />
        <button className="add-btn" 
        onClick={()=>{
        props.addList(inputText)
        setInputText(''); // Reset the input text to an empty string
      }}>+</button>
    </div>
  )
}
export default Todoinput // export input