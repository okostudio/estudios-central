"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { ProductType } from '@/types/Product';


type CartContextProps = {
    children: React.ReactNode;
};
type CartProps = {
    products: ProductType[];
};

interface CartContextInterface {
    cart: CartProps;
    setCart: Dispatch<SetStateAction<CartProps>>;
}

const defaultState = {
    cart: { products: [] },
    setCart: () => { },
} as CartContextInterface;

export const CartContext = React.createContext(defaultState);

export default function CartProvider({ children }: CartContextProps) {
    const [cart, setCart] = useState<CartProps>({
        products: [],
    });
    return (
        <>
            <CartContext.Provider value={{ cart, setCart }}>
                {children}
            </CartContext.Provider>
        </>
    );
}
