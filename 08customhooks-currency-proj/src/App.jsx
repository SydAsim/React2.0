import { use, useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyinfo';

import './App.css' 

function App() {
  const[amount , setAmount] = useState(0);
  const[from   , setFrom]  = useState("usd");
  const[to   , setTo]  = useState("pkr");
  const[convertedAmount, setConvertedAmount] = useState(0)

  // we are using custom hook UseCurrencyInfo  and it will process 
  // the from value now the data returning will be in object{} in keys
  // and value so we want keys(country short names pkr,usd etc ) from the object so 
  const currencyInfo = useCurrencyInfo(from)
  const  options = Object.keys(currencyInfo)


  // Now swap Functionality 
  const swap =  ( )=>{
    setTo(from)
    setFrom(to)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  // Now convert the amount
  
  const convert = ()=>{
    setConvertedAmount( amount * currencyInfo[to])

  }



    return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://c7.alamy.com/comp/2G9JNT9/stock-exchange-board-market-index-graphs-and-charts-vector-background-stock-exchange-board-display-with-prices-and-currency-financial-data-of-elect-2G9JNT9.jpg')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 
            rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">

                      {/* calling the InputBox Componenet */}
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setAmount(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />

                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisabled
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
  
 
 
}

export default App
