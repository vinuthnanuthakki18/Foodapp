import NearMeIcon from "@mui/icons-material/NearMe";
import { useNavigate } from "react-router-dom";

function TopHome() {
  const navigate = useNavigate();
  return (
    <div className="serachloc w-full max-w-[500px] h-auto min-h-[200px] rounded text-orange-500 absolute bottom-4 sm:bottom-[70px] left-1/2 transform -translate-x-1/2 px-4">
      <div className="search2 flex flex-col items-center p-2 sm:p-4">
        <div className="searchheaduptext text-center">
          <span className="bg-white font-extrabold text-3xl sm:text-4xl md:text-[40px] leading-tight">
            Restaurants, takeaways,
            <br /> supermarkets and <br />
            shops. Delivered.
          </span>
        </div>
        <div className="search-down bg-white w-full sm:w-[80%] md:w-full rounded mt-4 sm:mt-6 flex flex-col items-center">
          <p className="p-2 text-center text-sm sm:text-base">
            Enter a postcode to see what we deliver:
          </p>
          <div className="search-last flex flex-col sm:flex-row items-center w-full justify-center gap-2 sm:gap-4 px-2 sm:px-0">
            <div className="flex items-center w-full sm:w-auto">
              <NearMeIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              <input
                type="text"
                placeholder="e.g. 560708"
                className="w-full sm:w-[200px] md:w-[250px] my-2 rounded-full p-2 sm:p-3 border border-black"
              />
            </div>
            <button className="p-2 sm:p-3 bg-orange-500 text-white rounded-full my-2 w-full sm:w-auto">
              Search
            </button>
          </div>
          <p className="text-black text-center p-1 text-sm sm:text-base">
            <a
              onClick={() => navigate("/login")}
              className="text-orange-500 cursor-pointer hover:underline"
            >
              Log in
            </a>{" "}
            for your recent addresses.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TopHome;
