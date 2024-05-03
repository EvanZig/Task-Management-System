import React from 'react'
import { Dropdown } from 'antd'
import { IoMdNotificationsOutline } from 'react-icons/io'

const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: '0',
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
]

export default function NotificationDropdown() {
  return (
    <div>
      <Dropdown
        menu={{ items }}
        trigger={['click']}
        className="p-2 border-2 border-white rounded-lg mr-2 bg-orange-400 hover:scale-105"
      >
        <button onClick={(e) => e.preventDefault()}>
          <IoMdNotificationsOutline size={26} />
        </button>
      </Dropdown>
    </div>
  )
}
