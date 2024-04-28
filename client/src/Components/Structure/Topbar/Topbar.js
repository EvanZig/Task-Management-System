import React from 'react'

export default function Topbar() {
  const changeTemplate = () => {
    console.log('Template Changed')
  }
  return (
    <div>
      Topbar Template
      <button
        className="border-2 border-black rounded-lg bg-slate-200 text-black hover:bg-slate-300"
        onClick={changeTemplate}
      >
        Template
      </button>
    </div>
  )
}
