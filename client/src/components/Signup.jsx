import Header from './Header';
import Footer from './Footer';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'; // Import axios

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '', // New field
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      setMessage(response.data.message);
      // Redirect to login page after successful signup
      if (response.data.success) {
        navigate('/login');
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <div className="signup w-full h-[500px] bg-white border-gray-200 border-y flex flex-col justify-center items-center">
          <div className="signuppane bg-gray-100 w-[30%] flex flex-col items-center justify-center">
            <p className="text-[20px] font-bold p-4">Create your Account</p>
            <div className="signup-methods flex flex-col justify-center w-[80%] gap-6 m-4">
              <input
                type="text"
                name="name" // Added name
                placeholder="Username"
                className="p-2 rounded"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="email" // Added name
                placeholder="Email or Phonenumber"
                className="p-2 rounded"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password" // Added name
                placeholder="Enter your Password"
                className="p-2 rounded"
                value={formData.password}
                onChange={handleChange}
              />
              <input
                type="password"
                name="confirmPassword" // Added name
                placeholder="Confirm your Password"
                className="p-2 rounded"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
        {message && <p className="text-red-500 text-center text-[20px]">{message}</p>}
              <Button variant="primary" children="Submit" type="submit" />
            </div>
            <p className="text-black text-center p-1 m-2">
              Already have an account?
              <a onClick={() => navigate('/login')} className="text-orange-500 cursor-pointer">
                {' '}
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
