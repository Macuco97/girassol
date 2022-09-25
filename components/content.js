import { useState, useEffect } from 'react'
import { DragControls, motion, useAnimationControls } from 'framer-motion'
import Image from 'next/image'

export default function Content({ navContent, setNavContent }){
    const photosPath = ["/newborn/newborn1.jpg", '/acompanhamento/acompanhamento1.jpg', `/familia/familia1.jpg`, `/gestante/gestante1.jpg`]
    const galleryAnimationControl = useAnimationControls()
    
    useEffect(() => {
        galleryAnimationControl.start({
            opacity:[0.5, 1],
        })
    }, [navContent])
    
    

    return(
        <div className = {`md:hidden`}>
            <motion.div animate = {galleryAnimationControl}>
                <Image src = {photosPath[navContent]} layout = 'responsive' width = '100' height = '60'/>
            </motion.div>
        </div>
    )
}