import React from 'react'

const Header = ({data}) => {

  

  return (
    <div className='flex items-end justify-between pt-5 px-10'>
      <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold'>{data.firstName} 👋</span></h1>
      <button className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header
