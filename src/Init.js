import React, { useEffect } from 'react'
import './Assets/css/bootstrap.min.css'
import './Assets/css/aos.css'
import './Assets/css/tooplate-gymso-style.css'
import './App.css';
import 'bootstrap'
import Aos from 'aos';
const Init = ({ children }) => {
  useEffect(() => {
    Aos.init({ duration: 200 })
    return () => {
      Aos.refreshHard();
    }
  })
  return (
    <>
      {children}
    </>
  )
}

export default Init