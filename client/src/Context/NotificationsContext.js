import React from 'react'
import { notification } from 'antd'

export const NotificationsContext = React.createContext()

export const NotificationsProvider = ({ children }) => {
  const openNotification = async (title, description) => {
    notification.open({
      message: title,
      description: description,
      onClose: () => {
        console.log('Notification Clicked!')
      },
    })
  }

  const state = {
    openNotification: openNotification,
  }

  return (
    <NotificationsContext.Provider value={state}>
      {children}
    </NotificationsContext.Provider>
  )
}
