import { ReactNode } from 'react'
import Link from 'next/link'

import './style.css'

interface RootProps {
    children: ReactNode
}

function Root({ children }: RootProps) {
    return <div className='ui-nav-bar-root'><nav className='ui-nav-bar'>{children}</nav></div>
}

interface SectionNavProps {
    children: ReactNode
}

function SectionNav({ children }: SectionNavProps) {
    return <div className='ui-nav-section'>{children}</div>
}

interface NavLinkProps {
    children: ReactNode,
    href: string
}

function NavLink({ children, href }: NavLinkProps) {
    return <Link className='ui-nav-link' href={href}>{children}</Link>
}

interface NavLeftProps {
    children: ReactNode
}

function NavLeft({ children }: NavLeftProps) {
    return <div className='ui-nav-left'>{children}</div>
}

interface NavRightProps {
    children: ReactNode
}

function NavRight({ children }: NavRightProps) {
    return <div className='ui-nav-right'>{children}</div>
}

export {
    Root,
    SectionNav,
    NavLink,
    NavLeft,
    NavRight
}