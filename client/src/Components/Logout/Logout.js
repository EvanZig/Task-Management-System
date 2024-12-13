import React from 'react'
import '../ComponentGeneralStyles.scss'

export default function Logout() {
  const handleLogout = async () => {
    console.log('logout')
  }

  return (
    <button
      className='bg-red-500 border-2 border-black px-4 py-2 text-white rounded-lg hover:bg-red-400'
      onClick={handleLogout}
    >
      Logout
    </button>
  )
}
