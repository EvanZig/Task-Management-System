import React from 'react'
import AppRoutes from './AppRoutes'
import AuthProvider from './Context/GlobalContext'
import TaskOverviewModal from './Components/Tasks/TaskOverviewModal.js/TaskOverviewModal'
import TaskWrapper from './Components/TaskWrapper/TaskWrapper'
import Structure from './Components/Structure/Structure'

export default function App() {
  return (
    <div className="pageWrap">
      <AuthProvider>
        <Structure>
          <TaskOverviewModal />
          {/* <AppRoutes /> */}
          <TaskWrapper />
        </Structure>
      </AuthProvider>
    </div>
  )
}
