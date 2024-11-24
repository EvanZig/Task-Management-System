import React, { useContext, useState } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { MdEditCalendar } from 'react-icons/md'
import { NotificationsContext } from '../../../Context/NotificationsContext'

export default function TaskDueDate() {
  const [isHovered, setIsHovered] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)
  const { openNotification } = useContext(NotificationsContext)

  const handleDateChange = (event) => {
    openNotification('Date edited', 'Date Changed', 'top')
  }

  const handleDelete = () => {
    openNotification('Deleted', 'removed date', 'middle')
  }

  return (
    <div className='ml-3 flex'>
      <span className='pt-4 font-semibold mx-3 text-lg'>Due Date</span>
      <div
        className='w-32 rounded flex justify-between hover:cursor-pointer border-none outline-none dropdownBtn'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? (
          <>
            <button
              className=' w-1/3 items-center justify-center flex text-black bg-red-600 hover:scale-105 border-2 border-black'
              onClick={handleDelete}
            >
              <FaRegTrashAlt size={18} />
            </button>
            <button
              className='text-black w-2/3 bg-blue-400 items-center justify-center flex hover:scale-105 border-2 border-black'
              onClick={handleDateChange}
            >
              <MdEditCalendar size={18} />
            </button>
          </>
        ) : (
          <div className='text-black flex justify-center rounded items-center w-full bg-slate-400 border-2 border-black'>
            {selectedDate ? selectedDate : '-- / -- / --'}
          </div>
        )}
      </div>
    </div>
  )
}
