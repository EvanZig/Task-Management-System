import React, { useState } from 'react'
import { FaBold, FaCode, FaUnderline, FaItalic } from 'react-icons/fa'

export default function TaskDescription(props) {
  const [isBold, setIsBold] = useState(false)
  const [isUnderline, setIsUnderline] = useState(false)
  const [isCode, setIsCode] = useState(false)

  const boldClick = () => {
    console.log('bold clicked')
    setIsBold(!isBold)
  }

  const underlineClick = () => {
    console.log('underline clicked')
    setIsUnderline(!isUnderline)
  }

  const codeClick = () => {
    console.log('code clicked')
    setIsCode(!isCode)
  }

  return (
    <div className="descriptionWrapper">
      <div className="flex justify-between ">
        <label className="text-semibold ">Description</label>
        <div
          className="justify-end items-end border-2 px-1 pt-1 border-black bg-gray-100 text-black mr-1"
          style={{ borderRadius: '8px 8px 0 0', borderBottomColor: 'white' }}
        >
          <button className="hover:cursor-pointer mr-2 hover:scale-110">
            <FaBold size={18} onClick={boldClick} />
          </button>
          <button className="hover:cursor-pointer mr-2 hover:scale-110">
            <FaUnderline size={17} onClick={underlineClick} />
          </button>
          <button className="hover:cursor-pointer mr-2 hover:scale-110">
            <FaItalic size={18} onClick={underlineClick} />
          </button>
          <button className="hover:cursor-pointer mr-1 hover:scale-110">
            <FaCode size={18} onClick={codeClick} />
          </button>
        </div>
      </div>
      <textarea
        className="text-black resize-none w-[100%] rounded p-1 text-sm line titleInput bg-gray-100"
        rows={6}
      >
        Hello from description
        {/* <div onClick={props.formDataChange}>Hello from description</div> */}
      </textarea>
    </div>
  )
}
