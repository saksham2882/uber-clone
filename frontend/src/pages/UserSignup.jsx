/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import {UserDataContext} from '../context/UserContext';


const UserSignup = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  const {user, setUser} = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullName: {
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    }
    
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)
    console.log("response: ", response);

    if(response.status === 201) {
      const data = response.data;
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }

    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>

      <div>
        <img className='w-20 mb-10' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />

        <form onSubmit={(e) => { submitHandler(e) }}>
          <h3 className='text-lg font-medium mb-2'>What's your name</h3>
          <div className='flex gap-4 mb-5'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-base'
              type="text"
              placeholder='first name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-lg placeholder:text-base'
              type="text"
              placeholder='last name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input
            required
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'
            type="email"
            placeholder='email@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
            required
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
            type="password"
            placeholder='Pa$$word'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className='bg-[#111] mb-7 rounded px-4 py-2 w-full text-lg text-white font-semibold placeholder:text-base cursor-pointer'
          >
            Create Account
          </button>

          <p className='text-center cursor-pointer'>Already have a account? <Link to={'/login'} className='text-blue-600'>Login here</Link></p>
        </form>
      </div>

      <div>
        {/* <p className='text-[10px] leading-tight'>
          By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated dialer, from Uber and its affiliates at the number provided. This includes calls and messages to confirm your account, provide customer support, and for marketing purposes.
        </p> */}
        <p className='text-[10px] leading-tight'>
          This site is protected by reCAPTCHA and the <span className='underline text-blue-800'>Google Privacy Policy</span>  and <span className='underline text-blue-800'>Terms of Service apply.</span> 
        </p>
      </div>

    </div>
  )
}

export default UserSignup
