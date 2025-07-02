import { useState ,useEffect} from 'react'
import './App.css'
import { ThemeProvider } from './contexts/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode ,setThemeMode] = useState("light")

  const lightheme = ()=>{
    setThemeMode("light")
  }

const darktheme = ()=>{
    setThemeMode("dark")
  }


  // Actual change in theme 
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  

   

  return (
    <ThemeProvider
    value={{themeMode, darktheme ,lightheme}}
    >
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* Themebtn */}
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Card */}
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App

// so by using useContext we are accessing the methods and provides 
// by the ThemeProvider in the ThemeBtn so that is toggle is possiable to 
// dark and light modes is made possiable 