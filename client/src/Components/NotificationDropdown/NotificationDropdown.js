import { Dropdown } from 'antd'
import { IoMdNotificationsOutline } from 'react-icons/io'

const menuItems = [
  {
    label: <a href='https://www.aliyun.com'>1st menu item</a>,
    key: '1',
  },
]

const NotificationDropdown = () => {
  const handleClick = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <Dropdown
        menu={{ items: menuItems }}
        trigger={['click']}
        className='p-2 border-2 border-white rounded-lg mr-2 bg-orange-400 hover:scale-105'
      >
        <button onClick={handleClick} className='flex items-center'>
          <IoMdNotificationsOutline size={26} />
        </button>
      </Dropdown>
    </div>
  )
}

export default NotificationDropdown
