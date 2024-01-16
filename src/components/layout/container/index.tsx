import { ReactNode } from "react"

import "./style.css"

interface RootProps {
    children: ReactNode
}

function Root({ children }: RootProps) {
    return <div className='ui-container-root'>{children}</div>
}

export {
    Root
}