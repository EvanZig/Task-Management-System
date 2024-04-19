import React, { useState, useRef } from 'react'

export default function Task(props) {
  const [isHovered, setIsHovered] = useState(false)
  const [isOnMenu, setIsOnMenu] = useState(false)
  const menuTimeoutRef = useRef(null)

  const removeMenu = () => {
    menuTimeoutRef.current = setTimeout(() => {
      if (!isOnMenu) setIsHovered(false)
    }, 100)
  }

  const handleMenuMouseEnter = () => {
    setIsOnMenu(true)
    clearTimeout(menuTimeoutRef.current)
  }

  const handleMenuMouseLeave = () => {
    setIsOnMenu(false)
    removeMenu()
  }

  return (
    <div className="relative">
      <div
        className={`${
          isHovered ? 'block' : 'hidden'
        } absolute top-[-40px] right-[-10px]`}
        onMouseEnter={handleMenuMouseEnter}
        onMouseLeave={handleMenuMouseLeave}
      >
        <div className="taskActionMenu">
          <button className="border-1 rounded-xl bg-slate-300 p-1 hover:cursor-pointer ml-2">
            edit
          </button>
          <button className="border-1 rounded-xl bg-slate-300 p-1 ">
            change priority
          </button>
          <button className="border-1 rounded-xl bg-slate-300 p-1 ">
            delete
          </button>
        </div>
      </div>
      <div className="text-white rounded px-1 max-h-12 bg-emerald-900">
        <div
          className={
            'w-full h-full resize-none text-white hover:cursor-pointer'
          }
          onMouseEnter={() => {
            clearTimeout(menuTimeoutRef.current)
            setIsHovered(true)
          }}
          onMouseLeave={removeMenu}
          draggable
        >
          {props.title} Hello from task
        </div>
      </div>
    </div>
  )
}
