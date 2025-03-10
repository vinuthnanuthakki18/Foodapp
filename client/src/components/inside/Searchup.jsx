import { useState } from "react"
import { debounce } from "lodash";
import axios from "axios";
import {updateData, updateisSearch} from '../../redux/restSlice';
import { useSelector,useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';

function Searchup() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const isSearch = useSelector((state)=>state.rest.isSearch);

  const fetchResults = debounce( async(searchquery)=>{
    if(!searchquery)  return;
    try{
      const response = await axios.post(`http://localhost:5000/api/restaurants/search?query=${searchquery}`);
      console.log(response);
      dispatch(updateData(response.data.data));
      // console.log("data",data);
    }catch(error){
      console.error(error);
    }
  },2000);

  const handleChange= (e)=>{
    const value = e.target.value;
    if(value)  dispatch(updateisSearch(true));
    setQuery(value);
    console.log(query);
    console.log("ha",isSearch);
    fetchResults(query);
  }

  // const handleSubmit=()=>{
  //   console.log(query);
  //   fetchResults(query);
  // }

  return (
    <div className="w-[100%] h-[100px] flex-row justify-center text-center mt-20 items-center">
      <h1 className="text-[30px] font-[500]  text-orange-500">Search your favourite Restaurants</h1>
      <div className="border border-gray-700 w-[40%] flex justify-between items-center rounded mx-auto">
        <input type="text" value={query} onChange={handleChange} placeholder="search for restaurants and food" className="focus:outline-none w-[90%] h-[40%] rounded-xl text-[20px] p-2 text-gray-600"/>
        {/* <button onClick={handleSubmit}><SearchIcon className=""/></button> */}
      </div>
   </div>
  )
}

export default Searchup
