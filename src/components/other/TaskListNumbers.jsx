import React from 'react'

const TaskListNumbers = ({data}) => {



    return (
        <div className='flex mt-10 w-full justify-between gap-5'>
            <div className='w-[45%] p-6 px-9 bg-blue-400 rounded-xl'>
                <h2 className='text-3xl font-semibold'>{data.taskNumber.newTask}</h2>
                <h3 className='text-2xl font-medium'>New Tasks</h3>
            </div>
            <div className='w-[45%] p-6 px-9 bg-yellow-400 rounded-xl'>
                <h2 className='text-3xl font-semibold'>{data.taskNumber.active}</h2>
                <h3 className='text-2xl font-medium'>Active Tasks</h3>
            </div>
            <div className='w-[45%] p-6 px-9 bg-green-400 rounded-xl'>
                <h2 className='text-3xl font-semibold'>{data.taskNumber.completed}</h2>
                <h3 className='text-2xl font-medium'>Completed Tasks</h3>
            </div>
            <div className='w-[45%] p-6 px-9 bg-red-400 rounded-xl'>
                <h2 className='text-3xl font-semibold'>{data.taskNumber.failed}</h2>
                <h3 className='text-2xl font-medium'>Failed Tasks</h3>
            </div>
        </div>
    )
}

export default TaskListNumbers
