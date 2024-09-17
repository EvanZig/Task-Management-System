import React, { useState } from 'react'

export default function CreateList() {
  const [addList, setAddList] = useState(false)

  return (
    <div>
      <button
        className='bg-slate-400 border-2 border-black p-2 rounded-md font-semibold px-4 hover:bg-slate-500'
        onClick={() => setAddList(true)}
      >
        Add List
      </button>
      {addList && (
        <div>
          <input type='text' id='newListTitle' />
        </div>
      )}
    </div>
  )
}
