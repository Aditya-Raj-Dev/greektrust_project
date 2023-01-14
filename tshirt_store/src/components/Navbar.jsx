import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import { BsCart } from 'react-icons/bs'
const Navbar = () => {
  return (
    <div className='navbar'>
      <h2>TeeRex Store</h2>
      <div className='proddiv'>
        <Link  className="product" to="/" >Products</Link>
       <BsCart fontSize="30px"/>
      </div>
    </div>
  )
}

export default Navbar