import React from 'react'
import Task from '../Tasks/Task'
import './TaskWrapper.scss'

export default function MyTasks(props) {
  return (
    <div className="rounded-xl flex flex-col w-80 min-h-40 taskWrapper m-2">
      <div className="px-4 rounded-lg m-1 my-2 flex justify-center items-center taskWrapperTitle font-semibold text-lg">
        {props.title}To do
      </div>
      <div className="bg-black">
        <Task />
      </div>
    </div>
  )
}
