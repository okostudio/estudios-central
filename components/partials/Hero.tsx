"use client"
import React from "react"

import { ScrollIcon } from "../icons/icons";
import { CentralLogoText } from "./Logos";
import useDeviceDetection from "@/libs/hooks/useDeviceDetection";




const Hero = () => {

    const isMobile = useDeviceDetection();


    return (
        <section className="HERO relative w-full h-[100svh] bg-black overflow-hidden">
            {isMobile ?
                <video muted autoPlay loop playsInline disablePictureInPicture className="absolute w-full h-full object-cover opacity-75">
                    <source src="/videos/hero-mobile.mp4" type="video/mp4" />
                    {/* Your browser does not support the video tag. */}
                </video>
                :
                <video muted autoPlay loop playsInline disablePictureInPicture className="absolute w-full h-full object-cover opacity-75">
                    {/* <source src="/videos/hero-landscape.mp4" type="video/mp4" /> */}
                    <source src="/videos/hero-mobile.mp4" type="video/mp4" />

                    {/* Your browser does not support the video tag. */}
                </video>
            }

            <div className="h-full w-full md:col-span-12 text-center overflow-hidden flex items-center justify-center">

                <div className="absolute w-full h-full">
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="hero-circle w-[80vw] h-[80vw] md:h-[50vh] md:w-auto aspect-square opacity-75">
                            <img src="/red-circle.png" className="w-full h-full" />
                        </div>
                    </div>
                </div>
                <div className="hero content flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center text-white justify-center">
                        <CentralLogoText />
                    </div>
                </div>
            </div>
            <div className="hero-scroll-icon absolute w-full bottom-0">
                <div className="flex flex-col text-white items-center justify-center mb-8">
                    <ScrollIcon size={12} />
                </div>
            </div>
        </section>
    )
}
export default Hero;
