import { HTMLAttributes, ReactNode } from "react";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode,
    variant?: 'column' | 'row'
    spacing?: string
};