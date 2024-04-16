import { HTMLAttributes, ReactNode } from "react"

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    variant?: string,
    size?: 'sm' | 'md' | 'lg',
};

export interface ButtonIconProps extends HTMLAttributes<HTMLSpanElement> { icon: ReactNode };