import React from 'react'

const CreateTask = () => {
  return (
    <div className='flex justify-center items-center'>
                <form className='flex items-start w-full bg-[#1c1c1c] m-10 p-5 rounded justify-between'>

                    <div className='w-1/2'>
                        <div>
                            <h3 className='text-gray-200 mt-3'>Task Title</h3>
                            <input className='placeholder:text-gray-400 bg-transparent border-2 border-gray-400  mt-1 p-1 rounded-md w-[90%]' type="text" placeholder='Make a website' />
                        </div>
                        <div>
                            <h3 className='text-gray-200 mt-3'>Date</h3>
                            <input className='placeholder:text-gray-400 bg-transparent border-2 border-gray-400  mt-1 p-1 rounded-md w-[90%]' type="date" placeholder='dd/mm/yyyy' />
                        </div>
                        <div>
                            <h3 className='text-gray-200 mt-3'>Assign to</h3>
                            <input className='placeholder:text-gray-400 bg-transparent border-2 border-gray-400  mt-1 p-1 rounded-md w-[90%]' type="text" placeholder='Employee name' />
                        </div>
                        <div>
                            <h3 className='text-gray-200 mt-3'>Category</h3>
                            <input className='placeholder:text-gray-400 bg-transparent border-2 border-gray-400  mt-1 p-1 rounded-md w-[90%]' type="text" placeholder='design, dev, etc...' />
                        </div>
                        
                    </div>

                    <div className='w-1/2'>
                        <div className='w-full mt-3'>
                            <h3>Description</h3>
                            <textarea className='w-[90%] h-56 bg-transparent border-2 border-gray-400 rounded p-1' placeholder='Enter task details' name="" id=""></textarea>
                        </div>
                        <button className='w-[90%] bg-emerald-500 p-1 mt-1 rounded'>Create Task</button>
                    </div>

                </form>
            </div>
  )
}

export default CreateTask
