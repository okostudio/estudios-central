"use client"
// import { fetchProducts } from "@/sanity/sanity-utils";
// import Products from "./components/products";

import React, { useEffect, useRef } from "react"
import gsap, { Sine, Power3, Linear } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowSize } from "@uidotdev/usehooks";
import useDeviceDetection from "@/libs/hooks/useDeviceDetection";
import { useGSAP } from "@gsap/react";

import Link from "next/link"
import Hero from "@/components/hero";
import Nav from "@/components/nav";
import SmoothScroll from "@/components/common/SmoothScroll";


export default function Home() {


  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.normalizeScroll(true);

  const size = useWindowSize();
  // const { setItemHovered } = useContext(HoverContext);
  // const [theme, setTheme] = useState<boolean | null>(null);
  const isMobile = useDeviceDetection();
  const pageRef = useRef<HTMLDivElement | null>(null);
  const { contextSafe } = useGSAP({ scope: pageRef });




  const startAnimation = contextSafe(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pageRef.current, // Target the box element,
        start: "0%",
        end: `25%`,
        scrub: true,
        // onEnter: function () {
        //   collapseAnimation();
        // },
        // onEnterBack: function () {
        //   expandAnimation();
        // },
      }
    })
      .set(".social-links svg", {
        y: "-2em",
        opacity: 0
      })
      .set(".top-nav", {
        y: "-2em",
        opacity: 0
      })
      .set(".intro-text", {
        y: "-30vh",
        opacity: 0
      })
      .to(".hero-logo", {
        y: "80vh",
        ease: Sine.easeInOut,
      }, 0)
      .to(".hero-circle", {
        y: "50vh",
        ease: Sine.easeInOut,
      }, 0)
      .to(".hero-scroll-icon", {
        duration: 0.125,
        y: "10vh",
        opacity: 0,
        ease: Sine.easeInOut,
      }, 0)
      .to(".intro-text", {
        y: 0,
        opacity: 1,
        ease: Sine.easeInOut,
      }, 0)
      .to(".social-links svg", {
        y: 0,
        opacity: 1,
        // stagger: -0.1,
        ease: Sine.easeInOut,
      }, 0.1)
      .to(".top-nav", {
        y: 0,
        opacity: 1,
        ease: Sine.easeInOut,
      }, 0)
  });

  useEffect(() => {
    if (pageRef.current !== null) startAnimation();

    return () => {
      // second;
    };
  }, [pageRef]);


  return (
    <>
      <div ref={pageRef}>
        <SmoothScroll />

        <Nav />
        <Hero />

        {/* intro */}
        <section className="container mx-auto px4 overflow-y-hidden">
          <div className="flex min-h-[40vh] justify-center items-center">
            <div className="intro-text text-center px-12 py-12 lg:max-w-[70vw]">
              <h1 className="text-5xl">Central estudios, ofrecen espacio para producciones fotográficas y audiovisual.</h1>
              <p className="mt-8">
                El espacio de 413 metros cuadrados se divide en varias areas, cuenta con dos estudios, un area en común, entrada de vehiculo, patio abierto con opción de techado, escalera rebatible, elevador. Ademas cuenta con un rental de fotografía y audiovisual con un amplio listado de flashes, luces, cámara y grip.
              </p>
              <div className="flex justify-center mt-8 gap-4">
                <button className="primary">Reservar estudios</button>
                <button className="secondary">Ver equipos</button>
              </div>
            </div>
          </div>
        </section>

        {/* estudios */}
        <section className="container mx-auto px-4">
          <div className="hero grid grid-cols-1 md:grid-cols-12 gap-2 mb-8">

            <Link href={"/estudios"} className="relative group md:col-span-8">
              <img
                src="/_studio-01.jpg"
                alt="Hero Image"
                className="w-full h-svw md:w-auto md:h-full object-cover"
              />
              <div className="absolute w-full top-0"><h2 className="m-8 py-2 px-6 transition-padding duration-300 ease-out group-hover:pl-7 bg-black opacity-95 text-white mx-auto inline-block text-center font-bold text-3xl lg:text-5xl">Estudios</h2></div>
            </Link>
            <Link href={"/equipo"} className="relative group md:col-span-4">
              <img
                src="/Digital-Camera-Canon-RF-15-35mm-f2.8-L-IS-USM.jpg"
                alt="Hero Image"
                className="w-full h-svw md:w-auto md:h-full object-cover"
              />
              <div className="absolute w-full top-0"><h2 className="m-8 py-2 px-6 transition-padding duration-300 ease-out group-hover:pl-7 bg-black opacity-95 text-white mx-auto inline-block text-center font-bold text-3xl lg:text-5xl">Equipo</h2></div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
