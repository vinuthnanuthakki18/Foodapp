import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import API_BASE_URL from "../../config";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post(`${API_BASE_URL}/api/auth/signup`, {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      setMessage(response.data.message);
      if (response.data.success) {
        navigate("/login");
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <form onSubmit={handleSubmit} className="flex-grow">
        <div className="signup w-full h-auto min-h-[400px] bg-white border-y border-gray-200 flex flex-col justify-center items-center py-6 sm:py-8">
          <div className="signuppane bg-gray-100 w-full max-w-[90%] sm:max-w-[60%] md:max-w-[30%] flex flex-col items-center justify-center p-4 sm:p-6 rounded-lg">
            <p className="text-lg sm:text-xl md:text-[20px] font-bold p-2 sm:p-4">
              Create your Account
            </p>
            <div className="signup-methods flex flex-col justify-center w-full max-w-[80%] gap-4 sm:gap-6 m-2 sm:m-4">
              <input
                type="text"
                name="name"
                placeholder="Username"
                className="p-2 sm:p-3 rounded w-full text-sm sm:text-base"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="email"
                placeholder="Email or Phonenumber"
                className="p-2 sm:p-3 rounded w-full text-sm sm:text-base"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                className="p-2 sm:p-3 rounded w-full text-sm sm:text-base"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your Password"
                className="p-2 sm:p-3 rounded w-full text-sm sm:text-base"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              {message && (
                <p className="text-red-500 text-center text-sm sm:text-base">
                  {message}
                </p>
              )}
              <Button
                variant="primary"
                children="Submit"
                type="submit"
                className="w-full"
              />
            </div>
            <p className="text-black text-center p-1 m-2 text-sm sm:text-base">
              Already have an account?{" "}
              <a
                onClick={() => navigate("/login")}
                className="text-orange-500 cursor-pointer hover:underline"
              >
                Log in
              </a>
            </p>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default Signup;
