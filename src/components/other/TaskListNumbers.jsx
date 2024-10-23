import React from 'react'

const TaskListNumbers = () => {
    return (
        <div className='flex mt-10 w-full justify-between gap-5'>
            <div className='w-[45%] p-6 px-9 bg-red-400 rounded-xl'>
                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-2xl font-medium'>New Task</h3>
            </div>
            <div className='w-[45%] p-6 px-9 bg-blue-400 rounded-xl'>
                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-2xl font-medium'>New Task</h3>
            </div>
            <div className='w-[45%] p-6 px-9 bg-green-400 rounded-xl'>
                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-2xl font-medium'>New Task</h3>
            </div>
            <div className='w-[45%] p-6 px-9 bg-yellow-400 rounded-xl'>
                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-2xl font-medium'>New Task</h3>
            </div>
        </div>
    )
}

export default TaskListNumbers
