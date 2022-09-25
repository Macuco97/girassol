import { useState, useEffect } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

export default function About({ navContent, navSetContent }) { 
    const newborn = "Um ensaio realizado nos primeiros dias de vida do bebe, geralmente entre quinto e o décimo dia de vida para captar bem as expressão de um bebe recem nascido."
    const acompanhamento = "Um ensaio realizado mensalemnte para acommpanhar o primeiro ano de vida do bebe"
    const familia = "Um ensaio para captar toda a essência e o amor de uma familia e registrar sua linda história"
    const gestante = "Um ensaio para registrar todo o milagre e o começo de uma nova vida"
    const rehearsal = [newborn, acompanhamento, familia, gestante]
    const textAnimationControl = useAnimationControls()

    useEffect(() => {
        textAnimationControl.start({
            width: ["0%", "100%"],
            transition: {
                duration: 1.2,
            }
        })
    },[navContent])
    
    return ( 
        <div className = {`ml-2 mt-4`}>
            <div className = {`text-3xl font-bold font-serif underline underline-offset-4`}> 
                Sobre
            </div>
            <motion.div className = {`overflow-hidden`} animate = {textAnimationControl}>    
                <div className = {`font-mono font-semibold w-screen`}>
                    {rehearsal[navContent]}
                </div>
            </motion.div>
        </div>
    )
}