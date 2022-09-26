import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useAnimationControls } from 'framer-motion'

export default function Nav({navMobileStatus, setNavMobileStatus}) {
    const navContentOptions = ['newborn', 'acompanhamento', 'familia', 'gestante']
    const photosPath = ["/newborn/newborn1.jpg", '/acompanhamento/acompanhamento1.jpg', `/familia/familia1.jpg`, `/gestante/gestante1.jpg`]
    const photoCategory = ["newborn", "acompanhamento", "familia", "gestante"]

    const navAnimationControl = useAnimationControls()

    useEffect(() => {
        if(navMobileStatus) {
            navAnimationControl.start({
                width: "100vw",
            })
        }
        else {
            navAnimationControl.start({width: 0})
        }
    }, [navMobileStatus])

    return (
        <motion.nav animate = {navAnimationControl} className = {`bg-amber-50 right-0 h-screen w-0 fixed z-50 flex flex-col text-3xl uppercase font-serif place-content-center text-center gap-4 overflow-hidden md:hidden`}>
                <div>home</div>
                <div>portfolio</div>
                <div>sobre mim</div>
                <div>orçamento</div>
        </motion.nav>
    )
}