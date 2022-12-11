import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Components
import AddProduct from './components/AddProduct';
import ShowProduct from './components/ShowProduct';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route path='/' element={<ShowProduct/>}/>
          <Route path='add' element={<AddProduct/>}/>
          <Route path='update/:id' element={<UpdateProduct/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
