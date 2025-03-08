import PropTypes from 'prop-types';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarsIcon from '@mui/icons-material/Stars';
import dImage from "./default.jpg";

function Product({restaurants}) {
  const formatter = new Intl.NumberFormat("en", {
    notation: "compact",
    compactDisplay: "short",
  });
  
  // console.log(restaurents);
  return (
    <div  className='text-black bg-gray-100 w-[300px] h-[300px] border-red-700 flex flex-col m-2 p-2 rounded-md shadow-2xl'>
      <div className="img w-[100%] h-[150px] object-fill flex justify-center">
            <a href={restaurants.link} target="_blank"><img src={restaurants?.thumbnail || dImage}  loading="lazy" alt="restaurant-image" className=" w-[300px] h-[150px] rounded-md" /></a>
      </div>
      <div className="bottom flex-row">
        <div className="title ">
          <h1 className='font-[500] p-[2px] text-[20px]'>{restaurants.name.slice(0,30)}</h1>
          </div>
          <h4 className='flex font-[400] p-[2px]'>
            <StarsIcon style={{ fill: '#008000' }}/>{`${restaurants.rating} (${formatter.format(restaurants.reviewsCount)}) • 50 -55 min`}
          {/* {Array(Math.round(restaurants.rating)).fill().map((_,i)=>(<p key={i}>⭐</p>))} */}
          </h4>
          <p className='text-gray-500'>{restaurants.cuisines ? restaurants.cuisines.slice(0, 3).join(" • "): "Cuisene"}</p>
          <p className='text-gray-500'>{restaurants.address.fullAddress.split(" ").slice(0, 3).join(" ")}</p>
          <a href={restaurants.menu} target='_blank'  className='font-[200] p-[2px] text-slate-600'>View Menu</a>
      </div>
    </div>
  )
}
{/* <LocationOnIcon style={{ fill: '#CC7722' }}/> */}

Product.propTypes= {
  restaurants: PropTypes.shape({
    link : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    thumbnail : PropTypes.string.isRequired,
    address : PropTypes.object.isRequired,
    reviewsCount : PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    rating : PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    menu : PropTypes.string.isRequired,
  }).isRequired,
};

export default Product
