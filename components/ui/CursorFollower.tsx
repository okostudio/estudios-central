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
        className={`absolute flex flex-col justify-center items-center rounded-full transition-all ease-out duration-250 ${itemHovered.scale === 1.5 ? "scale-200" : ""} ${itemHovered.text.length === 0 ? "bg-red-800/75 w-5 h-5" : "bg-black/90 text-white w-18 h-18 p-2"} overflow-hidden`}
      >
        <div className="absolute text-sm text-center leading-[0.9] font-bold text-cursor mb-[0.1]">
          {itemHovered.text}
        </div>
      </div>
    </div>
  );
}

// https://codepen.io/ayank007/pen/NWLjxYK
