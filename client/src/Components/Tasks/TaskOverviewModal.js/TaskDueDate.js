import { useContext, useState } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { NotificationsContext } from '../../../Context/NotificationsContext'
import { CiCalendarDate } from 'react-icons/ci'

export default function TaskDueDate() {
  const [isHovered, setIsHovered] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)
  const { openNotification } = useContext(NotificationsContext)

  const handleDateChange = (event) => {
    const newDate = event.target.value
    setSelectedDate(newDate)
    openNotification('Date edited', `Date Changed to ${newDate}`, 'middle')
  }

  const handleDelete = () => {
    setSelectedDate(null)
    console.log('Deleted date')
    openNotification('Deleted', 'Removed date', 'middle')
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
              className='w-1/3 items-center justify-center flex text-black bg-red-600 hover:scale-105 border-2 border-black'
              onClick={handleDelete}
            >
              <FaRegTrashAlt size={18} />
            </button>
            <button
              type='date'
              className='w-2/3 items-center justify-center flex text-black bg-blue-500 hover:scale-105 border-2 border-black'
              value={selectedDate || ''}
              onChange={handleDateChange}
            >
              <CiCalendarDate size={20} />
            </button>
          </>
        ) : (
          <span className='w-full items-center justify-center flex text-black bg-yellow-500 border-2 border-black'>
            {selectedDate ? selectedDate : 'None'}
          </span>
        )}
      </div>
    </div>
  )
}
