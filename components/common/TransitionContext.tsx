"use client";
import React, { Dispatch, SetStateAction, useState } from "react";

type TransitionContextProps = {
    children: React.ReactNode;
};
type RouteProps = {
    route: string;
    itemTransitioning: boolean;
};

interface TransitionContextInterface {
    itemTransitioned: RouteProps;
    setItemTransitioned: Dispatch<SetStateAction<RouteProps>>;
}

const defaultState = {
    itemTransitioned: { route: "", itemTransitioning: false },
    setItemTransitioned: () => { },
} as TransitionContextInterface;

export const TransitionContext = React.createContext(defaultState);

export default function TransitionProvider({
    children,
}: TransitionContextProps) {
    const [itemTransitioned, setItemTransitioned] = useState<RouteProps>({
        route: "",
        itemTransitioning: false,
    });
    return (
        <>
            <TransitionContext.Provider
                value={{ itemTransitioned, setItemTransitioned }}
            >
                {children}
            </TransitionContext.Provider>
        </>
    );
}
