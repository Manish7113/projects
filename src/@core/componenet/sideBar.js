'use client'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useContext, useLayoutEffect } from "react";
import settingContext from '../../@core/context/settingContext'

export default function SideBar() {

    const { themeSelector = false, setThemeSelector , theme, setTheme} = useContext(settingContext)
    document.querySelector('body').setAttribute('color', theme)

    const handleClose = () => (setThemeSelector(false))


    const handleSelectTheme = (type) =>{
        
        handleClose()
        document.querySelector('body').setAttribute('color', type)
        localStorage.setItem('color' , type)
        setTheme(type)
    }
    return (
        <Offcanvas show={themeSelector} onHide={handleClose} placement={'end'}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Select Theme</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
               <div className='d-flex justify-content-center align-items-center flex-wrap gap-5'>
                <div className='color-selector gary 'onClick={()=>{
                    handleSelectTheme('error')
                }}>

                </div>
                <div className='color-selector orange' onClick={()=>{
                    handleSelectTheme('primary')
                }}>

                </div>
               
               
                <div className='color-selector yellow' onClick={()=>{
                    handleSelectTheme('warning')
                }}>

                </div>
                <div className='color-selector info' onClick={()=>{
                    handleSelectTheme('info')
                }}>

                </div>
                <div className='color-selector success' onClick={()=>{
                    handleSelectTheme('success')
                }}>

                </div>
                <div className='color-selector purple' onClick={()=>{
                    handleSelectTheme('purple')
                }}>

                </div>
                <div className='color-selector red' onClick={()=>{
                    handleSelectTheme('red')
                }}>

                </div>

               </div>

            </Offcanvas.Body>
        </Offcanvas>
    )
}