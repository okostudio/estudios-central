"use client";
import React, { Dispatch, SetStateAction, useState } from "react";

type ThemeContextProps = {
    children: React.ReactNode;
};

interface ThemeContextInterface {
    darkTheme: boolean;
    setDarkTheme: Dispatch<SetStateAction<boolean>>;
}

const defaultState = {
    darkTheme: false,
    setDarkTheme: (darkTheme: boolean) => !darkTheme,
} as ThemeContextInterface;

export const ThemeContext = React.createContext(defaultState);

export default function ThemeProvider({ children }: ThemeContextProps) {
    const [darkTheme, setDarkTheme] = useState<boolean>(false);
    return (
        <>
            <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
                {children}
            </ThemeContext.Provider>
        </>
    );
}
