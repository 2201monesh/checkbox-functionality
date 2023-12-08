import React, { useEffect, useState } from 'react'

function CheckBoxColor({colorCheck}) {

    const [color, setColor] = useState('bg-blue-900');

    const handleClickColor = (event) => {
        setColor(event);
    }

    useEffect(() => {
        colorCheck(color);
    }, [color])

  return (
    <div className='w-52 flex flex-wrap p-[4px]'>
      <div className='w-9 h-8 m-[2px] cursor-pointer rounded bg-red-500' onClick={() => handleClickColor('bg-red-500')}></div>
      <div className='w-9 h-8 m-[2px] cursor-pointer rounded bg-orange-500' onClick={() => handleClickColor('bg-orange-500')}></div>
      <div className='w-9 h-8 m-[2px] cursor-pointer rounded bg-amber-400' onClick={() => handleClickColor('bg-amber-400')}></div>
      <div className='w-9 h-8 m-[2px] cursor-pointer rounded bg-lime-500' onClick={() => handleClickColor('bg-lime-500')}></div>
      <div className='w-9 h-8 m-[2px] cursor-pointer rounded bg-cyan-500' onClick={() => handleClickColor('bg-cyan-500')}></div>
      <div className='w-9 h-8 m-[2px] cursor-pointer rounded bg-blue-900' onClick={() => handleClickColor('bg-blue-900')}></div>
      <div className='w-9 h-8 m-[2px] cursor-pointer rounded bg-violet-600' onClick={() => handleClickColor('bg-violet-600')}></div>
      <div className='w-9 h-8 m-[2px] cursor-pointer rounded bg-rose-500' onClick={() => handleClickColor('bg-rose-500')}></div>
      <div className='w-9 h-8 m-[2px] cursor-pointer rounded bg-pink-950' onClick={() => handleClickColor('bg-pink-950')}></div>
      <div className='w-9 h-8 m-[2px] cursor-pointer rounded bg-slate-500' onClick={() => handleClickColor('bg-slate-500')}></div>
    </div>
  )
}

export default CheckBoxColor
