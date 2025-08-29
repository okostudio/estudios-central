"use client"
import React, { ReactNode, useContext, useRef } from 'react'
import { HoverContext } from '@/components/common/HoverContext';


const CursorFollowWrapper = ({ children }: { children: ReactNode }) => {
    const pageRef = useRef<HTMLDivElement | null>(null);
    const { setItemHovered } = useContext(HoverContext);

    return (
        <div ref={pageRef} className="bg-white text-black"
            onPointerMove={(e) => {
                setItemHovered({ text: "", x: e.clientX, fontSize: "text-xs", y: e.clientY, scale: 1 });
            }}
        >
            {children}
        </div>
    )
}

export default CursorFollowWrapper
