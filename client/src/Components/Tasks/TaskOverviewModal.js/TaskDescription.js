import React, { useState, useRef, useEffect } from 'react'
import { FaBold, FaCode, FaUnderline, FaItalic } from 'react-icons/fa'
import { TbFileDescription } from 'react-icons/tb'
import '../Tasks.scss'

export default function TaskDescription() {
  const [isBold, setIsBold] = useState(false)
  const [isUnderline, setIsUnderline] = useState(false)
  const [isItalic, setIsItalic] = useState(false)
  const [isCode, setIsCode] = useState(false)
  const [selectedText, setSelectedText] = useState('')
  const TaskDescriptionRef = useRef(null)

  useEffect(() => {
    if (TaskDescriptionRef.current) {
      TaskDescriptionRef.current.focus()
    }
  }, [])

  const handleTextSelect = () => {
    const selection = window.getSelection()
    if (selection) {
      const selectedContent = selection.toString()
      setSelectedText(selectedContent)
    }
  }

  const renderButton = (icon, isActive, onClick, label) => (
    <button
      className={`hover:cursor-pointer mr-2 hover:scale-110 ${
        isActive ? 'text-blue-400 scale-110' : ''
      }`}
      onClick={onClick}
      aria-label={label}
    >
      {icon}
    </button>
  )

  return (
    <div>
      <div className='flex justify-between bg-zinc-800 text-white border-2 border-darkYellow border-b-0 rounded-t-md'>
        <label className='text-semibold flex justify-center items-center pl-2'>
          Description <TbFileDescription size={18} className='ml-2' />
        </label>
        <div className='justify-end items-end px-1 pt-1 mr-1 flex mb-2'>
          {renderButton(
            <FaBold size={20} />,
            isBold,
            () => setIsBold(!isBold),
            'Bold',
          )}
          <div className='border-l border-gray-400 h-6 mr-2'></div>
          {renderButton(
            <FaUnderline size={19} />,
            isUnderline,
            () => setIsUnderline(!isUnderline),
            'Underline',
          )}
          <div className='border-l border-gray-400 h-6 mr-2'></div>
          {renderButton(
            <FaItalic size={20} />,
            isItalic,
            () => setIsItalic(!isItalic),
            'Italic',
          )}
          <div className='border-l border-gray-400 h-6 mr-2'></div>
          {renderButton(
            <FaCode size={20} />,
            isCode,
            () => setIsCode(!isCode),
            'Code',
          )}
        </div>
      </div>
      <textarea
        className='resize-none w-full rounded-b-md px-4 py-3 text-sm bg-zinc-700 outline-none border-2 border-zinc-400 border-solid focus:border-blue-400 customScrlbar'
        rows={9}
        onMouseUp={handleTextSelect}
        ref={TaskDescriptionRef}
        placeholder='Type your description here...'
      />
    </div>
  )
}
