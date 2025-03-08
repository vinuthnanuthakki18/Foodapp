import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import Head from './Head';
import { BounceLoader } from 'react-spinners';
import axios from 'axios';

function Profile() {
  const userProfile =useSelector((state)=> state.auth.user);
  const [member,setMemberSince] = useState('');
  const [isLoading, setisLoading]=useState(true);
  const [newPassword, setnewPassword] = useState('');
  const [isEditing,setisEditing] = useState(false);
  const [message, setmessage] = useState('');

  useEffect(()=>{
    console.log("userProfile on mount:", userProfile);
    if(userProfile){
      if (userProfile?.createdAt) {
        setMemberSince(userProfile.createdAt.slice(0, 10));
        console.log("Updated memberSince:", member);
      }
      setisLoading(false);
    }
  },[userProfile]);

  // console.log("loading",userProfile);
    const handleSave = async (e) => {
      e.preventDefault();
    
      if (!newPassword.trim()) {  // Prevent empty password submission
        setmessage("Password can't be empty");
        return;
      }
    try{
      // console.log("startijg");
      const response = await axios.post("http://localhost:5000/api/update", {
        user: userProfile._id,      // ✅ Correct key
        updatepass: newPassword,   // ✅ Correct key
      });
      
      
      console.log("res",response);
      setmessage(response.data.message);

    }catch (err) {
      // setError(err.response?.data?.message || 'Login failed');
      setmessage(err);
  }
    setisEditing(false);
    setnewPassword('');
  };

  return (
    (isLoading ? <BounceLoader color="#36d7b7"/> : <div className='min-h-screen bg-slate-50'>
      <Head/>
      <div className="max-w-md mx-auto dataform flex flex-col justify-center align-middle rounded-lg shadow-lg bg-white mt-6">
        <div className="p-4">
          <h1 className='font-bold text-gray-900 text-2xl'>Hey there ! <span className='text-orange-500 '>{userProfile?.name}</span></h1>
        </div>
        <form className='space-y-4 p-4' onSubmit={handleSave}>
          <div>
          <label htmlFor="Name" className='block font-medium text-gray-700'>Name : </label>
            <input type="text" value={userProfile?.name}  className='w-full p-2 border rounded bg-gray-100' disabled/>
          
          </div>
          <div className="">
          <label htmlFor="Email" className='block font-medium text-gray-700'>Email Address : </label>
            <input type="text" value={userProfile?.email} className='w-full p-2 border rounded bg-gray-100' disabled/>
          
          </div>
          <div>
              <label className='block font-medium text-gray-700'>Reset Password:</label>
              <div className="flex gap-2">
                <input
                  type="password"
                  value={isEditing ? newPassword : ''}
                  className='w-full p-2 border rounded bg-gray-100'
                  onChange={(e)=>setnewPassword(e.target.value)}
                  disabled={!isEditing}
                  placeholder="Enter new password"
                />
                {isEditing ? (
                  <button type="submit" className='bg-green-500 text-white p-2 rounded-md'>Save</button>
                ) : (
                  <button type="button" className='bg-orange-500 p-2 rounded-md' onClick={() => setisEditing(true)}>Reset</button>
                )}
              </div>
              {message && <p className="text-sm text-red-500 mt-1">{message}</p>}
            </div>
          <div className="">
          <label htmlFor="Date" className='block font-medium text-gray-700'>Member since : 
          </label>
            <input type="text" value={member}  className='w-full p-2 border rounded bg-gray-100' disabled/>
          </div>
        </form>
      </div>
    </div>)
    
  )
}

export default Profile
