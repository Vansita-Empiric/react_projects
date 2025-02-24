import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(amount1)
  }
  const [newAmount, setNewAmount] = useState()
  const [newfrom, setNewFrom] = useState()
  const [newTo, setNewTo] = useState()
  const [newConvertedAmount, setNewConvertedAmount] = useState()

 
  // {newAmount} {newfrom.toUpperCase()} will be {newConvertedAmount} {newTo.toUpperCase()}
  const convert = () => {
   setNewAmount(amount.toFixed(3))
   setNewFrom(from.toUpperCase())
   setNewTo(to.toUpperCase())
   setNewConvertedAmount(amount1.toFixed(3))
  }

  console.log(newConvertedAmount);

  const amount1 = amount * currencyInfo[to]

  return (
    <div 
      className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{
        backgroundColor: 'grey'
      }}
    >
      <div className='w-full'>
        <div
          className='w-full max-w-md mx-auto border border-grey-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'
        >
          <form
            onSubmit={(e) => {
              e.preventDefault()
              // convert()
            }}
          >
            <div className='w-full mb-1'>
              <InputBox 
                label="From"
                amount={amount.toFixed(3)}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              ></InputBox>
            </div>
            <div className='relative w-full h-0.5'>
              <button 
                type='button'
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className='w-full mt-1 mb-4'>
              <InputBox 
                label="To"
                amount={amount1.toFixed(3)}
                currencyOptions={options}
                onCurrencyChange={(currency) => 
                  setTo(currency)
                  }
                selectCurrency={to} 
                amountDisable  
                
              ></InputBox>
            </div>
            <button
              type='submit'
              className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
              onClick={convert}
            >
              buy
            </button>
            <h3 >{newAmount} {newfrom} will be {newConvertedAmount} {newTo}</h3>
          </form>
        </div>
      </div>

    </div>
  )
}

export default App
