import React from 'react'

const TaskList = ({data}) => {



  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
      
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-600 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
            <h4 className='text-sm'>20 Nov 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Management website</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptates nam modi praesentium aliquid sapiente incidunt doloribus quisquam, vitae dolores?</p>
      </div>
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-gray-600 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
            <h4 className='text-sm'>20 Nov 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Management website</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptates nam modi praesentium aliquid sapiente incidunt doloribus quisquam, vitae dolores?</p>
      </div>
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-600 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
            <h4 className='text-sm'>20 Nov 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Management website</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptates nam modi praesentium aliquid sapiente incidunt doloribus quisquam, vitae dolores?</p>
      </div>
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-600 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
            <h4 className='text-sm'>20 Nov 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a Management website</h2>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptates nam modi praesentium aliquid sapiente incidunt doloribus quisquam, vitae dolores?</p>
      </div>
    </div>
  )
}

export default TaskList
