import { createContext , useContext } from "react";

// 1. Creating the context with default values
export const ThemeContext =  createContext({
    // default value to the thememode is light
    themeMode : "light",
    darktheme : ()=>{},
    lightheme : ()=>{}
})

// 2. Exporting the Provider so it can be used in App.jsx or other root component
// we are exporting the ThemeProvider from here not
// in seperate file
export const ThemeProvider = ThemeContext.Provider


// 3. Creating a custom hook to use the context easily
// custom hook useTheme
export default function  useTheme(){
 return useContext(ThemeContext)
}