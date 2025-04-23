import React, { Component } from 'react'
import ucsdLogo from '../assets/ucsdlogo.png';

export default function Header() {
    return (
      <div className='block -mt-12'>
        <div className='flex justify-center'>
            <img className='h-1/5 w-1/5 p-8'src={ucsdLogo}></img>
            <h1 className='text-7xl font-semibold pt-50 px-4 font-serif'>Purity Test</h1>
        </div>
        <p className='block text-2xl text-center'>This is a test inspired by the Rice Purity Test. Have fun!</p>
      </div>
    )
}
