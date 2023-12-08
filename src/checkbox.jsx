import React, { useState } from 'react'
import { BsCheck } from "react-icons/bs";

function Checkbox({labelPosition}) {

    const [checked, setChecked] = useState(true);

    const clickHandler = () => {
        setChecked(!checked);
    }

  return (
    <>
        {labelPosition && <div className='flex justify-center items-center'>
         <div className='border-2 border-slate-300 w-6 h-6 flex items-center justify-center mr-2 font-semibold p rounded cursor-pointer'
         onClick={clickHandler}
        >
          {checked ? <BsCheck className='text-4xl' /> : ""}
         </div>
         <p className=''>I agree to sell my privacy</p>
         </div>}

        {!labelPosition && <div className='flex justify-center items-center'>
         <p className='mr-2'>I agree to sell my privacy</p>
         <div className='border-2 border-slate-300 w-6 h-6 flex items-center justify-center font-semibold p rounded cursor-pointer'
         onClick={clickHandler}
         >
         {checked ? <BsCheck className='text-4xl' /> : ""}
         </div>
         </div>}
    </>
  )
}

export default Checkbox;
