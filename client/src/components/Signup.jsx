import Header from './Header'
import Footer from './Footer'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
function Signup() {
  const navigate = useNavigate();
  return (
    <div>
      <Header/>
      <div className="signup w-full h-[500px] bg-white border-gray-200 border-y  flex flex-col justify-center items-center">
        <div className="signuppane bg-gray-100 w-[30%] flex flex-col items-center justify-center">
            <p className='text-[20px] font-bold p-4'>Create your Account</p>
            <div className="signup-methods flex flex-col justify-center w-[80%] gap-6 m-4">
              <input type="text" placeholder='Username' className='p-2 rounded'/>
              <input type="text" placeholder='Email or Phonenumber' className='p-2 rounded'/>
              <input type="password" placeholder='Enter your Password' className='p-2 rounded'/>
              <input type="password" placeholder='Confirm your Password' className='p-2 rounded'/>
              <Button variant='primary' children="Submit"/>
            </div>
            <p className='text-black text-center p-1 m-2'>Already have an account?
              <a onClick={()=>navigate("/login")} className='text-orange-500 cursor-pointer'> Log in</a>
            </p>
        </div>

        </div>
      <Footer/>
  </div>
  )
}

export default Signup
