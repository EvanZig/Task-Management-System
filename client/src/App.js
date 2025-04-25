import React from 'react'
import AppRoutes from './AppRoutes'
import AuthProvider from './Context/GlobalContext'
import TaskOverviewModal from './Components/Tasks/TaskOverviewModal.js/TaskOverviewModal'
import TaskWrapper from './Components/TaskWrapper/TaskWrapper'
import Structure from './Components/Structure/Structure'
import CreateList from './Components/List/CreateList'

export default function App() {
  return (
    <div className='pageWrap'>
      <AuthProvider>
        <Structure>
          <TaskOverviewModal />
          {/* <AppRoutes /> */}
          <CreateList />
          <div className='flex flex-row justify-center items-center border-2 border-black hover:bg-gray-800'>
            <TaskWrapper />
            <TaskWrapper />
            <TaskWrapper />
            <TaskWrapper />
            <TaskWrapper />
          </div>
        </Structure>
      </AuthProvider>
    </div>
  )
}
