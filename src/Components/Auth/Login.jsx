import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { BackURL } from '../../Constrant/Constrant';
const Login = () => {
  const navigate = useNavigate()
  const [loginDetails, setLoginDetails] = useState({})
  const [loginErr, setLoginErr] = useState({})
  const submithandle = (e) => {
    e.preventDefault()
    setLoginErr({})
    if (!loginDetails.username || !loginDetails.password) {
      setLoginErr({
        "user": !loginDetails.username || loginDetails.username === "",
        "pswd": !loginDetails.password || loginDetails.password === "",
      })
    }
    else {
      axios.post(`${BackURL}login`, loginDetails).then((res) => {
        if (res.data) {
          localStorage.setItem('id', res.data)
          navigate('/home');
        }
        else {
          alert("something wrong");
        }
      })
        .catch((e) => {
          alert(e.message);
        })
    }
  }
  const changeHandle = (e) => {
    const value = e.target.value
    const name = e.target.name
    setLoginDetails({ ...loginDetails, [name]: value })
  }
  return (
    <>
      <div className='login-bg'>
        <div class="background">
          <div class="shape"></div>
          <div class="shape"></div>
        </div>
        <form onSubmit={(e) => { submithandle(e) }}>
          <h3 className='text-white'>Login Here</h3>
          <label for="username">Username</label>
          <input type="text" name='username' placeholder="Email or Phone" id="username" onChange={(e) => changeHandle(e)} />
          {
            loginErr.user ?
              <label className='mt-0 text-danger'>username required</label>
              : <>
              </>
          }
          <br />
          <label for="password">Password</label>
          <input type="password" name='password' placeholder="Password" id="password" onChange={(e) => changeHandle(e)} />
          {
            loginErr.pswd &&
            <label className='mt-0 text-danger'>password required</label>
          }
          <button className='mt-5'>Log In</button>
        </form>
      </div>
    </>

  )
}

export default Login