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
import Nav from "@/components/nav";
import SmoothScroll from "@/components/common/SmoothScroll";
import { HoverContext } from "@/components/common/HoverContext";
import Estudios from "@/components/partials/Estudios";
import EquiposHome from "@/components/partials/EquiposHome";
import Map from "@/components/partials/Map";
import Footer from "@/components/partials/Footer";


export default function Home() {


  gsap.registerPlugin(ScrollTrigger);
  // ScrollTrigger.normalizeScroll(true);

  const size = useWindowSize();
  // const { setItemHovered } = useContext(HoverContext);
  // const [theme, setTheme] = useState<boolean | null>(null);
  const isMobile = useDeviceDetection();
  const pageRef = useRef<HTMLDivElement | null>(null);
  const equiposRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { contextSafe } = useGSAP({ scope: pageRef });
  const { setItemHovered } = useContext(HoverContext);




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
      .set(".social-links svg", {
        y: "-2em",
        opacity: 0
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

    const tlPageColor = gsap.timeline({
      scrollTrigger: {
        trigger: equiposRef.current, // Target the box element,
        start: "-10%",
        end: `0%`,
        scrub: true,
      }
    })
      .to(pageRef.current, { backgroundColor: "#eee", color: "black", ease: Power3.easeInOut })
  });



  useEffect(() => {
    if (pageRef.current !== null) startAnimation();

    return () => {
      // second;
    };
  }, [pageRef]);


  return (
    <>
      <div ref={pageRef} className="bg-white text-black"
        onPointerMove={(e) => {
          setItemHovered({ text: "", x: e.clientX, y: e.clientY, scale: 1 });
        }}
      >
        <SmoothScroll />
        <Nav />

        <div ref={heroRef}>
          <Hero />
        </div>

        {/* intro */}
        <section className="container mx-auto px4 overflow-y-hidden">
          <div className="flex min-h-[40vh] justify-center items-center">
            <div className="intro-text text-center px-12 py-12 lg:max-w-[70vw]">
              <h1 className="text-3xl lg:text-5xl">Central estudios, ofrecen espacio para producciones fotográficas y audiovisual.</h1>
              <p className="mt-8">
                El espacio de 413 metros cuadrados se divide en varias areas, cuenta con dos estudios, un area en común, entrada de vehiculo, patio abierto con opción de techado, escalera rebatible, elevador. Ademas cuenta con un rental de fotografía y audiovisual con un amplio listado de flashes, luces, cámara y grip.
              </p>
              <div className="flex flex-col md:flex-row items-center md:justify-center mt-8 gap-4">
                <button className="primary">Reservar estudios</button>
                <button className="secondary">Ver equipos</button>
              </div>
            </div>
          </div>
        </section>

        <Estudios />

        <div ref={equiposRef}>
          <EquiposHome />
        </div>

        <Map />

        <Footer />
      </div>
    </>
  );
}
