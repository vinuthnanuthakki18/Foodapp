import images from '../data/imagescroll';

function ChainPics() {
  return (
<div className="w-full overflow-hidden relative bg-gray-100">
        <div className="flex animate-scroll m-4 space-x-4 shadow-slate-900">
            {images.map((item, index)=>{
                return(
                    <img src={item.image} key={index} alt="Image 2" className="w-[150px] mr-4 h-[150px] rounded shadow-slate-900" />
                );
            })}
            
        </div>
        <div className="flex animate-reverseScroll m-4 space-x-4 shadow-slate-900">
            {images.map((item, index)=>{
                return(
                    <img src={item.image} key={index} alt="Image 2" className="w-[150px] mr-4 h-[150px] rounded shadow-slate-900" />
                );
            })}
            
        </div>
      
    </div>
  )
}

export default ChainPics
