import React from 'react'
import { BsFillImageFill } from "react-icons/bs";

function Register() {
  return (
    <div className="formController">
        <div className="formWrapper">
            <span className="logo">QuirkyTalks</span>
            <span className="logo-desc">Register</span>
            <form>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input style={{display:"none"}} type="file" id="file" />
                <label htmlFor="file">
                    <BsFillImageFill /> Add Image
                </label>
                <button>SIGN UP</button>
            </form>
            <p>You already have an account? LOGIN</p>
        </div>
    </div>
  )
}

export default Register