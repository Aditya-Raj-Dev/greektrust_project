import React, { useContext, useEffect, useState } from "react";
import { Appcontext } from "../Appcontext/Appcontext";
import "./product.css";

const Products = () => {
  const { data } = useContext(Appcontext);
  const [newdata, setNewData] = useState([]);

  let colorarr = [];
  let colordata=[]
  let genderarr = [];
  let genderdata =[]
  let typearr=[]
  let typedata=[]
  function handlefilter(e) {
    if(["Black", "Grey", "Green", "Red", "Blue"].includes(e.target.value)) {
      if(colorarr.includes(e.target.value)){
        let k = colorarr.indexOf(e.target.value);
        colorarr.splice(k, 1);
       
      } else {
        colorarr.push(e.target.value);
    
      }
      colordata= data.filter((item) => {
        return colorarr.includes(item.color);
      });
      // // console.log("color",colordata)

       console.log("arr",colorarr)
    } else if (["Men", "Women"].includes(e.target.value)) {
        if(genderarr.includes(e.target.value)){
          let k = genderarr.indexOf(e.target.value);
          genderarr.splice(k, 1);
        }
        else{
          genderarr.push(e.target.value);
        }
        genderdata=data.filter((item)=>{
          return genderarr.includes(item.gender)
        })
        console.log(genderdata,"hkjjg")
    }
    else if (["Polo", "Hoodie","Basic"].includes(e.target.value)) {
      if(typearr.includes(e.target.value)){
        let k = typearr.indexOf(e.target.value);
        typearr.splice(k, 1);
      }
      else{
        typearr.push(e.target.value);
      }
      typedata=data.filter((item)=>{
        return typearr.includes(item.type)
      })
      console.log(typedata,"hkjjg")
  }
  else{
     console.log('sadfl') 
   }
  }
  //  let finalarr=[...typedata,...genderdata,...colordata]
  //    setNewData(finalarr)

  useEffect(() => {
    setNewData(data);
    console.log(newdata);
  }, [data]);
  return (
    <div className="products">
      <div className="filterbox">
        <div>
          <h2>Color</h2>
          <div>
            <input type="checkbox" onChange={handlefilter} value="Black" />
            <label>Black</label>
          </div>
          <div>
            <input type="checkbox" onChange={handlefilter} value="Red" />
            <label>Red</label>
          </div>
          <div>
            <input type="checkbox" onChange={handlefilter} value="Blue" />
            <label>Blue</label>
          </div>
          <div>
            <input type="checkbox" onChange={handlefilter} value="Grey" />
            <label>Grey</label>
          </div>
          <div>
            <input type="checkbox" onChange={handlefilter} value="Green" />
            <label>Green</label>
          </div>
        </div>
        <div>
          <h2>Gender</h2>
          <div>
            <input type="checkbox" onChange={handlefilter} value="Men" />
            <label>Men</label>
          </div>
          <div>
            <input type="checkbox" onChange={handlefilter} value="Women" />
            <label>Women</label>
          </div>
        </div>
        <div>
          <h2>Price</h2>
          <div>
            <input type="checkbox" onChange={handlefilter} value="250" />
            <label>0-Rs250</label>
          </div>
          <div>
            <input type="checkbox" onChange={handlefilter} value="251" />
            <label>Rs251-450</label>
          </div>
          <div>
            <input type="checkbox" onChange={handlefilter} value="450" />
            <label>Rs451</label>
          </div>
        </div>
        <div>
          <h2>Type</h2>
          <div>
            <input type="checkbox" onChange={handlefilter} value="Polo" />
            <label>Polo</label>
          </div>
          <div>
            <input type="checkbox" onChange={handlefilter} value="Hoodie" />
            <label>Hoodie</label>
          </div>
          <div>
            <input type="checkbox" onChange={handlefilter} value="Basic" />
            <label>Basic</label>
          </div>
        </div>
      </div>
      <div className="prodcontainer">
        {newdata &&
          newdata.map((item) => (
            <div key={item.id} className="prodbox">
              <h2>{item.name}</h2>
              <img src={item.imageURL} alt="" height="150px" />
              <div className="pricediv">
                <h3>Rs. {item.price}</h3>
                <button className="button">Add to cart</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
