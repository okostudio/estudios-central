"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from 'next/navigation';

import React, { ReactNode } from "react";


interface TransitionLinkProps extends LinkProps {
    children: ReactNode;
    href: string;
}


function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


export const TransitionLink = ({
    children,
    href,
    ...props
}: TransitionLinkProps) => {
    const router = useRouter();

    const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

        const body = document.querySelector("body");

        body?.classList.add("page-transition-exit");

        await sleep(300)
        console.log('Navigating to', href);

        router.push(href);

        body?.classList.remove("page-transition-exit");
        body?.classList.add("page-transition-enter");
        await sleep(30); // Wait for the transition to complete
        body?.classList.remove("page-transition-enter");
    }

    return (
        <Link
            onClick={handleTransition}
            href={href}
            {...props}
        >
            {children}
        </Link>
    );
}