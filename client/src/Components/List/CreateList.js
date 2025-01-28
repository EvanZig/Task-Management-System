import React, { useState, useRef, useEffect } from 'react'

export default function CreateList() {
  const [addList, setAddList] = useState(false)
  const addListRef = useRef()

  const handleAddList = () => {
    setAddList(true)
  }

  useEffect(() => {
    addListRef.current?.focus()
  }, [addList])

  return (
    <div>
      <button
        className='bg-slate-400 border-2 border-black p-2 rounded-md font-semibold px-4 hover:bg-slate-500'
        onClick={handleAddList}
      >
        Add List
      </button>
      {addList && (
        <div>
          <input
            type='text'
            id='newListTitle'
            className='text-black p-1 rounded focus:outline-none focus:ring-2 focus:ring-slate-400'
            ref={addListRef}
          />
        </div>
      )}
    </div>
  )
}
