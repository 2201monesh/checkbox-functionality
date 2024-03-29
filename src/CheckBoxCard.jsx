import React, { useEffect, useState } from 'react'
import CheckBoxColor from './CheckBoxColor';

function CheckBoxCard({labelPositionHandler, LabelTextHandler, descriptionTextHandler, errorTextHandler, colorCheck}) {

    const [labelPosition, setLabelPosition] = useState(true);
    const [labelText, setLabelText] = useState("I agree to sell my privacy");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");

    const labelLeftHandler = () => {
        setLabelPosition(true);
    }

    const labelRightHandler = () => {
        setLabelPosition(false);
    }

    const labelTextHandler = (e) => {
        setLabelText(e.target.value);
    }

    const descriptionHandler = (e) => {
        setDescription(e.target.value);
    }

    const errorHandler = (e) => {
        setError(e.target.value);
    }

    useEffect(() => {
        labelPositionHandler(labelPosition);
    }, [labelPosition]);

    useEffect(() => {
        LabelTextHandler(labelText)
    }, [labelText])

    useEffect(() => {
        descriptionTextHandler(description);
    }, [description]);

    useEffect(() => {
        errorTextHandler(error);
    }, [error])

  return (
    <div>
      <div>
        <p className=''>Label position</p>
        <div className='w-52 h-10 bg-slate-200 rounded flex'>
          <div className={`w-[50%] flex justify-center items-center cursor-pointer ${labelPosition ? 'bg-white text-black border-2 border-slate-400 rounded' : ''}`}
           onClick={labelLeftHandler}
          >
            Left
          </div>
          <div className={`w-[50%] flex justify-center items-center cursor-pointer ${!labelPosition ? 'bg-white text-black border-2 border-slate-400 rounded' : ''}`}
           onClick={labelRightHandler}
          >
            Right
          </div>
        </div>
      </div>

      <div className='mt-2'>
        <p className=''>Label</p>
        <div>
            <input className='w-52 h-10 p-2 border border-slate-400 rounded' value={labelText} onChange={labelTextHandler} type="text" />
        </div>
      </div>

      <div className='mt-2'>
        <p>Description</p>
        <div>
            <input className='w-52 h-10 p-2 border border-slate-400 rounded' value={description} onChange={descriptionHandler} type="text" />
        </div>
      </div>

      <div className='mt-2'>
        <p>Error</p>
        <div>
            <input className='w-52 h-10 p-2 border border-slate-400 rounded' onChange={errorHandler} type="text" />
        </div>
      </div>

      <div className='mt-2'>
        <p>Color</p>
        <CheckBoxColor colorCheck={colorCheck} />
      </div>
    </div>
  )
}

export default CheckBoxCard
