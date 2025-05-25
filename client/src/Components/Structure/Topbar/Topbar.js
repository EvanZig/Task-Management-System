import { Dropdown } from 'antd'
import NotificationDropdown from '../../NotificationDropdown/NotificationDropdown'

const items = [
  {
    label: <a href='https://www.antgroup.com'>test menu item</a>,
    key: '0',
  },
]

export default function Topbar() {
  return (
    <div className='flex justify-between bg-[#333333] p-4'>
      ..
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
