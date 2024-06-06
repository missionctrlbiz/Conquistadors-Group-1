import { Routes, Route } from 'react-router-dom';

import './App.css'
import CartPage from './components/CartPage'
import ProductList from './components/ProductList'

function App() {

  return (
    <>
        <Routes>
        <Route index element={<ProductList />} />
        <Route path='/productlist' element={<ProductList />} />
        <Route path='/cartpage' element={<CartPage />} />
        </Routes>
    </>
  )
}

export default App
