'use client';

import React from 'react';
import { FooterProps } from '@/@types/footer';
import { SiLinkedin as IconLinkedin, SiWhatsapp as IconWhatsapp } from "react-icons/si";

import './style.css';

const Root = ({ children, ...props }: FooterProps) => {
    return <footer {...props} className={`footer-layout ${props.className}`}>{children}</footer>
};

const Menu = ({ children, ...props }: FooterProps) => {
    return <div {...props} className='footer-layout-menu'>{children}</div>
};

const MenuItem = ({ children, variant, ...props }: FooterProps) => {
    return <div {...props} className={`footer-layout-menu-item footer-layout-menu-item-${variant}`}>{children}</div>
}

const SocialMedia = () => {
    return (
        <MenuItem variant='row'>
            <IconLinkedin onClick={() => window.open('https://www.linkedin.com/in/felpsbaptista/', '_blank')} size={30} cursor={'pointer'} />
            <IconWhatsapp size={30} cursor={'pointer'} />
        </MenuItem>
    )
}

const Copyright = ({ children, ...props }: FooterProps) => {
    return <p {...props} className='footer-layout-copyright'>{children}</p>
};

export { Root, Menu, MenuItem, SocialMedia, Copyright };