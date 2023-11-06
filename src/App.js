import React from 'react';
import './App.css';
import Main from './Components/Main/Main'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import FilteredProducts from './Components/FilteredProducts/FilteredProducts'
import SingleProduct from './Components/FilteredProducts/SingleProduct';
import Login from './Components/Login/Login';
function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path='/login' element = {<Login/>}></Route>
          <Route path = "/filteredProducts/:type" element={<FilteredProducts/>}></Route>
          <Route path="/singleProd/:type/:id" element={<SingleProduct />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
