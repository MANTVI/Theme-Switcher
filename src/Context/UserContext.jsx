import React from 'react'
import { useContext,createContext } from 'react'

export const UserContext = createContext({
      // just like previous ,we pass value in provider but in this case we provide default value here first then we not need to provide value in provider 

    themeMode :'Light', 
    darkMode:()=>{

    },
    lightMode:()=>{

    }
})


export const ThemeProvider=UserContext.Provider

export function useTheme(){
    return useContext(UserContext)
 }