"use client";
import React, { Dispatch, SetStateAction, useState } from "react";

type HoverContextProps = {
    children: React.ReactNode;
};
type CursorProps = {
    x: number;
    y: number;
    text: string;
    fontSize: string;
    scale: number;
};

interface HoverContextInterface {
    itemHovered: CursorProps;
    setItemHovered: Dispatch<SetStateAction<CursorProps>>;
}

const defaultState = {
    itemHovered: { x: 0, y: 0, text: "", fontSize: "text-xs", scale: 1 },
    setItemHovered: () => { },
} as HoverContextInterface;

export const HoverContext = React.createContext(defaultState);

export default function HoverProvider({ children }: HoverContextProps) {
    const [itemHovered, setItemHovered] = useState<CursorProps>({
        x: 0,
        y: 0,
        text: "",
        fontSize: "text-xs",
        scale: 0.5,
    });
    return (
        <>
            <HoverContext.Provider value={{ itemHovered, setItemHovered }}>
                {children}
            </HoverContext.Provider>
        </>
    );
}
