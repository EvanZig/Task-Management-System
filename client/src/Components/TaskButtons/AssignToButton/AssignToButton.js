import React from 'react'
import { FaRegUser } from 'react-icons/fa'
import { Dropdown, message } from 'antd'
import '../Buttons.scss'

const handleMenuClick = (clickedItem) => {
  message.info(`clicked on ${clickedItem.key} item`)
  clickedItem.domEvent.stopPropagation()
}

const items = [
  {
    label: '1st menu item',
    key: '1',
    icon: <FaRegUser />,
  },
  {
    label: '2st menu item',
    key: '2',
    icon: <FaRegUser />,
  },
  {
    label: '3st menu item',
    key: '3',
    icon: <FaRegUser />,
  },
  {
    label: '4st menu item',
    key: '4',
    icon: <FaRegUser />,
  },
  {
    label: 'LogOUt',
    key: '5',
    icon: <FaRegUser />,
  },
  {
    label: 'Swich user',
    key: '6',
    icon: <FaRegUser />,
  },
]
export default function AssignToButton() {
  return (
    <Dropdown
      menu={{ items, onClick: handleMenuClick }}
      placement='right'
      icon={<FaRegUser />}
      trigger={['click']}
      className='flex justify-center items-center hover:cursor-pointer rounded border-2 border-black bg-slate-400 p-3 text-black active:bg-slate-500'
    >
      <button onClick={(e) => e.preventDefault()}>
        Assign To
        <FaRegUser className='ml-2' />
      </button>
    </Dropdown>
  )
}
