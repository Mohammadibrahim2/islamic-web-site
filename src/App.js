import React from 'react';
import "./App.css"

import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes/Route';



function App() {
  return (
    <div  className='App bg-white'>
      <RouterProvider router={router}/>
      
    
     
    </div>
  );
}

export default App;
