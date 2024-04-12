import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import './TaskOverviewModal.scss'
import { IoIosCloseCircleOutline } from 'react-icons/io'

export default function TaskOverviewModal() {
  const [show, setShow] = useState(false)

  const openModal = () => setShow(true)
  const handleClose = () => setShow(false)

  return (
    <div>
      <button
        onClick={openModal}
        className=" text-white font-bold CreateTaskBtn py-2 px-3 rounded-sm flex items-center hover:scale-105"
      >
        <FaPlus size={16} className="mr-1" />
        Create New Task
      </button>
      {show && (
        <div className="fixed inset-0 flex items-center justify-center z-50 text-white">
          <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
          <div className="modal-container modalContainer w-96 p-6 rounded-lg z-50">
            <div className="modal-content">
              <div className="modal-header flex justify-between items-center mb-4">
                <h1 className="text-xl font-semibold">Modal title</h1>
                <button
                  className="text-white hover:text-gray-700 hover:scale-105"
                  onClick={handleClose}
                >
                  <IoIosCloseCircleOutline size={26} />
                </button>
              </div>
              <div className="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div className="modal-footer flex justify-end mt-4">
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
                  onClick={handleClose}
                >
                  Exit
                </button>
                <button className="addTaskBtn text-black font-bold py-2 px-4 rounded-sm">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
