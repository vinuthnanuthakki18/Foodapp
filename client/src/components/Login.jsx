import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import API_BASE_URL from "../../config";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/login`,
        { email, password },
        { withCredentials: true }
      );

      const token = response.data.token;

      console.log(response.data);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      dispatch(login(response.data.user));
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <form onSubmit={handleSubmit} className="flex-grow">
        <div className="signup w-full h-auto min-h-[400px] bg-white border-y border-gray-200 flex flex-col justify-center items-center py-6 sm:py-8">
          <div className="signuppane bg-gray-100 w-full max-w-[90%] sm:max-w-[60%] md:max-w-[30%] flex flex-col items-center justify-center p-4 sm:p-6 rounded-lg">
            <p className="text-lg sm:text-xl md:text-[20px] font-bold p-2 sm:p-4">
              Login to your Account
            </p>
            {error && (
              <p className="text-red-500 text-sm sm:text-base p-2">{error}</p>
            )}
            <div className="signup-methods flex flex-col justify-center w-full max-w-[80%] gap-4 sm:gap-6 m-2 sm:m-4">
              <input
                type="text"
                placeholder="Email or Username"
                className="p-2 sm:p-3 rounded w-full text-sm sm:text-base"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Enter your Password"
                className="p-2 sm:p-3 rounded w-full text-sm sm:text-base"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button variant="primary" className="w-full">
                Login
              </Button>
            </div>
            <p className="text-black text-center p-1 m-2 text-sm sm:text-base">
              Don’t have an account?{" "}
              <a
                onClick={() => navigate("/signup")}
                className="text-orange-500 cursor-pointer hover:underline"
              >
                SignUp
              </a>
            </p>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default Login;
