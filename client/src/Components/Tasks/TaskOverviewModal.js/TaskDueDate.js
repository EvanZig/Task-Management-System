import React, { useState } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { MdEditCalendar } from 'react-icons/md'

export default function TaskDueDate() {
  const [isHovered, setIsHovered] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)

  const handleDateChange = (event) => {
    console.log('Date Change')
  }

  const handleDelete = () => {
    console.log('deleted')
  }

  return (
    <div className="ml-3 flex">
      <span className="pt-2 text-semibold mx-3 text-lg">Due Date</span>
      <div
        className="w-32 rounded-sm flex justify-between hover:cursor-pointer border-none outline-none dropdownBtn"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? (
          <>
            <button
              className=" w-1/3 items-center justify-center flex text-black bg-red-500 hover:scale-105"
              onClick={handleDelete}
            >
              <FaRegTrashAlt size={18} />
            </button>
            <button
              className="text-black w-2/3 bg-blue-400 items-center justify-center flex hover:scale-105"
              onClick={handleDateChange}
            >
              <MdEditCalendar size={18} />
            </button>
          </>
        ) : selectedDate ? (
          <div className="text-black flex justify-center items-center w-full">
            {selectedDate}
          </div>
        ) : (
          <div className="text-black flex justify-center items-center w-full">
            none
          </div>
        )}
      </div>
    </div>
  )
}