import React from 'react';
import { ContainerProps } from '@/@types/container';

import './style.css';

const FullWidth = ({ children, variant, spacing, ...props }: ContainerProps) => {
    return <div {...props} style={{ gap: spacing }} className={`container-full-width container-full-width-${variant} ${props.className}`}>{children}</div>
};

const AutoWidth = ({ children, variant, spacing, ...props }: ContainerProps) => {
    return <div {...props} style={{ gap: spacing }} className={`container-auto-width container-auto-width-${variant} ${props.className}`}>{children}</div>
};

export { FullWidth, AutoWidth };