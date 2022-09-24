import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
    const [headerContainer, setHeaderContainer] = useState("")
    


    return (
        <div className = {headerContainer}>
            <motion.div layout = 'underline'>
                <div>Teste</div>
            </motion.div>
        </div>
    )
}