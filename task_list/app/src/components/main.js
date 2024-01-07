
import React, { useState, useEffect, useRef } from 'react'; // Import react, usestate,useeffect,useref from react
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import fontawesome from react fontawesome
import { faPencilAlt, faPlus } from '@fortawesome/free-solid-svg-icons'; // Import fontawesome from free-solid-svg-icons
import $ from 'jquery'; // Import $ from jquery
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';
 

// main function
function Main() {
    const [inputText, setInputText] = useState('');   // Const usestate for input text, set input text
    const [showPlusIcon, setShowPlusIcon] = useState(true);  // Const usestate for show plus icon
    // Const empty array usestate for list, set list todo
    const [list, setList] = useState([
      { index: "0", id: "1", task: "Abc Task", tag: "None", created_date: "07-01-2024", created_by: "Kashan", status: "Todo" }
    ]);
    const tableRef = useRef();
  // Use effect function 
  useEffect(() => {

    // fetch('/your-api-endpoint')
    // .then(response => response.json())
    // .then(data => {

        // Update DataTable with fetched data
        const dataTable = $(tableRef.current).DataTable({
         data: list,
         columns: [
           { data: 'task' },
           { data: 'tag' },
           { data: 'created_date' },
           { data: 'created_by' },
           { data: 'status' },
           // Add more columns as needed
         ],
         paging: true,
         pageLength: 10,
         lengthMenu: [10, 25, 50, 100],
       });
   
       // Cleanup when the component is unmounted
       return () => {
         dataTable.destroy();
       };
     }, [list]); // Reinitialize DataTable when the 'list' state changes
   
    // })
    // .catch(error => console.error('Error fetching data:', error));

    // if (list !== null) { // Check if list !=null
    // }
    // else {
    // }


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
        }
      };

    // Handle button click function 
    const handleButtonClick = () => {
        // if (inputText !== null) { // Check if inputText !=null
        //   updateList(inputText); // Set inputText value in updatelist function
        // } else {
          addList(inputText); // Set input value in addlist function
        // }
        // setInputText(''); // Reset input text
        // setShowPlusIcon(true); // Show plus icon after updating or adding
      };


// Add list function
  let addList = (inputText) => {
    if (inputText) { // Check if input text is exist
        alert(inputText)
    }
  };
// return output
  return (
<div className="container mt-4">
   <div className="row">
      <div className="col-12">
         <div className="row d-flex justify-content-center">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
               <div className="input-group">
                  <input 
                     type="text" 
                     className="form-control task" 
                     id="task" 
                     placeholder="Enter Task Here"
                     value={inputText}
                     onChange={handleInputChange}
                     onKeyDown={handleEnterPress}
                     />
                  <button 
                     className="btn btn-outline btn-success btn-add" 
                     type="button" 
                     id="btnAdd"
                     onClick={handleButtonClick}
                     >
                     <FontAwesomeIcon icon={faPlus} />
                  </button>
               </div>
            </div>
            <div className="row mt-3">
               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="table-responsive">
                     <table className="table table-bordered table-stripe" ref={tableRef}>
                        <thead>
                           <tr>
                              <th>Task Name</th>
                              <th>Tags</th>
                              <th>Created Date</th>
                              <th>Created By</th>
                              <th>Status</th>
                              {/* <th>Actions</th> */}
                              {/* Add more columns as needed */}
                           </tr>
                        </thead>
                        <tbody>
                           {/* {list.map(item => (
                           <tr key={item.index} data-id={item.id}>
                              <td>{item.task}</td>
                              <td>{item.tags}</td>
                              <td>{item.created_date}</td>
                              <td>{item.created_by}</td>
                              <td>{item.status}</td>
                              <td>
                                 <i className="fa-solid fa-pencil icon-edit"></i>
                                 &nbsp;
                                 <i className="fa-solid fa-trash-can icon-delete"></i>
                              </td>
    
                           </tr>
                           ))} */}
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
  );
}
export default Main; // export main
