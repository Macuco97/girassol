import { useState } from 'react'

export default function Header() {
    const [headerContainer, setHeaderContainer] = useState("bg-amber-100 flex flex-col gap-4 text-center px-12 py-8 font-semibold font-serif uppercase [&>*]:flex [&>*]:flex-row [&>*]:gap-8")
    


    return (
        <div className = {headerContainer}>
            <div className = {``}>    
                <div>
                    newborn
                </div>
                <div>
                    gestante
                </div>
            </div>
            <div>  
                <div>
                    familiar
                </div>      
                <div>
                    acompanhamento    
                </div>
            </div>
        </div>
    )
}