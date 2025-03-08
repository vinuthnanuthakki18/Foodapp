import NearMeIcon from '@mui/icons-material/NearMe';
import { useNavigate } from 'react-router-dom';

function TopHome() {
    const navigate = useNavigate();
  return (
    <div className="serachloc w-[500px] h-[300px] rounded  text-orange-500 absolute bottom-[70px] left-1/2 transform -translate-x-1/2">
    <div className="search2 flex flex-col items-center p-1">
        <div className="searchheaduptext text-center">
           <span className=' bg-white font-extrabold text-[40px]'> Restaurants, takeaways,<br/> supermarkets and <br/>shops. Delivered.</span>
        </div>
        <div className="search-down bg-white w-[100%] sm:w-[80%] md:w-[100%] rounded mt-6 flex flex-col items-center">
            <p className='p-2 text-center'>Enter a postcode to see what we deliver:</p>
            <div className="search-last flex items-center w-[100%] justify-center">
                <NearMeIcon />
                <input 
                type="text" 
                placeholder='e.g.560708' 
                className='w-[100%] sm:w-[80%] my-2 rounded-full p-2 sm:p-3 border border-black' 
                />
                <button className='p-2 bg-orange-500 text-white rounded-full my-2'>Search</button>
            </div>
            <p className='text-black text-center p-1'>
            <a onClick={()=>navigate("/login")} className='text-orange-500 cursor-pointer'>Log in</a> for your recent addresses.
            </p>
        </div>
    </div>
</div>
  )
}

export default TopHome
