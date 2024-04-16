import React from 'react';
import { AboutLayoutProps } from '@/@types/about';

import './style.css'

const Root = ({ title, description }: AboutLayoutProps) => {

    return (
        <div className='about-layout'>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
};

export { Root };