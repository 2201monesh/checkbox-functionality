import { useState } from 'react'
import './App.css'
import CheckBoxCard from './CheckBoxCard'
import Checkbox from './Checkbox'

function App() {

  const [labelPosition, setLabelPosition] = useState();
  const [labelText, setLabelText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  const [errorText, setErrorText] = useState("");

  const labelPositionHandler = (position) => {
    setLabelPosition(position)
  }

  const LabelTextHandler = (text) => {
    setLabelText(text);
  }

  const descriptionTextHandler = (desc) => {
    setDescriptionText(desc);
  }

  const errorTextHandler = (err) => {
    setErrorText(err);
  }
 
  return (
    <div className='w-full h-screen flex'>
     <div className='w-[70%] border-r-2 border-slate-300 h-screen flex items-center justify-center'>
      <Checkbox labelPosition={labelPosition} labelText={labelText} descriptionText={descriptionText} errorText={errorText} />
     </div>  
     <div className='w-[30%] flex items-center justify-center'>
      <CheckBoxCard labelPositionHandler={labelPositionHandler} LabelTextHandler={LabelTextHandler} descriptionTextHandler={descriptionTextHandler} errorTextHandler={errorTextHandler} />
     </div>
    </div>
  )
}

export default App
