import React from 'react';
import './App.css';
import Main from './Components/Main/Main'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import FilteredProducts from './Components/FilteredProducts/FilteredProducts'
import SingleProduct from './Components/FilteredProducts/SingleProduct';
function App() {
//  const cart = useSelector((state)=> console.log(state.cart.cart));
//   const totalAmount = useSelector((state) => state.cart.totalAmount);
//   const totalPrice = useSelector((state) => state.cart.totalPrice);

//   console.log(totalAmount, "total Amount")

//   console.log(totalPrice, "total Price")

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path = "/filteredProducts/:type" element={<FilteredProducts/>}></Route>
          <Route path="/singleProd/:type/:id" element={<SingleProduct />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
