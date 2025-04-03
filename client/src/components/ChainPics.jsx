import images from "../data/imagescroll";

function ChainPics() {
  return (
    <div className="w-full overflow-hidden relative bg-gray-100">
      <div className="flex animate-scroll m-2 sm:m-4 space-x-2 sm:space-x-4 shadow-slate-900">
        {images.map((item, index) => {
          return (
            <img
              src={item.image}
              key={index}
              alt={`Image ${index + 1}`}
              className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] rounded shadow-slate-900"
            />
          );
        })}
      </div>
      <div className="flex animate-reverseScroll m-2 sm:m-4 space-x-2 sm:space-x-4 shadow-slate-900">
        {images.map((item, index) => {
          return (
            <img
              src={item.image}
              key={index}
              alt={`Image ${index + 1}`}
              className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] rounded shadow-slate-900"
            />
          );
        })}
      </div>
    </div>
  );
}

export default ChainPics;
