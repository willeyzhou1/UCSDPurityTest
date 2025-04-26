import React, { Component } from 'react'
import { useLocation } from 'react-router-dom'

export default function Submit() {
    const location = new useLocation();
    return (
        <div>{location.state}</div>
      )
}