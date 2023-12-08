import './App.css'
import CheckBoxCard from './CheckBoxCard'
import Checkbox from './Checkbox'

function App() {

  return (
    <div className='w-full h-screen flex'>
     <div className='w-[70%] border-r-2 border-slate-300 h-screen flex items-center justify-center'>
      <Checkbox />
     </div>  
     <div className='w-[30%] flex items-center justify-center'>
      <CheckBoxCard />
     </div>
    </div>
  )
}

export default App
