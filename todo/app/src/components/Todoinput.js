// Todoinput.js

import React, { useState, useEffect } from 'react'; // Import react, usestate from react
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import fontawesome from react fontawesome
import { faPencilAlt, faPlus } from '@fortawesome/free-solid-svg-icons'; // Import fontawesome from free-solid-svg-icons
 
// Todo input function 
function Todoinput(props) {
  
  const [inputText, setInputText] = useState('');   // Const usestate for input text, set input text
  const [hiddenInputValue, setHiddenInputValue] = useState('');   // Const usestate for hidden input text, set hidden input text
  const [showPlusIcon, setShowPlusIcon] = useState(true);  // Const usestate for show plus icon

  
  // Use effect function 
  useEffect(() => {
    if (props.editingItem.index !== null) { // Check  if props.editingitem.index !=null
      setInputText(props.editingItem.value); // Set selected value in input
      setHiddenInputValue(props.editingItem.value); // Set selected value in hidden input
      setShowPlusIcon(false); // Hide plus icon when editing
    }
    else {
      setShowPlusIcon(true); // Show plus icon when not editing
    }
  }, [props.editingItem]);

  // Handle enter press function 
  const handleEnterPress = (e) => {
    if (e.keyCode === 13) { // Check if key code === 13
      handleButtonClick(); // Execute 
    }
  };
  // Handle input change function 
  const handleInputChange = (e) => {
    setInputText(e.target.value); // Set input value
    if(e.target.value === ''){ // Check input value is empty
      setInputText(''); // Reset input text
      setHiddenInputValue(''); // Reset hidden input value
    }
  };
  // Handle button click function 
  const handleButtonClick = () => {
    if (props.editingItem.index !== null) { // Check if props.editingitem.index !=null
      // Retrieve the value from the hidden input
      props.updateList(props.editingItem.index,inputText,hiddenInputValue); // Set selected,new,hidden value in props.updatelist function
    } else {
      props.addList(inputText); // Set input value in props.addlist function
    }
    setInputText(''); // Reset input text
    setHiddenInputValue(''); // Reset hidden input value
    setShowPlusIcon(true); // Show plus icon after updating or adding
  };


  // Return output
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter a task"
        value={inputText}
        onChange={handleInputChange}
        onKeyDown={handleEnterPress}
      />
      <input
        type="hidden"
        value={hiddenInputValue}
      />
        <button
        className="add-btn"
        onClick={handleButtonClick}
      >
        {showPlusIcon || props.isLocalStorageEmpty ? (
          <FontAwesomeIcon icon={faPlus} />
        ) : (
          <FontAwesomeIcon icon={faPencilAlt} />
        )}
      </button>
    </div>
  );
}
export default Todoinput; // Export Todoinput
