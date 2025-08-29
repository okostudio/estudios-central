"use client";
import React, { Dispatch, SetStateAction, useState } from "react";

type CartContextProps = {
    children: React.ReactNode;
};

interface CartContextInterface {
    cart: string[]; // Now just an array of productIDs
    setCart: Dispatch<SetStateAction<string[]>>;
    name: string | null;
    setName: Dispatch<SetStateAction<string | null>>;
    dateFrom: Date | null;
    setDateFrom: Dispatch<SetStateAction<Date | null>>;
    dateTo: Date | null;
    setDateTo: Dispatch<SetStateAction<Date | null>>;
}

const defaultState = {
    cart: [],
    setCart: () => { },
    name: null,
    setName: () => { },
    dateFrom: null,
    setDateFrom: () => { },
    dateTo: null,
    setDateTo: () => { },
} as CartContextInterface;

export const CartContext = React.createContext(defaultState);

export default function CartProvider({ children }: CartContextProps) {
    const [cart, setCart] = useState<string[]>([]);
    const [name, setName] = useState<string | null>(null);
    const [dateFrom, setDateFrom] = useState<Date | null>(null);
    const [dateTo, setDateTo] = useState<Date | null>(null);
    return (
        <CartContext.Provider value={{ cart, setCart, name, setName, dateFrom, setDateFrom, dateTo, setDateTo }}>
            {children}
        </CartContext.Provider>
    );
}