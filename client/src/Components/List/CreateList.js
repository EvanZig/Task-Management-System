import { useState, useRef, useEffect } from 'react'

export default function CreateList() {
  const [showInput, setShowInput] = useState(false)
  const inputRef = useRef()

  useEffect(() => {
    if (showInput) {
      inputRef.current?.focus()
    }
  }, [showInput])

  return (
    <div className='space-y-4'>
      <button
        className='bg-slate-400 border-2 border-black px-4 py-2 rounded-md font-semibold hover:bg-slate-500'
        onClick={() => setShowInput(true)}
      >
        Add List
      </button>

      {showInput && (
        <input
          type='text'
          id='newListTitle'
          ref={inputRef}
          className='text-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 w-full max-w-sm'
          placeholder='Enter list title...'
        />
      )}
    </div>
  )
}
