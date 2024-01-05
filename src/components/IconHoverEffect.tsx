import { ReactNode } from "react"

type IconHoverEffectProps = {
    children: ReactNode
    red?:boolean
}


export function IconHoverEffect ({children, red = false}: 
    IconHoverEffectProps)   {
        const colorClasses = red ? "outline-red-400 hover:bg-red-200 group-hover-bg-200 group-foucs-visible:bg-red-200 focus-visible:bg-red-200" : "outline-gray-400 hover:bg-gray-200 group-hover-bg-200 group-foucs-visible:bg-gray-200 focus-visible:bg-gray-200";


        return <div className={`rounded-full p-2 trasnsition-colors duratioin-200 ${colorClasses}`}>{children}</div>
}