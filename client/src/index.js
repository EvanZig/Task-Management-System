import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import { NotificationsProvider } from './Context/NotificationsContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <NotificationsProvider>
      <App />
    </NotificationsProvider>
  </React.StrictMode>,
)
