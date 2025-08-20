"use client";
import React, { Dispatch, SetStateAction, useState } from "react";

type FailureContextProps = {
    children: React.ReactNode;
};

interface FailureContextInterface {
    failure: boolean;
    setFailure: Dispatch<SetStateAction<boolean>>;
}

const defaultState = {
    failure: false,
    setFailure: () => { },
} as FailureContextInterface;

export const FailureContext = React.createContext(defaultState);

export default function FailureProvider({ children }: FailureContextProps) {
    const [failure, setFailure] = useState<boolean>(false);
    return (
        <>
            <FailureContext.Provider value={{ failure, setFailure }}>
                {children}
            </FailureContext.Provider>
        </>
    );
}
