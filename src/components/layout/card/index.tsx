import React, { ReactNode } from 'react';
import { CardProps } from '@/@types/card';

import './style.css';

const Root = ({ children, ...props }: CardProps) => {
    return <div {...props} className={`card ${props.className}`}>{children}</div>
}

const Icon = ({ icon }: { icon: ReactNode }) => {
    return <span className='card-icon'>{icon}</span>
}

const Title = ({ children }: CardProps) => {
    return <h1 className='card-title'>{children}</h1>
}

const Description = ({ children }: CardProps) => {
    return <p className='card-description'>{children}</p>
}

export { Root, Icon, Title, Description };