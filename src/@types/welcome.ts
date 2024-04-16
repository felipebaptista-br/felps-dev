import { HTMLAttributes } from "react";

export interface WelcomeLayoutProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    description: string;
};