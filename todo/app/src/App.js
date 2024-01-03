// App.js

import React, { useState, useEffect } from 'react'; // Import react, usestate from react
import "./App.css"; // Import app.css
import Todoinput from './components/Todoinput'; // Import components todoinput from components
import Todotitle from './components/Todotitle'; // Import components todotitle from components
import Todolist from './components/Todolist'; // Import components todolist from components

// App function
function App(props) {
  
  // Const usestate for list todo, set list todo
  const [listTodo, setListTodo] = useState(() => {
    const storedTodoList = localStorage.getItem('todoList');
    return storedTodoList ? JSON.parse(storedTodoList) : [];
  });
  const [statusTodo] = useState('Todo');

  
    // Use effect function
    useEffect(() => {
      const storedTodoList = localStorage.getItem('todoList'); // Const get todoList from local storage
      if (storedTodoList) { // Check if storedTodoList in local storage
        setListTodo(JSON.parse(storedTodoList)); // Set parse storedTodoList
      }
    }, []);


  // Const usestate for edit item, set editing list
  const [editingItem, setEditingList] = useState({
    index: null,
    value: '',
  });

  const [isLocalStorageEmpty, setIsLocalStorageEmpty] = useState(false);   // Const usestate false for setIsLocalStorageEmpty 

  // Check string in array function
  const isStringInArray = (string, array) => {
    return array.includes(string);
  };

    // Add list function
  let addList = (inputText) => {
    if (inputText) { // Check if input text is exist
      const updatedList = [...listTodo, inputText]; // Const list todo, input text
      const storedTodoList = localStorage.getItem('todoList'); // Const get todolist, input text
      if (storedTodoList === null || storedTodoList.trim() === "") {
        setListTodo(updatedList); // Set updated list
        localStorage.setItem('todoList', JSON.stringify(updatedList)); // Set updated list in local storage 
      }
      else{
      const parsedTodoList = JSON.parse(storedTodoList);
      if (!isStringInArray(inputText, parsedTodoList)) { // If checkText doesn't exist and newText is not in the array, append newText
        setListTodo(updatedList); // Set updated list
        localStorage.setItem('todoList', JSON.stringify(updatedList)); // Set updated list in local storage 
      }
     }
    }
  };

  // Update list function
  let updateList = (index, newText, checkText) => {
    if (checkText || newText) {
    const storedTodoList = localStorage.getItem('todoList');
    const parsedTodoList = JSON.parse(storedTodoList);
  
    // Check if checkText exists in the array
    const itemIndex = parsedTodoList.indexOf(checkText);
    if (itemIndex !== -1) {
      // Delete the item at the specified index if checkText matches
      parsedTodoList.splice(itemIndex, 1);
  
      // Insert the newText at the specified index
      parsedTodoList.splice(index, 0, newText);
    } else if (!isStringInArray(newText, parsedTodoList)) { // If checkText doesn't exist and newText is not in the array, append newText
      parsedTodoList.push(newText);
    }
    // Update local storage and state
    localStorage.setItem('todoList', JSON.stringify(parsedTodoList)); // Set parsed todo list in local storage  
    setListTodo(parsedTodoList); // Set parsed todo list
  }
  };
  
  // Delete list function
  const deleteList = (key, item) => {
    const storedTodoList = localStorage.getItem('todoList'); // Const get todoList from local storage
    if (storedTodoList) { // Check if storedTodoList in local storage
      const parsedTodoList = JSON.parse(storedTodoList); // Const parse todoList
      const itemIndex = parsedTodoList.indexOf(item);
      if (itemIndex !== -1) {
        parsedTodoList.splice(itemIndex, 1);
        localStorage.setItem('todoList', JSON.stringify(parsedTodoList));
        setListTodo(parsedTodoList); // Set parsed todo list
         // Check if local storage becomes empty
        setIsLocalStorageEmpty(parsedTodoList.length === 0)
         // Call the callback function when deleting a list 
      } else {
        console.log("Item not found in localStorage");
      }
    }
  };

  // Edit list function
  const editList = (index, value) => {
    setEditingList({ index, value }); // Set index,value
  };


  // Return output
  return (
    <div className="main-container">
      <div className="center-container">
        <Todoinput addList={addList} updateList={updateList} editingItem={editingItem} setEditingList={setEditingList} isLocalStorageEmpty={isLocalStorageEmpty} />
        <h1 className="app-heading">{statusTodo}</h1>
        <hr />
        <Todotitle />
        {listTodo.map((listItem, i) => (
          <Todolist key={i} index={i} item={listItem} status={statusTodo} deleteList={deleteList} editList={editList} />
        ))}
      </div>
    </div>
  );
}

export default App; // Export App
