
import React from 'react'; // import react from react
import Title from './components/title'; // import title from components/title
import Main from './components/main'; // import main from components/main

// app function
function App() {
  // return output
  return (
    <div className="container">
    <div className="row">
      <div className="col-12 text-center">
       <Title/>
       <Main/>
      </div>
    </div>
  </div>
  );
}

export default App; // export title
