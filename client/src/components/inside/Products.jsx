import React from 'react'
import Product from './Product'
import { useEffect, useState } from 'react';
import axios from "axios";

function Products() {
  const [dataRest,setdataRest] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:5000/api/restaurants")
    .then((res)=>setdataRest(res.data.data))
    .catch((err)=>console.error("Couldn't fetch the data : ",err));
  },[dataRest]);


  return (
    <div className='border-box m-2 h-full w-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
      {dataRest.map((sets)=>(
      <Product restaurants={sets} key={sets.id}/>
    ))}
    </div>
  )
}

export default Products
