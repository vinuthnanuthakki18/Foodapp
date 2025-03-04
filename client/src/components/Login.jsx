import Header from './Header'
import Footer from './Footer'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // const response = await axios.post('/api/login', { email, password }); // Adjust API URL
        const response = await axios.post('http://localhost:5000/api/login', { email, password });

        const token = response.data.token;

        // Store token in localStorage for future API calls
        localStorage.setItem('token', token);

        // Redirect to dashboard or home page
        navigate('/dashboard');
    } catch (err) {
        setError(err.response?.data?.message || 'Login failed');
    }
};
  return (
    <div>
      <Header/>
      <form onSubmit={handleSubmit}> 
      <div className="signup w-full h-[500px] bg-white border-gray-200 border-y  flex flex-col justify-center items-center">
        <div className="signuppane bg-gray-100 w-[30%] flex flex-col items-center justify-center">
            <p className='text-[20px] font-bold p-4'>Login to your Account</p>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="signup-methods flex flex-col justify-center w-[80%] gap-6 m-4">

              <input type="text" placeholder='Email or Username' className='p-2 rounded' onChange={(e) => setEmail(e.target.value)}
              required/>
              <input type="password" placeholder='Enter your Password' className='p-2 rounded' onChange={(e) => setPassword(e.target.value)}
              required/>
              <Button variant='primary'>Submit</Button>

            </div>
            <p className='text-black text-center p-1 m-2'>Don't have an account?
              <a onClick={()=>navigate("/signup")} className='text-orange-500 cursor-pointer'> SignUp</a>
            </p>
        </div>

        </div>
        </form>
      <Footer/>
  </div>
  )
}

export default Login
