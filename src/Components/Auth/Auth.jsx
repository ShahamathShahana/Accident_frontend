import React, { useEffect } from 'react'
import { checkAuth } from '../../Constrant/Constrant'
import { useNavigate } from 'react-router-dom'

export const Auth = () => {
  const navigate = useNavigate()
  useEffect(() => {
    if (checkAuth()) {
      navigate('/home')
    }
    else {
      navigate('/login')
    }
  })
  return (
    <div>Go to login page</div>
  )
}
