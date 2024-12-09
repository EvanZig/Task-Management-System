import React from 'react'
import '../ComponentGeneralStyles.scss'

export default function Logout() {
  const handleLogout = async () => {
    console.log('logout')
  }

  return (
    <button className='bg-red-500' onClick={handleLogout}>
      Logout
    </button>
  )
}
