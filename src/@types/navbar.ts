import { HTMLAttributes, ReactNode } from "react";

export interface NavBarProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode,
    src?: ReactNode,
    alt?: string,
    href?: string,
    onClick?: () => void
};