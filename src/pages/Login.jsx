import React from 'react'


function Register() {
  return (
    <div className="formController">
        <div className="formWrapper">
            <span className="logo">QuirkyTalks</span>
            <span className="logo-desc">Login</span>
            <form>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button>SIGN UP</button>
            </form>
            <p>Don't have an account? Register</p>
        </div>
    </div>
  )
}

export default Register