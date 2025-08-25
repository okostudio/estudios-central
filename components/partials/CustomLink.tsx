"use client";

import React, { useContext, useRef } from "react";
import { TransitionContext } from "../common/TransitionContext";
import { HoverContext } from "../common/HoverContext";
import { usePathname } from "next/navigation";

export default function CustomLink({
  url,
  classes = "",
  children,
}: {
  url: string;
  children: React.ReactNode;
  classes?: string;
}) {
  const pathname = usePathname();
  const linkRef = useRef<HTMLDivElement | null>(null);
  const { itemTransitioned, setItemTransitioned } =
    useContext(TransitionContext);
  const { setItemHovered } = useContext(HoverContext);

  return (
    <div
      ref={linkRef}
      onClick={(e) => {
        if (!itemTransitioned.itemTransitioning && pathname !== url) {
          // trigger transition animation / add url to context
          setItemTransitioned({ route: url, itemTransitioning: true });
          setItemHovered({
            x: e.clientX,
            y: e.clientY,
            text: "",
            scale: 1,
          });
        }
      }}
      className={`cursor-pointer ${classes}`}
    >
      {children}
    </div>
  );
}
