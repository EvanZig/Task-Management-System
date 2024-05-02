import React from 'react'
import Topbar from './Topbar/Topbar'

export default function Structure({ children }) {
  return (
    <div>
      <Topbar />
      {children}
    </div>
  )
}
