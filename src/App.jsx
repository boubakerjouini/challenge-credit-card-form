import React from 'react'
import CardForm from './components/CardForm'

export function App() {
  return (
    <div className="flex flex-row bg-red-500 h-screen w-screen">
      <div className=" bg-main-desktop  w-1/2 shadow-r-xl  "></div>
      <div className="flex flex-col items-center align-middle justify-center bg-white w-full   ">
        <CardForm />
      </div>
    </div>
  )
}

export default App
