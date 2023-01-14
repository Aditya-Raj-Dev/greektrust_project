import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../pages/Cart'
import Products from '../pages/Products'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes