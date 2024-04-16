import React from 'react';
import { NavBarProps } from '@/@types/navbar';
import Link from 'next/link';

import './style.css';

const Root = ({ children, ...props }: NavBarProps) => {
    return <nav {...props} className={`${props.className} nav-bar`}>{children}</nav>
};

const Logo = ({ children, ...props }: NavBarProps) => {
    return <div {...props} className={`${props.className} nav-bar-logo`}>{children}</div>
};

const Menu = ({ children, ...props }: NavBarProps) => {
    return <div className={`${props.className} nav-bar-menu`}>{children}</div>
};

const MenuLink = ({ children, href, onClick }: NavBarProps) => {
    return <Link onClick={onClick} href={`#${href}`} className='nav-bar-menu-link'>{children}</Link>
};

const End = ({ children, ...props }: NavBarProps) => {
    return <div {...props} className={`${props.className} nav-bar-end`}>{children}</div>
};

export { Root, Logo, Menu, MenuLink, End };