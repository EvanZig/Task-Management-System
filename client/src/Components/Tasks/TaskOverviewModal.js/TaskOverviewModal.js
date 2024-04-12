import React, { useState } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import './TaskOverviewModal.scss'

export default function TaskOverviewModal() {
  const [show, setShow] = useState(false)

  const openModal = () => setShow(true)
  const handleClose = () => setShow(false)

  return (
    <div>
      <Button onClick={openModal} className="CreateTaskBtn hover:scale-105 ">
        Create new task
      </Button>
      <Modal show={show} onHide={handleClose} className="modalContent">
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>
        <div className="taskCreationFooter">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="" className="">
            Save changes
          </Button>
        </div>
      </Modal>
    </div>
  )
}
