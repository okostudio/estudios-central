"use client";

import React, { useContext, useEffect, useRef } from "react";
import { HoverContext } from "../common/HoverContext";
// import { ThemeContext } from "../common/ThemeContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import useDeviceDetection from "@/libs/hooks/useDeviceDetection";

type CursorProps = {
  xPos: number;
  yPos: number;
};
/*
{ xPos, yPos }: CursorProps
*/

export default function CursorFollower() {
  const { itemHovered } = useContext(HoverContext);
  // const { darkTheme } = useContext(ThemeContext);
  const cursorRef = useRef(null);
  const isMobile = useDeviceDetection();

  const { contextSafe } = useGSAP({ scope: cursorRef });

  useEffect(() => {
    const setFollower = contextSafe(() => {
      gsap.to(cursorRef.current, {
        duration: 0.25,
        x: itemHovered.x,
        y: itemHovered.y,
        ease: "power3.easeOut",
      });
    });

    if (!isMobile) setFollower();
  }, [itemHovered]);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 flex flex-col justify-center items-center z-200 pointer-events-none ${isMobile ? "hidden" : ""}`}
    >
      <div
        className={`absolute flex flex-col justify-center items-center rounded-full backdrop-invert opacity-75 transition-all ease-out duration-250 ${itemHovered.scale === 1.5 ? "scale-200" : ""} ${itemHovered.text.length === 0 ? " bg-red-800/75 w-4 h-4" : "transparent text-white w-7 h-7 p-2"} overflow-hidden`}
      >
        <div className={`absolute ${itemHovered.fontSize} text-center leading-[0.9] font-bold text-cursor mb-[0.1]`}>
          {itemHovered.text}
        </div>
      </div>
    </div>
  );
}

// https://codepen.io/ayank007/pen/NWLjxYK
