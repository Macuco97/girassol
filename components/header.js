import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
    return (
        <div className = {`flex flex-row sml-2 pt-2 px-2 text-bold font-serif place-content-between`}>
            <div className = {`text-2xl`}>(LOGO) Girassol Foto Estúdio</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
        </div>
    )
}