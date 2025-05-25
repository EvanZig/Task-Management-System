import Task from '../Tasks/Task/Task'

export default function MyTasks(props) {
  return (
    <div
      className='rounded-xl bg-[#a78c66] flex flex-col w-[22rem] min-h-40 taskWrapper m-2 border-2 border-black'
      draggable
    >
      <div className='rounded-lg m-1 my-2 flex justify-center items-center'>
        <div className='px-4 font-semibold text-xl taskWrapperTitle text-black'>
          {props.title}To do
        </div>
      </div>
      <div className='mx-2 '>
        <Task state='yellow' />
        <Task state='green' />
        <Task state='red' />
      </div>
    </div>
  )
}
