import React, { useState } from 'react'
import { FaBold, FaCode, FaUnderline, FaItalic } from 'react-icons/fa'
import { TbFileDescription } from 'react-icons/tb'

export default function TaskDescription(props) {
  const [isBold, setIsBold] = useState(false)
  const [isUnderline, setIsUnderline] = useState(false)
  const [isItalic, setIsItalic] = useState(false)
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

  const italicClick = () => {
    console.log('italic clicked')
    setIsItalic(!isItalic)
  }

  const codeClick = () => {
    console.log('code clicked')
    setIsCode(!isCode)
  }

  return (
    <div>
      <div className="flex justify-between bg-zinc-800 text-white border-2 border-zinc-400 border-b-0 rounded-t-md">
        <label className="text-semibold flex justify-center items-center pl-2">
          Description <TbFileDescription size={18} className="ml-2" />
        </label>
        <div className="justify-end items-end px-1 pt-1 mr-1 flex mb-2">
          <button
            className={`hover:cursor-pointer mr-2 hover:scale-110 ${
              isBold ? 'text-blue-400 scale-110' : ''
            }`}
          >
            <FaBold size={20} onClick={boldClick} />
          </button>
          <div className="border-l border-gray-400 h-6 mr-2"></div>
          <button
            className={`hover:cursor-pointer mr-2 hover:scale-110 ${
              isUnderline ? 'text-blue-400 scale-110' : ''
            }`}
          >
            <FaUnderline size={19} onClick={underlineClick} />
          </button>
          <div className="border-l border-gray-400 h-6 mr-2"></div>
          <button
            className={`hover:cursor-pointer mr-2 hover:scale-110 ${
              isItalic ? 'text-blue-400 scale-110' : ''
            }`}
          >
            <FaItalic size={20} onClick={italicClick} />
          </button>
          <div className="border-l border-gray-400 h-6 mr-2"></div>
          <button
            className={`hover:cursor-pointer mr-2 hover:scale-110 ${
              isCode ? 'text-blue-400 scale-110' : ''
            }`}
          >
            <FaCode size={20} onClick={codeClick} />
          </button>
        </div>
      </div>
      <textarea
        className="resize-none w-full rounded-b-md px-4 py-3 text-sm bg-zinc-700 outline-none border-2 border-zinc-400 border-solid focus:border-blue-400"
        rows={9}
        onFocus={() => setIsTyping(true)}
        onAbort={() => setIsTyping(false)}
      >
        . . .
      </textarea>
    </div>
  )
}
