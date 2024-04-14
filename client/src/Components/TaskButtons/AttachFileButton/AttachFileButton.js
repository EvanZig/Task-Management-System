import React from 'react'
import './AttachFileButton.scss'

export default function AttachFileButton() {
  return (
    <div className="mb-3 flex mt-3">
      <div className="w-[75%] text-sm">
        File Names.img, docuemnt.dc {' map them here somehow for hover effects'}
      </div>
      <label
        htmlFor="formFileMultiple"
        className="chooseButton ml-2 w-[25%] text-nowrap text-center italic"
      >
        attach files
      </label>
      <input
        type="file"
        id="formFileMultiple"
        multiple
        className="fileInput mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  )
}
