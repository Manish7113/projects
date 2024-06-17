'use client'
import React, { useLayoutEffect, useState } from "react";
import SettingContext from "./settingContext";


const settingContextProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState('light')
    const [theme, setTheme] = useState('primary')
    
  
    useLayoutEffect(()=>{
        setDarkMode(localStorage.getItem('theme'))
        setTheme(localStorage.getItem('color'))
    }, [])
    
    
    
    
   
   
    const [themeSelector, setThemeSelector] = useState(false)
    return (<SettingContext.Provider value={{ darkMode, setDarkMode, theme, setTheme, themeSelector, setThemeSelector }}>{children}</SettingContext.Provider>)

}

export default settingContextProvider