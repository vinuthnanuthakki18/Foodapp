
import Product from './Product'
import { useEffect, useRef, useState } from 'react';
import axios from "axios";
import {BounceLoader} from 'react-spinners';
import Pagenation from './Pagenation';

function Products() {
  const [dataRest,setdataRest] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, settotalPages] = useState(1);
  const itemsPerPage = 12;
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchData = async ()=>{
      setIsLoading(true);
       await axios.get(`http://localhost:5000/api/restaurants?page=${currentPage}&items=${itemsPerPage}`)
        .then((res) => {
          setTimeout(() => {setdataRest(res.data.data); settotalPages(Math.ceil(res.total/itemsPerPage));
            setIsLoading(false);}, 1000); // ✅ Correct
        })
        .catch((err) => console.error("Couldn't fetch the data: ", err));
  }
  fetchData();
}, [currentPage, itemsPerPage]);
  
  const onPrevClick=()=>{
    console.log(currentPage);
    setCurrentPage(currentPage-1);
  };
  const onNextClick=()=>{
    console.log(currentPage);
    setCurrentPage(currentPage+1);
  };
// console.log("data",dataRest);

  return (
<>
    <div className='border-box m-2 h-full w-[98%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
      {isLoading ? <div className="flex justify-center items-center w-[1230px] h-[200px]">
    <BounceLoader
      color="#f97316"
      loading
      size={35}
      speedMultiplier={2}
      className="p-4"
    />
  </div> :dataRest.map((sets)=>(
      <Product restaurants={sets} key={sets.id}/>
    )) 
  }
  </div>
 {isLoading  ||
  <Pagenation totalPages={totalPages} currentPage={currentPage} onPrevClick={onPrevClick} onNextClick={onNextClick}/>}
   </>
  )
}

export default Products
