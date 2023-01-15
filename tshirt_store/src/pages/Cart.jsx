 import React, { useContext, useEffect, useState } from 'react'
import { Appcontext } from '../Appcontext/Appcontext'
 import "./cart.css"
 
 const Cart = () => {
  const {cart}=useContext(Appcontext)
  const [newcart,setNewcart]=useState([])

  
  function handlequantity(qty,item){
  if(item.qty===1 &&  qty===-1 ){
        handledelete(item)
    }
       else if(item.qty<item.quantity ||(item.qty===item.quantity && qty===-1)  ){
          item.qty=item.qty+qty;
          let k= [...cart]
         setNewcart(k) 
        }
         else if(item.qty===item.quantity && qty===1){
           alert(`we Have only ${item.quantity} Peices Available in the stock`)
         }
  }

 function handledelete(i){
   cart.splice(i,1);
   let newCart=[...cart]
   setNewcart(newCart);
 }
console.log(cart)
useEffect(()=>{
 setNewcart(cart)
},[])
   return (
     <div>
        {
          cart && cart.map((item,i)=>(
            <div key={item.id} className="cartbox">
              <img src={item.imageURL} alt="" height="100px"/>
              <div className='price'>
                <h4>{item.name}</h4>
                <h5>Rs. {item.price}</h5>
              </div>
                 <div className='qty'>
                  <button onClick={()=>handlequantity(-1,item)} >-</button>
                  <h3>Qty.{item.qty}</h3>
                  <button  onClick={()=>handlequantity(1,item)}>+</button>
                 </div>
              <button style={{backgroundColor:"white" ,color:"black"}} onClick={()=>handledelete(i)}>delete</button>
            </div>
          ))
        }
     </div>
   )
 }
 
 export default Cart