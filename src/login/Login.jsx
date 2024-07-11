import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

function Login() {
  return (
    <div className="login">
        <h1>Login</h1>
        <form>
            <input type="text" placeholder="email" />
            <input type="password" placeholder="Password" />
            <button className='login'>Login</button> 

        </form>
        <Link to="/">Don't have an account? Sign up</Link>
    </div>
  )
}

export default Login