function Offers() {
  return (
    <div className="ride-details w-full h-auto min-h-[300px] bg-gray-100 flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-4 md:gap-6 p-4 md:p-6">
      <div className="ride-1 p-2 w-full max-w-[300px] md:w-[300px]">
        <img
          src="rider-1.jpg"
          alt="Partner with us"
          className="w-full h-[200px] md:h-[250px] rounded-xl shadow-slate-900 object-cover"
        />
        <p className="p-2 font-bold text-gray-900 text-lg md:text-[20px]">
          Partner with us
        </p>
        <p className="p-2 text-sm md:text-base">
          Join biteXpress and reach more customers than ever. We handle
          delivery, so you can focus on the food.
        </p>
        <button className="p-2 md:p-4 bg-orange-500 rounded font-bold text-white w-full md:w-auto">
          Get Started
        </button>
      </div>
      <div className="ride-1 p-2 w-full max-w-[300px] md:w-[300px]">
        <img
          src="rider-2.jpg"
          alt="Ride with us"
          className="w-full h-[200px] md:h-[250px] rounded-xl shadow-slate-900 object-cover"
        />
        <p className="p-2 font-bold text-gray-900 text-lg md:text-[20px]">
          Ride with us
        </p>
        <p className="p-2 text-sm md:text-base">
          The freedom to fit work around your life. Plus great fees, perks and
          discounts. Come Join us!!
        </p>
        <button className="p-2 md:p-4 bg-orange-500 rounded font-bold text-white w-full md:w-auto">
          Get Started
        </button>
      </div>
      <div className="ride-1 p-2 w-full max-w-[300px] md:w-[300px]">
        <img
          src="rider-3.jpg"
          alt="biteXpress for Work"
          className="w-full h-[200px] md:h-[250px] rounded-xl shadow-slate-900 object-cover"
        />
        <p className="p-2 font-bold text-gray-900 text-lg md:text-[20px]">
          biteXpress for Work
        </p>
        <p className="p-2 text-sm md:text-base">
          From team lunches to meal allowances for your late night workers,
          we’ve got your workplace meals covered.
        </p>
        <button className="p-2 md:p-4 bg-orange-500 rounded font-bold text-white w-full md:w-auto">
          Get Started
        </button>
      </div>
      <div className="ride-1 p-2 w-full max-w-[300px] md:w-[300px]">
        <img
          src="rider-4.png"
          alt="Gift Cards"
          className="w-full h-[200px] md:h-[250px] rounded-xl shadow-slate-900 object-cover bg-orange-500"
        />
        <p className="p-2 font-bold text-gray-900 text-lg md:text-[20px]">
          Gift Cards
        </p>
        <p className="p-2 text-sm md:text-base">
          Looking for an easy way to treat your friends and family? Give the
          gift of great food with a Deliveroo gift card.
        </p>
        <button className="p-2 md:p-4 bg-orange-500 rounded font-bold text-white w-full md:w-auto">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Offers;
