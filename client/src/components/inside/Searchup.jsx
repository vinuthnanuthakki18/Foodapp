

function Searchup() {
  return (
    <div className="w-[100%] h-[100px] flex-row justify-center text-center">
      <h1 className="text-[30px] font-[500]  text-orange-500">Search your favourite Restaurants</h1>
      <input type="text" placeholder="search for restaurants and food" className="border border-gray-400 focus:outline-none w-[60%] h-[40%] rounded-xl border-red-950 text-[20px] p-2 text-gray-600"/>
    </div>
  )
}

export default Searchup
