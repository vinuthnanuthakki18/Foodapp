import Button from'../Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSelector, useDispatch } from 'react-redux';
import {updateData} from '../../redux/restSlice';

function Pagenation({totalPages, currentPage, onNextClick, onPrevClick}) {
    const isSearch = useSelector((state)=>state.rest.isSearch);
    console.log("yes",isSearch);
  return (
    <div className="border-box flex justify-evenly w-full max-w-[1220px] p-4">
      <Button disabled ={currentPage==1} onClick={onPrevClick} className={`${
          currentPage === 1 && "bg-gray-400 hover:bg-gray-400 cursor-not-allowed"
        }`}><ArrowBackIosIcon/>Previous</Button>
      <Button disabled= {isSearch || currentPage == totalPages} onClick={onNextClick} className={`${
          (isSearch || currentPage == totalPages) && "bg-gray-400 hover:bg-gray-400 cursor-not-allowed"
        }`}>Next<ArrowForwardIosIcon/></Button>
    </div>
  )
}

export default Pagenation
