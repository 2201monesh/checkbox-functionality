import React, { useState } from 'react'
import { BsCheck } from "react-icons/bs";

function Checkbox({labelPosition, labelText, descriptionText, errorText, color}) {

    const [checked, setChecked] = useState(true);

    const clickHandler = () => {
        setChecked(!checked);
    }

  return (
    <div>
        {labelPosition && <div className='flex justify-center items-center'>
         <div className={`border-2 border-slate-300 w-6 h-6 flex items-center justify-center mr-2 font-semibold p rounded cursor-pointer ${checked ? color : ''} ${checked ? 'border-none' : ''}`}
         onClick={clickHandler}
        >
          {checked ? <BsCheck className='text-4xl text-white' /> : ""}
         </div>
         <p className=''>{labelText}</p>
         </div>}

        {!labelPosition && <div className='flex justify-center items-center'>
         <p className='mr-2'>{labelText}</p>
         <div className={`border-2 border-slate-300 w-6 h-6 flex items-center justify-center font-semibold p rounded cursor-pointer ${checked ? color : ''} ${checked ? 'border-none' : ''}`}
         onClick={clickHandler}
         >
         {checked ? <BsCheck className='text-4xl text-white' /> : ""}
         </div>
         </div>}

         <p className='text-sm text-slate-500 mt-1'>{descriptionText}</p>

         <p className='text-sm text-red-500'>{errorText}</p>

    </div>
  )
}

export default Checkbox;
