function PlaystoreBanner() {
  return (
    <div className="maps flex justify-center items-center w-full overflow-hidden">
      <div className="aboutmaps flex flex-col md:flex-row w-full max-w-[90%] h-auto min-h-[300px] justify-center items-center bg-white rounded m-2 sm:m-4 p-2 sm:p-4 shadow-2xl overflow-hidden">
        <div className="mapleft w-full md:w-[50%] h-auto p-2 sm:p-4">
          <h3 className="font-bold text-2xl sm:text-3xl md:text-[50px] p-2 sm:p-4 leading-tight">
            Track orders to your door
          </h3>
          <p className="p-2 sm:p-4 text-sm sm:text-base md:text-[20px]">
            Get your favourite food delivered in a flash. You’ll see when your
            rider’s picked up your order, and be able to follow them along the
            way. You’ll get a notification when they’re nearby, too.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 p-2 sm:p-4">
            <button className="bg-gray-950 text-white p-2 sm:p-3 md:p-4 rounded w-full sm:w-auto">
              Google Play
            </button>
            <button className="bg-gray-950 text-white p-2 sm:p-3 md:p-4 rounded w-full sm:w-auto">
              Apple Store
            </button>
          </div>
        </div>
        <div className="mapright w-full md:w-[50%] h-auto">
          <img
            src="mapimage.png"
            alt="Map showing delivery tracking"
            className="w-full h-auto max-h-[300px] md:h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default PlaystoreBanner;
