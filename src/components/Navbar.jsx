import React from 'react'
import John from '../images/john.jpeg'

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">QuirkyTalks</span>
      <div className="user">
        <img src={John} alt=""></img>
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar