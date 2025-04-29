import React, { Component } from 'react'
import { useLocation } from 'react-router-dom'

export default function Submit() {
    const location = new useLocation();
    return (
        <div className='block'>
          <h1 className='flex justify-center text-4xl font-semibold'>Score:</h1>
        </div>
      )
}