import Button from'../Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Pagenation({totalPages, currentPage, onNextClick, onPrevClick}) {
  return (
    <div className="border-box flex justify-evenly w-full max-w-[1220px] p-4">
      <Button disabled ={currentPage==1} onClick={onPrevClick} className={`${
          currentPage === 1 && "bg-gray-400 hover:bg-gray-400 cursor-not-allowed"
        }`}><ArrowBackIosIcon/>Previous</Button>
      <Button disabled= {currentPage==totalPages} onClick={onNextClick} className={`${
          currentPage == totalPages && "bg-gray-400 hover:bg-gray-400 cursor-not-allowed"
        }`}>Next<ArrowForwardIosIcon/></Button>
    </div>
  )
}

export default Pagenation
