import { createContext , useContext } from "react";

export const ThemeContext =  createContext({
    // default value to the thememode
    themeMode : "light",
    darktheme : ()=>{},
    lightheme : ()=>{}
})

// we are exporting the ThemeProvider from here not
// in seperate file
export const ThemeProvider = ThemeContext.Provider

// custom hook useTheme
export default function  useTheme(){
 return useContext(ThemeContext)
}