import React from 'react'
import { Dropdown } from 'antd'
import NotificationDropdown from '../../NotificationDropdown/NotificationDropdown'

const items = [
  {
    label: <a href='https://www.antgroup.com'>1st menu item</a>,
    key: '0',
  },
  {
    label: <a href='https://www.aliyun.com'>2nd menu item</a>,
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

export default function Topbar() {
  return (
    <div className='flex justify-between'>
      Topbar Template
      <div className='flex justify-center items-center'>
        <Dropdown
          menu={{ items }}
          trigger={['click']}
          className='m-4 text-lg p-2 border-2 border-white rounded-lg hover:bg-white hover:text-black'
        >
          <button onClick={(e) => e.preventDefault()}>Template</button>
        </Dropdown>
        <NotificationDropdown />
      </div>
    </div>
  )
}
