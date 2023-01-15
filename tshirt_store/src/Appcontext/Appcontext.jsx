import React, {createContext, useEffect, useState} from "react";

export const Appcontext=createContext()

export default  function Appcontextprovider({children}){
    const [data,setData]=useState([])
    const [cart,setCart]=useState([])

    function getdata(){
      fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
      .then((r)=>r.json())
      .then((r)=>setData(r))
    }
    useEffect(()=>{
        getdata()
    },[])
 return (
    <Appcontext.Provider value={{data,cart,setCart}}>
        {children}
    </Appcontext.Provider>
 )
}