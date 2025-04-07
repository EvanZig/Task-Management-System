import React, { useState, useRef, useContext } from 'react'
import { MdEdit, MdDelete, MdFlag } from 'react-icons/md'
import '../../TaskButtons/Buttons.scss'
import { NotificationsContext } from '../../../Context/NotificationsContext'

export default function Task(props) {
  const [isHovered, setIsHovered] = useState(false)
  const menuTimeoutRef = useRef(null)
  const { setNotification } = useContext(NotificationsContext)

  const removeMenu = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setIsHovered(false)
    }, 150)
  }

  const handleMenuMouseEnter = () => {
    clearTimeout(menuTimeoutRef.current)
  }

  return (
    <div className='relative'>
      <div
        className={`absolute top-[-50px] right-[-10px] transition-opacity ease-in-out duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onMouseEnter={handleMenuMouseEnter}
        onMouseLeave={removeMenu}
      >
        <div className='taskActionMenu'>
          <button className='border-[1px] border-white rounded-xl bg-slate-400 hover:bg-slate-500 p-2 hover:cursor-pointer mr-[0.3rem]'>
            <MdEdit />
          </button>
          <button
            className={`border-[1px] rounded-xl p-4 hover:cursor-pointer mr-[0.3rem] bg-${props.color}`}
          >
            <MdFlag />
          </button>
          <button className='border-[2px] border-slate-100 rounded-xl p-2 hover:cursor-pointer mr-[0.3rem] bg-red-500 hover:bg-red-600'>
            <MdDelete />
          </button>
        </div>
      </div>
      <div
        className='text-white rounded px-1 bg-black mb-4 border-2 border-black hover:border-blue-400'
        draggable
        style={{ backdropFilter: 'blur(20px)' }}
      >
        <div
          className={
            'w-full h-full resize-none min-h-[60%] text-white hover:cursor-pointer py-[2px] '
          }
          onMouseEnter={() => {
            clearTimeout(menuTimeoutRef.current)
            setIsHovered(true)
          }}
          onMouseLeave={removeMenu}
        >
          {props.title} Confirm
        </div>
      </div>
    </div>
  )
}
