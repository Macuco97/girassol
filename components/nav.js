import { useEffect, useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

export default function Nav({navContent, setNavContent}) {
    useEffect(() => {
        navContentAnimation()
    }, [navContent])
    const navContentAnimationControl = useAnimationControls()
    const navContentAnimation = () => {
        navContentAnimationControl.start({
            opacity: [0, 1]
        })
    }
    const navContentOptions = ['newborn', 'acompanhamento', 'familia', 'gestante']
    const navContentTransition = position => {
        switch(position) {
            case 'right':
                if(navContent === 3) {
                    setNavContent(0)
                }
                else{
                    setNavContent(navContent + 1)
                }
                break;
            case 'left':
            if(navContent === 0) {
                setNavContent(3)
            }    
            else{
                    setNavContent(navContent - 1)
                }
        }
    }

    return (
        <nav className = {`flex flex-row bg-amber-50 text-2xl uppercase text-center font-serif py-2 shadow-lg place-content-between items-center px-8`}>
            <svg onClick = {() => navContentTransition('left')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-10 h-10`}>
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            <motion.div 
            className = {``}
            animate = {navContentAnimationControl}>
                {navContentOptions[navContent]}
            </motion.div>
            <svg onClick = {() => navContentTransition('right')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-10 h-10`}>
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </nav>
    )
}