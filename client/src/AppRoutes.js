import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthIsNotSignedIn, AuthIsSignedIn } from './Context/GlobalContext'
import WelcomePage from './Pages/WelcomePage'
import ProjectSelectionPage from './Pages/ProjectSelectionPage'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <AuthIsNotSignedIn>
        <WelcomePage />
      </AuthIsNotSignedIn>
      <AuthIsSignedIn>
        <Routes>
          <Route path='/' element={<ProjectSelectionPage />} />
        </Routes>
        {/* <Logout /> */}Helloo from signed in Routes
      </AuthIsSignedIn>
    </BrowserRouter>
  )
}
