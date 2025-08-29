"use client"
// import { fetchProducts } from "@/sanity/sanity-utils";
// import Products from "./components/products";

import React, { useContext, useEffect, useRef } from "react"
import gsap, { Sine, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowSize } from "@uidotdev/usehooks";
import useDeviceDetection from "@/libs/hooks/useDeviceDetection";
import { useGSAP } from "@gsap/react";


import Hero from "@/components/partials/Hero";
import SmoothScroll from "@/components/common/SmoothScroll";
import { HoverContext } from "@/components/common/HoverContext";
import Estudios from "@/components/partials/Estudios";
import EquiposHome from "@/components/partials/equiposHome";
import Map from "@/components/partials/Map";
import CursorFollowWrapper from "@/components/common/CursorFollowWrapper";
import Link from "next/link";
import { TransitionLink } from "@/components/TransitionLink";


export default function HomeComponent() {


  gsap.registerPlugin(ScrollTrigger);

  // const { setItemHovered } = useContext(HoverContext);
  // const [theme, setTheme] = useState<boolean | null>(null);
  const isMobile = useDeviceDetection();
  const pageRef = useRef<HTMLDivElement | null>(null);
  const equiposRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { contextSafe } = useGSAP({ scope: pageRef });

  const startAnimation = contextSafe(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current, // Target the box element,
        start: "10%",
        end: `90%`,
        scrub: true,
        // onEnter: function () {
        //   collapseAnimation();
        // },
        // onEnterBack: function () {
        //   expandAnimation();
        // },
      }
    })
      .set(".intro-text h1", {
        y: "-30vh",
        opacity: 0
      })
      .to(".hero-logo", {
        y: "100vh",
        ease: Sine.easeInOut,
      }, 0)
      .to(".hero-circle", {
        y: "80vh",
        ease: Sine.easeInOut,
      }, 0)
      .to(".hero-scroll-icon", {
        duration: 0.125,
        y: "10vh",
        opacity: 0,
        ease: Sine.easeInOut,
      }, 0)
      .to(".intro-text h1", {
        y: 0,
        opacity: 1,
        ease: Sine.easeInOut,
      }, 0.05)

    // const tlPageColor = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: equiposRef.current, // Target the box element,
    //     start: "-10%",
    //     end: `0%`,
    //     scrub: true,
    //   }
    // })
    //   .to(pageRef.current, { backgroundColor: "#000", color: "black", ease: Power3.easeInOut })
  });



  useEffect(() => {
    if (pageRef.current !== null) startAnimation();

    return () => {
      // second;
    };
  }, [pageRef]);


  return (
    <>
      <div ref={pageRef} className="bg-white text-black">
        <CursorFollowWrapper>

          <div ref={heroRef}>
            <Hero />
          </div>

          {/* intro */}
          <section className="overflow-y-hidden bg-gray-100 mb-16 md:mb-32">
            <div className="container mx-auto px4 flex min-h-[100svh] justify-center items-center">
              <div className="intro-text px-12 py-12 lg:max-w-[70vw]">
                <h1 className="text-5xl md:text-7xl mb-8">Central estudios, ofrecen espacio para producciones fotográficas y audiovisual.</h1>
                <p className="text-lg md:text-2xl mb-4">El espacio de 413 metros cuadrados se divide en varias areas, cuenta con dos estudios, un area en común, entrada de vehiculo, patio abierto con opción de techado, escalera rebatible, elevador. Ademas cuenta con un rental de fotografía y audiovisual con un amplio listado de flashes, luces, cámara y grip.</p>

                <div className="flex flex-col md:flex-row items-start mt-8 gap-x-8 gap-y-4">
                  <TransitionLink href="/estudios"><button className="secondary button-large w-full min-w-[90vw] md:min-w-72">Ver estudios</button></TransitionLink>
                  <TransitionLink href="/equipos"><button className="secondary button-large w-full min-w-[90vw] md:min-w-72">Ver equipos</button></TransitionLink>
                </div>
              </div>
            </div>
          </section>

          <Estudios />

          <div ref={equiposRef}>
            <EquiposHome />
          </div>

          <Map />

        </CursorFollowWrapper>
      </div>
    </>
  );
}
