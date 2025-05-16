import React, { useState } from 'react'
import './AttachFileButton.scss'

export default function AttachFileButton() {
  const [selectedFiles, setSelectedFiles] = useState([])

  const handleAttachFileChange = (e) => {
    const files = Array.from(e.target.files)
    setSelectedFiles(files)
    files.forEach((file) => {
      console.log(file.name)
    })
  }

  return (
    <div className='mb-3 flex mt-3'>
      <div className='w-[75%] text-sm'>
        {selectedFiles.length > 0
          ? selectedFiles.map((file, idx) => (
              <span key={idx} className='mr-2'>
                {file.name}
              </span>
            ))
          : 'No files selected'}
      </div>
      <label
        htmlFor='formFileMultiple'
        className='chooseButton ml-2 w-[25%] text-nowrap text-center italic'
      >
        attach files
      </label>
      <input
        type='file'
        id='formFileMultiple'
        multiple
        className='fileInput mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
        onChange={handleAttachFileChange}
      />
    </div>
  )
}
