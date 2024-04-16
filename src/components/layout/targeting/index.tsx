import React from 'react';
import { TargetingProps } from '@/@types/TargetingProps';

import './style.css';

const Root = ({ children, ...props }: TargetingProps) => {
    return <div {...props} className={`targeting-layout ${props.className}`}>{children}</div>
};

const Title = ({ children, ...props }: TargetingProps) => {
    return <h1 {...props} className='targeting-title'>{children}</h1>
};

const Description = ({ children, ...props }: TargetingProps) => {
    return <p {...props} className='targeting-description'>{children}</p>
};

export { Root, Title, Description };