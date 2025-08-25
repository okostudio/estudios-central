'use client'

import React, { useEffect, useRef, useState } from "react"
import { CentralLogoLoaderText } from './Logos'

import gsap, { Power4 } from "gsap";
// import { useWindowSize } from "@uidotdev/usehooks";
// import useDeviceDetection from "@/libs/hooks/useDeviceDetection";
import { useGSAP } from "@gsap/react";

type LoaderProps = {
    children: React.ReactNode;
};

const PageLoader = ({
    children,
}: LoaderProps) => {

    const ref = useRef<HTMLDivElement | null>(null);
    const innerRef = useRef<HTMLDivElement | null>(null);
    const { contextSafe } = useGSAP({ scope: ref });
    const [pageLoaded, setPageLoaded] = useState<boolean>(false)

    const startAnimation = contextSafe(() => {

        const tl = gsap.timeline(
            { onComplete: () => { setPageLoaded(true) } }
        )
            // .set(ref.current, { mixBlendMode: "none" })
            // .set(".logo-text-1", { opacity: 1 })
            // .to(".logo-text-1", { display: "none", duration: 0.1 })
            // .set(".logo-text-2", { opacity: 1 })
            // .to(".logo-text-2", { display: "none", duration: 0.1 })
            // .set(".logo-text-3", { opacity: 1 })
            // .to(".logo-text-3", { display: "none", duration: 0.1 })
            // .set(".logo-text-4", { opacity: 1 })
            // .to(".logo-text-4", { display: "none", duration: 0.1 })
            // .set(".logo-text-5", { opacity: 1 })
            // .to(".logo-text-5", { display: "none", duration: 0.1 })
            // .set(".logo-text-6", { opacity: 1 })
            // .to(".logo-text-6", { display: "none", duration: 0.1 })
            // .set(".logo-text-7", { opacity: 1 })
            // .to(".logo-text-7", { display: "none", duration: 0.1 })
            .set(ref.current, { mixBlendMode: "multiply" })
            .set(innerRef.current, { scale: 0.1 })
            .to(innerRef.current, { duration: 1.5, scale: 12, ease: Power4.easeInOut })
            .set(".logo-text-8", { opacity: 1 }, "-=1.5")
            .to(".logo-text-8", { duration: 1 }, "-=1.5")
            .set(innerRef.current, { scale: 0.75 }, 0)

    })

    useEffect(() => {
        if (ref.current !== null) startAnimation();

        return () => {
            // second;
        };
    }, [ref]);

    return (
        <div className={`scrollBlock w-full h-full ${pageLoaded ? 'overflow-visible' : 'overflow-clip'}`}>
            {children}
            {
                pageLoaded
                    ?
                    null
                    :
                    <div ref={ref} className='loader fixed top-0 w-full h-full z-100 bg-black '>
                        <div ref={innerRef} className="flex w-full h-full items-center justify-center">
                            <CentralLogoLoaderText />
                        </div>
                    </div>
            }
        </div>
    )
}

export default PageLoader
