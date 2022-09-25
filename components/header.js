import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
    return (
        <div className = {`hidden md:block ml-2 pt-2 text-bold font-serif`}>
            <motion.div>
                <div className = {`text-3xl`}>Girassol Foto Estúdio</div>
            </motion.div>
        </div>
    )
}