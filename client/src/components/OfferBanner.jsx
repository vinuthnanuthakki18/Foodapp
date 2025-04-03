function OfferBanner() {
  return (
    <div className="foodbanner w-full h-auto min-h-[300px] bg-orange-400 flex flex-col items-center justify-between overflow-hidden">
      <div className="bannertop w-full max-w-[90%] sm:max-w-[80%] md:max-w-[60%] m-4 sm:m-8 md:m-14 text-center md:text-left">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-[60px] text-white mx-4 sm:mx-8 leading-tight">
          Up to 25% off meal deals
        </h1>
        <h6 className="text-white mx-4 sm:mx-8 text-base sm:text-xl md:text-[30px] mt-2 sm:mt-4">
          Need a midweek pick-me-up, a break from cooking for the family or just
          fancy your favourite restaurant?
        </h6>
        <p className="text-white mx-4 sm:mx-8 text-sm sm:text-base mt-2 sm:mt-4">
          Subject to availability. Participating restaurants only.
          Service/delivery fees apply. T&Cs
        </p>
      </div>
      <img
        src="foodbanner.png"
        alt="Food banner promotion"
        className="w-full h-auto max-h-[200px] sm:max-h-[250px] md:max-h-[300px] object-cover"
      />
    </div>
  );
}

export default OfferBanner;
