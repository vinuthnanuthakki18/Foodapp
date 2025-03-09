import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header'

function SecureLogin() {
    const navigate = useNavigate();

  return (
    <div>
      <Header/>
      <div className="message w-full flex flex-col justify-center mx-auto max-w-screen-xl font-medium h-[700px] items-center">
        <img src="/Animation.gif" alt="" />
        <h1>Looks like you are logged out!, <a href="/login" className="href">Click here</a> to login </h1>
      </div>
    </div>
  )
}

export default SecureLogin
