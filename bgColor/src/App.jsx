import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    
      <div className="w-full h-screen" style={{backgroundColor:color}}>
        <div className=' fixed p-2 rounded-xl flex flex-wrap justify-center bottom-12 inset-x-0'>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className='text-white  rounded-lg p-2'  onClick={()=>setColor("red")} style={{backgroundColor:"red"}}>Red</button>
            <button className='text-white  rounded-lg p-2' onClick={()=>setColor("yellow")} style={{backgroundColor:"yellow"}}>Yellow</button>
            <button className='text-white  rounded-lg p-2' onClick={()=>setColor("blue")} style={{backgroundColor:"blue"}}>Blue</button>
            <button className='text-white  rounded-lg p-2' onClick={()=>setColor("olive")} style={{backgroundColor:"olive"}} >olive</button>
            <button className='text-white  rounded-lg p-2' onClick={()=>setColor("grey")} style={{backgroundColor:"grey"}}>Grey</button>
            <button className='text-white  rounded-lg p-2' onClick={()=>setColor("pink")} style={{backgroundColor:"Pink"}}>Pink</button>
            <button className='text-white  rounded-lg p-2' onClick={()=>setColor("orange")} style={{backgroundColor:"orange"}}>Orange</button>

        </div>
        </div>
      </div>
    
  )
}

export default App
