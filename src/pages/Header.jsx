import React, { Component } from 'react'
import ucsdLogo from '../assets/ucsdlogo.png';

export default function Header({ visible }) {
  return (
    <div className='block -mt-12'>
      <a className='flex justify-center transition hover:scale-105' href='https://www.ucsd.edu/' target='_blank'>
          <img className='h-78 w-78 p-8'src={ucsdLogo}></img>
          <h1 className='text-7xl font-semibold pt-48 px-4 font-serif'>Purity Test</h1>
      </a>
      <p className='block text-2xl text-center font-semibold'>This is a test for UCSD students/alumni inspired by the Rice Purity Test. Have fun!</p>
      <p className='text-center text-2xl pt-6' style={{visibility: visible === false ? 'hidden' : 'visible'}}>Check off every item you have done. MPS stands for member of preferred sex.</p>
    </div>
  )
}