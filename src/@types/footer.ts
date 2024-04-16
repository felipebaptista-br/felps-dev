import { HTMLAttributes, ReactNode } from 'react';

export interface FooterProps extends HTMLAttributes<HTMLDivElement> { children: ReactNode, variant?: 'row' | 'column' };