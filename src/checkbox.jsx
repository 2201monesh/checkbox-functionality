import React, { useState } from 'react'
import { BsCheck } from "react-icons/bs";

function Checkbox() {

    const [checked, setChecked] = useState(true);

    const clickHandler = () => {
        setChecked(!checked);
    }

  return (
    <div className='flex justify-center items-center'>
      <div className='border-2 border-slate-300 w-6 h-6 flex items-center justify-center mr-2 font-semibold p rounded cursor-pointer'
       onClick={clickHandler}
      >
        {checked ? <BsCheck className='text-4xl' /> : ""}
      </div>
      <p className=''>I agree to sell my privacy</p>
    </div>
  )
}

export default Checkbox;
