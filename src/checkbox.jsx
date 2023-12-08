import React from 'react'

function checkbox() {
  return (
    <div className='flex justify-center items-center'>
      <div className='border-2 border-slate-300 w-6 h-6 flex items-center justify-center mr-2 font-semibold p-2 rounded'>
        ?
      </div>
      <p className=''>I agree to sell my privacy</p>
    </div>
  )
}

export default checkbox
