import React, { useState } from 'react'
import { FaBold, FaCode, FaUnderline, FaItalic } from 'react-icons/fa'
import { TbFileDescription } from 'react-icons/tb'

export default function TaskDescription(props) {
  const [isBold, setIsBold] = useState(false)
  const [isUnderline, setIsUnderline] = useState(false)
  const [isCode, setIsCode] = useState(false)
  const [isTyping, setIsTyping] = useState(false)

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
    <div className="">
      <div
        className={`flex justify-between bg-zinc-600 text-white border-2 border-transparent ${
          isTyping ? 'border-black' : ' '
        }`}
      >
        <label className="text-semibold flex justify-center items-center pl-2">
          Description <TbFileDescription size={17} className="ml-1" />
        </label>
        <div className="justify-end items-end px-1 pt-1 mr-1">
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
        className="text-black resize-none w-full rounded-sm p-2 text-sm bg-gray-50 outline-none border-2 border-solid focus:border-black"
        rows={11}
        onFocus={() => setIsTyping(true)}
        onAbort={() => setIsTyping(false)}
      >
        . . .
      </textarea>
    </div>
  )
}
