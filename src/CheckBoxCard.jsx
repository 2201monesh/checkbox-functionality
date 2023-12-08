import React, { useEffect, useState } from 'react'

function CheckBoxCard({labelPositionHandler}) {

    const [labelPosition, setLabelPosition] = useState(false);

    const labelLeftHandler = () => {
        setLabelPosition(true);
    }

    const labelRightHandler = () => {
        setLabelPosition(false);
    }

    useEffect(() => {
        labelPositionHandler(labelPosition);
    }, [labelPosition]);

  return (
    <div>
      <div>
        <p className=''>Label position</p>
        <div className='w-52 h-10 bg-slate-200 rounded flex'>
          <div className={`w-[50%] flex justify-center items-center ${labelPosition ? 'bg-white text-black border-2 border-slate-400 rounded' : ''}`}
           onClick={labelLeftHandler}
          >
            Left
          </div>
          <div className={`w-[50%] flex justify-center items-center ${!labelPosition ? 'bg-white text-black border-2 border-slate-400 rounded' : ''}`}
           onClick={labelRightHandler}
          >
            Right
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckBoxCard
