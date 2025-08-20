"use client";
import React, { Dispatch, SetStateAction, useState } from "react";

type SessionContextProps = {
    children: React.ReactNode;
};

interface SessionContextInterface {
    sessionVisited: boolean;
    setSessionVisited: Dispatch<SetStateAction<boolean>>;
}

const defaultState = {
    sessionVisited: false,
    setSessionVisited: () => { },
} as SessionContextInterface;

export const SessionContext = React.createContext(defaultState);

export default function SessionProvider({ children }: SessionContextProps) {
    const [sessionVisited, setSessionVisited] = useState<boolean>(false);
    return (
        <>
            <SessionContext.Provider value={{ sessionVisited, setSessionVisited }}>
                {children}
            </SessionContext.Provider>
        </>
    );
}
