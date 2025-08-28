"use client";
import React, { Dispatch, SetStateAction, useState } from "react";

type CartContextProps = {
    children: React.ReactNode;
};

interface CartContextInterface {
    cart: string[]; // Now just an array of productIDs
    setCart: Dispatch<SetStateAction<string[]>>;
}

const defaultState = {
    cart: [],
    setCart: () => { },
} as CartContextInterface;

export const CartContext = React.createContext(defaultState);

export default function CartProvider({ children }: CartContextProps) {
    const [cart, setCart] = useState<string[]>([]);
    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
}