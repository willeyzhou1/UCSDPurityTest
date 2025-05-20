import React, { Component } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Submit( { setVisible }) {
    const location = new useLocation();
    const navigate = new useNavigate();

    function handlePlayClick() {
      navigate('/');
      setVisible(true);
    }

    function handleAnalyticsClick() {
      navigate('/analytics');
      setVisible(false);
    }

    return (
        <div className='block'>
          <h1 className='flex justify-center text-4xl font-semibold'>Score:</h1>
          <h1 className='flex justify-center text-6xl font-extrabold mt-8 -ml-3 text-red-600'>{location.state}</h1>
          <button onClick={handlePlayClick} className='block mx-auto my-10 w-1/5 h-16 text-2xl border-black border-2 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 p-2 cursor-pointer transition duration-300 hover:opacity-90'>Play again?</button>
          <button onClick={handleAnalyticsClick} className='block mx-auto my-10 w-1/5 h-16 text-2xl border-black border-2 rounded-xl bg-gradient-to-tr from-yellow-300 to-amber-400 p-2 cursor-pointer transition duration-300 hover:opacity-90'>See Analytics</button>
        </div>
      )
}