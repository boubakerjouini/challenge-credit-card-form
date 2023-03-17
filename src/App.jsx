import React from 'react'
import CardForm from './components/CardForm'
import CardFront from './assets/bg-card-front.png'
import CardBack from './assets/bg-card-back.png'
import CardLogo from './assets/card-logo.svg'
export function App() {
  return (
    <div className="flex flex-row bg-red-500 h-screen w-screen">
      <div className=" bg-main-desktop  w-1/2 shadow-r-xl  ">
        <img src={CardFront} alt="" className="absolute top-[8vw] left-[10vw] shadow-2xl h-22" />
        <div>
          <img src={CardLogo} className="absolute top-[8vw] left-[10vw] shadow-2xl h-22 mt-6 ml-6" />
          <p className="absolute top-[18vw] left-[12vw] text-white font-main-font text-2xl  tracking-widest">
            9591 6489 6389 101E
          </p>
        </div>

        <img src={CardBack} alt="" className="absolute top-[27vw] left-[18vw] shadow-2xl h-22" />
      </div>

      <div className="flex flex-col items-center align-middle justify-center bg-white w-full   ">
        <CardForm />
      </div>
    </div>
  )
}

export default App
