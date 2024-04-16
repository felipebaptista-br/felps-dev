import React from 'react';
import { ButtonIconProps, ButtonProps } from '@/@types/button';

import './style.css';

const Root = ({ children, variant, size, ...props }: ButtonProps) => {
    return <button {...props} className={`button button-${size} button-${variant} ${props.className}`}>{children}</button>
};

const IconLeft = ({ icon, ...props }: ButtonIconProps) => {
    return <span {...props} className={`button-icon-left ${props.className}`}>{icon}</span>
};

const IconRight = ({ icon, ...props }: ButtonIconProps) => {
    return <span {...props} className={`button-icon-right ${props.className}`}>{icon}</span>
};

export { Root, IconLeft, IconRight };