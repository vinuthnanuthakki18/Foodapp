import images from '../data/imagescroll';

function HeadBodyM() {
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
        <div className="maps flex justify-center items-center w-[100%] overflow-hidden ">
            <div className="aboutmaps flex w-[90%] h-[400px] justify-center items-center bg-white rounded m-4 p-2 shadow-2xl  overflow-hidden">
                <div className="mapleft w-[50%] h-[100%]  overflow-hidden">
                    <h3 className='font-bold text-[50px] p-4'>Track orders to your door</h3>
                    <p className='p-4 text-[20px]'>Get your favourite food delivered in a flash. You'll see when your rider's picked up your order, and be able to follow them along the way. You'll get a notification when they're nearby, too.</p>
                    <button className='bg-gray-950 text-white p-4 rounded m-4'>GooglePlay</button>
                    <button className='bg-gray-950 text-white p-4 rounded m-1'>Apple Store</button>
                </div>
                <div className="mapright w-[50%] h-[100%]">
                    <img src="mapimage.png" alt="" className='w-[100%] h-[100%]'/>
                </div>
            </div>
        </div>
        <div className="foodbanner w-[100%] h-[400px] bg-orange-400 flex flex-col items-center justify-between overflow-hidden">
            <div className=" w-[60%] bannertop m-14">
                <h1 className='font-bold text-[60px] text-white mx-8'>Up to 25% off meal deals</h1>
                <h6 className='text-white mx-8 text-[30px]'>Need a midweek pick-me-up, a break from cooking for the family or just fancy your favourite restaurant?</h6>
                <p className='text-white mx-8'>Subject to availability. Participating restaurants only. Service/delivery fees apply. T&Cs</p>
            </div>

            <img src="foodbanner.png" alt="" />
        </div>
        <div className="ride-details w-full h-[500px] bg-gray-100 flex items-center justify-evenly">
            <div className="ride-1 p-1 w-[300px]">
                <img src="rider-1.jpg" alt="" className='w-[300px] h-[250px] rounded-xl p-1  shadow-slate-900'/>
                <p className=' p-1 font-bold text-gray-900 text-[20px]'>Partner with us</p>
                <p className=' p-1'>Join biteXpress and reach more customers than ever. We handle delivery, so you can focus on the food.</p>
                <button className=' p-4 bg-orange-500 rounded font-bold text-white'>Get Started</button>
            </div>
            <div className="ride-1 p-1 w-[300px]">
                <img src="rider-2.jpg" alt="" className='w-[300px] h-[250px] rounded-xl p-1  shadow-slate-900'/>
                <p className=' p-1 font-bold text-gray-900 text-[20px]'>Ride with us</p>
                <p className=' p-1'>The freedom to fit work around your life. Plus great fees, perks and discounts.Come Join us!!</p>
                <button className=' p-4 bg-orange-500 rounded font-bold text-white'>Get Started</button>
            </div>
            <div className="ride-1 p-1 w-[300px]">
                <img src="rider-3.jpg" alt="" className='w-[300px] h-[250px] rounded-xl p-1  shadow-slate-900'/>
                <p className=' p-1 font-bold text-gray-900 text-[20px]'>biteXpress for Work</p>
                <p className=' p-1'>From team lunches to meal allowances for your late night workers, we've got your workplace meals covered.</p>
                <button className=' p-4 bg-orange-500 rounded font-bold text-white'>Get Started</button>
            </div>
            <div className="ride-1 p-1 w-[300px]">
                <img src="rider-4.png" alt="" className='w-[300px] h-[250px] rounded-xl p-1  shadow-slate-900  bg-orange-500'/>
                <p className=' p-1 font-bold text-gray-900 text-[20px]'>Gift Cards</p>
                <p className=' p-1'>Looking for an easy way to treat your friends and family? Give the gift of great food with a Deliveroo gift card.</p>
                <button className=' p-4 bg-orange-500 rounded font-bold text-white'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default HeadBodyM
