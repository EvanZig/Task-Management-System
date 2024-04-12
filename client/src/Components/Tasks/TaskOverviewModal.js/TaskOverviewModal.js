import React, { useState, useRef } from 'react'
import { FaPlus } from 'react-icons/fa'
import './TaskOverviewModal.scss'
import { RiCloseLine } from 'react-icons/ri'
import { BiBookAdd } from 'react-icons/bi'

export default function TaskOverviewModal() {
  const [show, setShow] = useState(false)
  const modalRef = useRef(null)

  const openModal = () => setShow(true)
  const handleClose = () => setShow(false)

  const handleOverlayClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleClose()
    }
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
            className="modal-container modalContainer w-96 p-6 rounded-lg z-50"
          >
            <div className="modal-content">
              <div className="modal-header flex justify-between items-center mb-4">
                <h1 className="text-xl font-semibold">Modal title</h1>
                <button
                  className="text-white hover:text-gray-700 hover:scale-105"
                  onClick={handleClose}
                >
                  <RiCloseLine size={26} />
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
