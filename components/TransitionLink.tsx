"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from 'next/navigation';
import { HoverContext } from "@/components/common/HoverContext";
import React, { ReactNode, useContext } from "react";


interface TransitionLinkProps extends LinkProps {
    children: ReactNode;
    href: string;
    classes?: string
    hoverText?: string
    hoverScale?: number
}


function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


export const TransitionLink = ({
    children,
    href,
    classes,
    hoverText,
    hoverScale,
    ...props
}: TransitionLinkProps) => {
    const router = useRouter();
    const { setItemHovered } = useContext(HoverContext);

    const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

        const body = document.querySelector("body");

        body?.classList.add("page-transition-exit");
        await sleep(150)
        router.push(href);
        await sleep(150)


        body?.classList.remove("page-transition-exit");
    }

    return (
        <Link
            className={classes}
            onClick={handleTransition}

            onMouseMove={(e) => {
                if (hoverText) {
                    setItemHovered({
                        x: e.clientX,
                        y: e.clientY,
                        text: hoverText,
                        scale: hoverScale ? hoverScale : 1,
                    });
                }
            }}
            href={href}
            {...props}
        >
            {children}
        </Link>
    );
}