'use client'
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useContext, useLayoutEffect, useState } from "react";
import settingContext from '../../@core/context/settingContext'

export default function Header() {

    const [ready , setReady] = useState(null)
    

    const {darkMode = 'light' , setDarkMode,   setThemeSelector, theme} = useContext(settingContext)
    document.querySelector('body').setAttribute('theme', darkMode)
    document.querySelector('body').setAttribute('color', theme)


    const handleMode = (type) => {
        if (type === 'dark') {
            document.querySelector('body').setAttribute('theme', 'dark')
            localStorage.setItem('theme', 'dark')
            setDarkMode(type)
        }
        else {
            document.querySelector('body').setAttribute('theme', 'light')
            localStorage.setItem('theme', 'light')
            setDarkMode(type)
        }

    }


    const showThemeCard = () =>{
        setThemeSelector(true)
    }

    

    return (
        <div className="header d-flex flex-row justify-content-around align-items-center pt-3 pb-3">
            <p className="logo p-0 m-0">Developer</p>
            <div>

            </div>
            <div className="d-flex justify-content-around align-items-center gap-3">
               
                {
                    darkMode === 'dark' ?   <Icon icon="ph:sun-light" className="headerIcon" onClick={() => {
                        handleMode('light')
                    }} />  :  <Icon icon="ph:moon" className="headerIcon" onClick={() => {
                        handleMode('dark')
                    }} />
                }
              
                <Icon icon="tabler:shirt" className="headerIcon"  onClick={()=>{
                    showThemeCard()
                }}/>
            </div>

        </div>
    )
}