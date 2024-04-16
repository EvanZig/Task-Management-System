import React, { useState, useRef, useEffect } from 'react'
import {
  HiOutlineExclamationCircle,
  HiOutlineArrowCircleRight,
  HiOutlineArrowCircleDown,
} from 'react-icons/hi'
import { FaFlag } from 'react-icons/fa'

export default function PriorityButton() {
  const [color, setColor] = useState('yellow')
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef(null)
  const openDropdownRef = useRef(null)

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !openDropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  const setColorAndCloseDropdown = (selectedColor) => {
    setColor(selectedColor)
    setShowDropdown(false)
  }

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className={`border-2 border-black text-black rounded-md justify-center items-center flex p-1 px-3 hover:cursor-pointer bg-${color}`}
        onClick={() => setShowDropdown(!showDropdown)}
        ref={openDropdownRef}
      >
        <FaFlag className="mr-1" />
      </button>

      <div
        className={`origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${
          showDropdown ? 'visible' : 'hidden'
        }`}
      >
        <div ref={dropdownRef}>
          <button
            className="flex items-center w-full px-3 py-2 text-sm text-black hover:bg-green-400"
            onClick={() => setColorAndCloseDropdown('green')}
          >
            <HiOutlineArrowCircleDown className="h-5 w-5 mr-2" />
            Low Priority
          </button>
          <button
            className="flex items-center w-full px-3 py-2 text-sm text-black hover:bg-yellow-400 "
            onClick={() => setColorAndCloseDropdown('yellow')}
          >
            <HiOutlineArrowCircleRight className="h-5 w-5 mr-2" />
            Regular Priority
          </button>
          <button
            className="flex items-center w-full px-3 py-2 text-sm text-black hover:bg-red-400 "
            onClick={() => setColorAndCloseDropdown('red')}
          >
            <HiOutlineExclamationCircle className="h-5 w-5 mr-2 " />
            High Priority
          </button>
        </div>
      </div>
    </div>
  )
}
