'use client';

import React from 'react';
import { WelcomeLayoutProps } from '@/@types/welcome';
import { motion } from 'framer-motion';

import './style.css';

const Root = ({ title, description }: WelcomeLayoutProps) => {

    return (
        <div className='welcome-layout'>
            <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                {title}
            </motion.h1>
            <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
            >
                {description}
            </motion.p>
        </div>
    )
}

export { Root }