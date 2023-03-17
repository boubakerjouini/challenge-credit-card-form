import React from 'react'

const CardForm = () => {
  //make me a credit card form
  return (
    <div className="flex flex-col items-center align-middle justify-center bg-white w-full gap-3 ">
      {/* make me a credit card form */}
      <div className="w-1/2  ">
        <p className="font-main-font">CARDHOLDER NAME</p>
        <input
          type="text"
          className="border-2 border-gray-300 w-[350px] bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          placeholder="e.g. Jane Appleseed"
        />
        <p className="font-main-font mt-3">CARD NUMBER</p>
        <input
          type="text"
          className="border-2 border-gray-300 bg-white w-[350px] h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          placeholder="e.g. 1234 5678 9123 0000"
        />
        <div className="flex flex-row w-full mt-4  gap-4">
          <div>
            <p className="font-main-font text-sm ">EXP. DATA (MM/YY)</p>
            <div className="flex flex-row gap-2 ">
              <input
                type="text"
                className="border-2 font-main-font text-sm border-gray-300 bg-white w-20 h-10 px-3 text-[18px] rounded-lg  focus:outline-none"
                placeholder="MM"
              />
              <input
                type="text"
                className="border-2 font-main-font text-sm border-gray-300 bg-white w-20 h-10 px-3 text-[18px] rounded-lg  focus:outline-none"
                placeholder="YY"
              />
            </div>
          </div>
          <div className="">
            <p className="font-main-font text-sm">CVC</p>
            <input
              type="text"
              className="border-2 border-gray-300 bg-white h-10 px-5 w-full pr-16 rounded-lg text-sm focus:outline-none"
              placeholder="e.g. 123"
            />
          </div>
        </div>
      </div>
      <button className="bg-very-dark-violet text-white font-bold py-2 px-4 rounded">Submit</button>
    </div>
  )
}

export default CardForm
