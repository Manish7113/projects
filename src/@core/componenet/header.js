'use client'
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function Header() {

    const handleMode = (type) => {
        if (type === 'dark') {
            document.querySelector('body').setAttribute('theme', 'dark')
            localStorage.setItem('theme', 'dark')
        }
        else {
            document.querySelector('body').setAttribute('theme', 'light')
            localStorage.setItem('theme', 'light')

        }

    }
    return (
        <div className="header d-flex flex-row justify-content-around align-items-center pt-3 pb-3">
            <p className="logo p-0 m-0">Developer</p>
            <div>

            </div>
            <div className="d-flex justify-content-around align-items-center gap-3">
                <Icon icon="ph:moon" className="headerIcon" onClick={() => {
                    handleMode('dark')
                }} />
                <Icon icon="ph:sun-light" className="headerIcon" onClick={() => {
                    handleMode('light')
                }} />
                <Icon icon="tabler:shirt" className="headerIcon" />
            </div>

        </div>
    )
}