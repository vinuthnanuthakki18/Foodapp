import Header from './Header'
import Footer from './Footer'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();
  return (
    <div>
      <Header/>
      <div className="signup w-full h-[500px] bg-white border-gray-200 border-y  flex flex-col justify-center items-center">
        <div className="signuppane bg-gray-100 w-[30%] flex flex-col items-center justify-center">
            <p className='text-[20px] font-bold p-4'>Login to your Account</p>
            <div className="signup-methods flex flex-col justify-center w-[80%] gap-6 m-4">
              <input type="text" placeholder='Email or Username' className='p-2 rounded'/>
              <input type="password" placeholder='Enter your Password' className='p-2 rounded'/>
              <Button variant='primary' children="Submit"/>
            </div>
            <p className='text-black text-center p-1 m-2'>Don't have an account
              <a onClick={()=>navigate("/signup")} className='text-orange-500 cursor-pointer'> SignUp</a>
            </p>
        </div>

        </div>
      <Footer/>
  </div>
  )
}

export default Login
