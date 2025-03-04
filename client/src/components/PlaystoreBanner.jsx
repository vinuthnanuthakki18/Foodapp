

function PlaystoreBanner() {
  return (
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
  )
}

export default PlaystoreBanner
