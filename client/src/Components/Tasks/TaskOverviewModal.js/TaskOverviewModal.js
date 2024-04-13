import React, { useState, useRef, useEffect } from 'react'
import { FaPlus } from 'react-icons/fa'
import './TaskOverviewModal.scss'
import { RiCloseLine } from 'react-icons/ri'
import { BiBookAdd } from 'react-icons/bi'
import TaskDescription from './TaskDescription'

export default function TaskOverviewModal() {
  const [taskData, setTaskData] = useState({
    title: 'task name',
    description: '',
  })
  const [isEditing, setIsEditing] = useState(false)
  const titleRef = useRef(null)
  const [show, setShow] = useState(false)
  const modalRef = useRef(null)

  const openModal = () => setShow(true)
  const handleClose = () => setShow(false)

  const handleOverlayClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleClose()
      setIsEditing(false)
    }
  }

  const handleModalClick = (event) => {
    if (titleRef.current && !titleRef.current.contains(event.target)) {
      setIsEditing(false)
    }
  }

  const titleEdit = () => {
    setIsEditing(true)
  }

  useEffect(() => {
    if (isEditing && titleRef.current) {
      titleRef.current.focus()
    }
  }, [isEditing])

  const formDataChange = () => {
    setTaskData({ title: titleRef.current.value, description: 'description' })
    console.log('Hello world')
  }

  return (
    <div>
      <button
        onClick={openModal}
        className="text-white font-bold CreateTaskBtn py-2 px-3 rounded-sm flex items-center hover:scale-105"
      >
        <FaPlus size={16} className="mr-1" />
        Create New Task
      </button>
      {show && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 text-white"
          onClick={handleOverlayClick}
        >
          <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
          <div
            ref={modalRef}
            onClick={handleModalClick}
            className="modal-container modalContainer w-[40rem] p-6 rounded-lg z-50"
          >
            <div className="modal-content">
              <div className="modal-header flex justify-between items-center mb-4">
                <div className="min-w-96 min-h-9" onClick={titleEdit}>
                  {isEditing ? (
                    <input
                      type="text"
                      className="text-lg text-black rounded-sm shadow-md p-1 w-[85%] border-none focus:outline-none bg-gray-200 "
                      ref={titleRef}
                      onChange={formDataChange}
                      onKeyDown={(e) => {
                        e.key === 'Enter' && setIsEditing(false)
                      }}
                      value={taskData.title}
                    />
                  ) : (
                    <h1 className="text-lg font-semibold">
                      {taskData.title ? taskData.title : 'New Task'}
                    </h1>
                  )}
                </div>
                <button
                  className="text-white hover:text-gray-700 hover:scale-105"
                  onClick={handleClose}
                >
                  <RiCloseLine size={26} />
                </button>
              </div>
              <div className="modal-body">
                <TaskDescription formDataChange={formDataChange} />
              </div>
              <div className="modal-footer flex justify-end mt-4">
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
                  onClick={handleClose}
                >
                  Exit
                </button>
                <button className="addTaskBtn text-black font-bold py-2 px-4 rounded-sm flex items-center">
                  <BiBookAdd size={19} className="mr-1" /> Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
