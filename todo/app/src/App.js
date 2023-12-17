import React, { useState, useEffect } from 'react'; // import react, usestate from react
import "./App.css";
import Todoinput from './components/Todoinput'; // import todo input
import Todotitle from './components/Todotitle';  // import todo title
import Todolist from './components/Todolist'; // import todo list

// app function
function App() {
  const [listTodo, setListTodo] = useState(() => {
    // Get the todo list from localStorage on component mount
    const storedTodoList = localStorage.getItem('todoList');
    return storedTodoList ? JSON.parse(storedTodoList) : [];
  });
  const [statusTodo] = useState('Todo'); // set todo status

    // Function to check if the string exists in the array
    const isStringInArray = (string, array) => {
      return array.includes(string);
    };


  // add list function
  let addList = (inputText) => {
    // Check if the input value is not empty
    if (inputText) {
      const updatedList = [...listTodo, inputText];
      const storedTodoList = localStorage.getItem('todoList');
      if(!isStringInArray(inputText, storedTodoList)){
        setListTodo(updatedList);
        // Update localStorage with the new todo list
        localStorage.setItem('todoList', JSON.stringify(updatedList));
      }
    }
  };

    // delete list item function
  const deleteListItem = (key, item) => {
    const storedTodoList = localStorage.getItem('todoList');
  
    if (storedTodoList) {
      const parsedTodoList = JSON.parse(storedTodoList);
  
      // Check if the item exists in the storedTodoList
      const itemIndex = parsedTodoList.indexOf(item);
  
      if (itemIndex !== -1) {
        // Remove the item from the storedTodoList
        parsedTodoList.splice(itemIndex, 1);
  
        // Update localStorage with the modified todo list
        localStorage.setItem('todoList', JSON.stringify(parsedTodoList));
  
        // Update the state with the modified todo list
        setListTodo(parsedTodoList);
      } else {
        console.log("Item not found in localStorage");
      }
    }
  };
  
  // useEffect function
  useEffect(() => {
    // Get the todo list from localStorage
    const storedTodoList = localStorage.getItem('todoList');

    if (storedTodoList) {
      setListTodo(JSON.parse(storedTodoList));
    }
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  // return output
  return (
    <div className="main-container">
      <div className="center-container">
        <Todoinput addList={addList} />
        <h1 className="app-heading">{statusTodo}</h1>
        <hr />
        <Todotitle/>
        {listTodo.map((listItem, i) => (
          <Todolist key={i}  index={i} item={listItem} status={statusTodo} deleteItem={deleteListItem} />
        ))}
      </div>
    </div>
  );
}

export default App;
