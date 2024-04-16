'use client';

import React from "react";
import { openChatWhatsapp } from "@/api/whatsapp";
import { Button, NavBar } from "@/components"
import Image from "next/image";
import Logo from '@/assets/logo.png';

const Root = () => {
    return (
        <NavBar.Root>
            <NavBar.Logo><Image src={Logo} alt='Logo' /></NavBar.Logo>
            <NavBar.Menu>
                <NavBar.MenuLink href='home'>Home</NavBar.MenuLink>
                <NavBar.MenuLink href='project'>Projetos</NavBar.MenuLink>
                <NavBar.MenuLink href='contact'>Contato</NavBar.MenuLink>
            </NavBar.Menu>
            <NavBar.End>
                <Button.Root onClick={() => openChatWhatsapp({ phoneNumber: '5511964047331' })} variant='primary' size='md'>Chat me</Button.Root>
            </NavBar.End>
        </NavBar.Root>
    )
}

export { Root };