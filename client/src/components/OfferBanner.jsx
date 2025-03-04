

function OfferBanner() {
  return (
    <div className="foodbanner w-[100%] h-[400px] bg-orange-400 flex flex-col items-center justify-between overflow-hidden">
    <div className=" w-[60%] bannertop m-14">
        <h1 className='font-bold text-[60px] text-white mx-8'>Up to 25% off meal deals</h1>
        <h6 className='text-white mx-8 text-[30px]'>Need a midweek pick-me-up, a break from cooking for the family or just fancy your favourite restaurant?</h6>
        <p className='text-white mx-8'>Subject to availability. Participating restaurants only. Service/delivery fees apply. T&Cs</p>
    </div>

    <img src="foodbanner.png" alt="" />
</div>
  )
}

export default OfferBanner
