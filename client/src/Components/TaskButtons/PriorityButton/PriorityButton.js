import React, { useState } from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import {
  LuArrowDownCircle,
  LuArrowRightCircle,
  LuFileWarning,
} from 'react-icons/lu'

export default function PriorityButton() {
  const [color, setColor] = useState('blue')
  return (
    <DropdownButton
      className="absolute text-white bottom-0 right-[-1.5rem]"
      style={{
        borderTopLeftRadius: '15px',
        borderBottomLeftRadius: '15px',
      }}
      drop="start"
    >
      <div className="rounded-md h-[6rem] ">
        <DropdownItem
          className="h-1/3 flex justify-start items-center hover:bg-green-500"
          onClick={() => setColor('green')}
        >
          <LuArrowDownCircle className="w-[full] h-[full]" />
          <span className="ml-2">Low Priority</span>
        </DropdownItem>
        <DropdownItem
          className="h-1/3 flex justify-start items-center hover:bg-yellow-500"
          onClick={() => setColor('orange')}
        >
          <LuArrowRightCircle className="w-[full] h-[full]" />
          <span className="ml-2">Regular Priority</span>
        </DropdownItem>
        <DropdownItem
          className="h-1/3 flex justify-start items-center hover:bg-red-500"
          onClick={() => setColor('red')}
        >
          <LuFileWarning className="h-[full] w-[full]" />
          <span className="ml-2">High Priority</span>
        </DropdownItem>
      </div>
    </DropdownButton>
  )
}
