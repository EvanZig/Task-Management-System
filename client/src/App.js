import React from 'react'
import AppRoutes from './AppRoutes'
import AuthProvider from './Context/GlobalContext'

export default function App() {
  return (
    <div className="pageWrap">
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </div>
  )
}
