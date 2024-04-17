import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { IoIosArrowDown } from 'react-icons/io'
import '../Buttons.scss'

export default function AssignToButton() {
  const [assignedTo, setAssignedTo] = useState('Open For Anyone')

  return (
    <Dropdown>
      <Dropdown.Toggle
        id="dropdown-basic"
        className="rounded-sm hover:scale-105 flex items-center dropdownBtn text-black"
      >
        <span>{assignedTo}</span>
        <div className="flex-grow"></div>
        <IoIosArrowDown size={20} className="ml-1" />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          href="#/action-1"
          className="hover:bg-slate-300 hover:underline active:bg-slate-400"
          onClick={() => setAssignedTo('changed ')}
        >
          Action
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
