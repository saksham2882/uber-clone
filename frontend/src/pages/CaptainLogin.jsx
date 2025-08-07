/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {captain, setCaptain} = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const captain = {
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)
    console.log("login response: ", response);

    if (response.status === 200) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home')
    }

    setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>

      <div>
        <img className='w-20 mb-10' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />

        <form onSubmit={(e) => { submitHandler(e) }}>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
            type="email"
            placeholder='email@example.com'
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
            type="password"
            placeholder='Pa$$word'
          />

          <button
            className='bg-[#111] mb-7 rounded px-4 py-2 w-full text-lg text-white font-semibold placeholder:text-base'
          >
            Login
          </button>

          <p className='text-center'>Become a Partner Driver! <Link to={'/captain-signup'} className='text-blue-600'>Register Now</Link></p>
        </form>
      </div>

      <div>
        <Link to={'/login'}
          className='bg-[#d5622d] flex items-center justify-center mb-7 rounded px-4 py-2 w-full text-lg text-white font-semibold placeholder:text-base'
        >Sign in as User</Link>
      </div>

    </div>
  )
}

export default CaptainLogin
