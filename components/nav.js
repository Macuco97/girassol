import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useAnimationControls } from 'framer-motion'

export default function Nav({navContent, setNavContent}) {
    const navContentAnimationControl = useAnimationControls()
    const navContentAnimationControlNewborn = useAnimationControls()
    const navContentAnimationControlAcompanhamento = useAnimationControls()
    const navContentAnimationControlFamilia = useAnimationControls()
    const navContentAnimationControlGestante = useAnimationControls()
    const AnimationsControl = [navContentAnimationControlNewborn, navContentAnimationControlAcompanhamento, navContentAnimationControlFamilia, navContentAnimationControlGestante]
    const navContentOptions = ['newborn', 'acompanhamento', 'familia', 'gestante']
    useEffect(() => {
        AnimationsControl.map((variant, index) => {
            if(index === navContent) {
                variant.start({
                    opacity: 1,
                    transition: {
                    durantion: 1
                }
                })
            }
            else {
                variant.start({
                    opacity: 0.5,
                    transition: {
                        durantion: 1
                    }
                })
            }
        })
    }, [navContent])
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
    const photosPath = ["/newborn/newborn1.jpg", '/acompanhamento/acompanhamento1.jpg', `/familia/familia1.jpg`, `/gestante/gestante1.jpg`]
    const photoCategory = ["newborn", "acompanhamento", "familia", "gestante"]
    return (
        <div>    
            <nav className = {`flex flex-row bg-amber-50 text-2xl uppercase text-center font-serif py-2 shadow-lg place-content-between items-center px-8 md:hidden`}>
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
            <nav className = {`hidden md:gap-2 md:flex md:flex-row w-screen px-2`}>
             {
                photosPath.map((url, index) => {
                    return (
                    <motion.div animate = {AnimationsControl[index]} onClick = {() => setNavContent(index)} className = {`block w-1/2 shadow mt-4 rounded opacity-50`}>
                        <div className = {`bg-amber-200 text-center font-semibold uppercase font-serif`}>{photoCategory[index]}</div>
                        <Image src = {url} layout = 'responsive' width = {100} height = {90}/>
                    </motion.div>
                    )
                })
             }   
            </nav>
        </div>
    )
}