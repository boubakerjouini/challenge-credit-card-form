import React from 'react'
import { useForm } from 'react-hook-form'

const CardForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  console.log(errors)

  const cardRegex = /^[1-9],{20}/i
  const cardMonthRegex = /^[1-9],{2}/i
  const cardYearRegex = /^[1-9],{2}/i
  const cardCvcRegex = /^[1-9],{3}/i

  const cardMonthandYearRegex = (month, year) => {
    if (cardMonthRegex.test(month) && cardYearRegex.test(year)) {
      return true
    } else {
      return false
    }
  }

  const validationCardNumber = () => {
    if (cardRegex.test(watch('cardNumber'))) {
      return true
    } else {
      return false
    }
  }
  return (
    <div className="flex flex-col  bg-white w-[700px] gap-3 ml-64">
      {/* make me a credit card form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-1/2 ml-40  ">
          <p className="font-main-font">CARDHOLDER NAME</p>
          <input
            type="text"
            className="border-2 border-gray-300 w-full bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mt-2"
            placeholder="e.g. Jane Appleseed"
          />

          <p className="font-main-font mt-4">CARD NUMBER</p>
          <input
            type="text"
            className="border-2 border-gray-300 bg-white w-full h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mt-2"
            placeholder="e.g. 1234 5678 9123 0000"
            {...register('cardNumber', {
              required: 'This is required',
              pattern: { value: cardRegex, message: 'Wrong format, numbers only' },
            })}
          />
          {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber.message}</p>}

          <div className="flex flex-row mt-4 gap-6  ">
            <div className="w-1/2">
              <p className="font-main-font text-sm  ">EXP. DATA (MM/YY)</p>
              <div className="flex flex-row gap-3 mt-2 ">
                <input
                  type="text"
                  className="border-2 font-main-font text-sm border-gray-300 bg-white w-1/2  h-10 px-3 text-[18px] rounded-lg  focus:outline-none"
                  placeholder="MM"
                  {...register('month', {
                    required: "Can't be blank",
                    pattern: { value: cardMonthRegex, message: 'Please verify your informations' },
                  })}
                />

                <input
                  type="text"
                  className="border-2 font-main-font text-sm border-gray-300 bg-white w-1/2 h-10 px-3 text-[18px] rounded-lg  focus:outline-none"
                  placeholder="YY"
                  {...register('year', {
                    required: "Can't be blank",
                    pattern: { value: cardYearRegex, message: 'Please verify your informations' },
                  })}
                />
              </div>
              {errors.month && <p className="text-red-500 text-sm">{errors.month.message}</p>}
            </div>
            <div className="w-1/2">
              <p className="font-main-font text-sm">CVC</p>
              <input
                type="text"
                className="border-2 border-gray-300 bg-white h-10 px-5 pr-16  w-full rounded-lg text-sm focus:outline-none mt-2"
                placeholder="e.g. 123"
                {...register('cvc', {
                  required: "Can't be blank",
                  pattern: { value: cardCvcRegex, message: 'Please verify your informations' },
                })}
              />
            </div>
            {errors.cvc && <p className="text-red-500 text-sm">{errors.cvc.message}</p>}
          </div>
          <button className="bg-very-dark-violet text-white font-light w-full py-2 px-4 rounded-lg h-12 mt-6">
            Confirm
          </button>
        </div>
      </form>
    </div>
  )
}

export default CardForm
