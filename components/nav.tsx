"use client";
import React, { useContext, useEffect, useState } from 'react'
import Image from "next/image";

import { ProductType } from '@/types/Product';

import { TransitionLink } from './TransitionLink';
import { CartIcon, CartFullIcon, FacebookIcon, InstaIcon, TiktokIcon, WhatsappIcon, TrashIcon } from './icons/icons';
import { CartContext } from '@/components/common/CartContext';
// import { HoverContext } from '@/components/common/HoverContext';
import CursorFollowWrapper from './common/CursorFollowWrapper';
import SmoothScroll from './common/SmoothScroll';
import Cart from './partials/Cart';
// import useDeviceDetection from "@/libs/hooks/useDeviceDetection";


type NavComponentProps = {
    products: ProductType[];
};

export default function Nav({
    products,
}: NavComponentProps) {

    // const isMobile = useDeviceDetection();
    const [menuOpen, setMenuOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const { cart, setCart } = useContext(CartContext);


    const toggleMenu = (open: boolean) => {
        setCartOpen(false)
        setMenuOpen(open)
    }
    const toggleCart = (open: boolean) => {
        setMenuOpen(false)
        setCartOpen(open)
    }

    return (
        <CursorFollowWrapper>

            {cartOpen ? null : <SmoothScroll />}

            <nav className="top-nav fixed top-0 w-full z-100 bg-gradient-to-b from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0.75)]">
                <div className="p-2 px-4">
                    {/* <div className="social-links flex items-center justify-start text-white space-x-4 border-b-1 border-b-white pb-4">
                    <TiktokIcon size={4} />
                    <FacebookIcon size={4} />
                    <InstaIcon size={4} />
                </div> */}
                    <div className="nav-links flex items-center justify-between">

                        {/* LOGO */}
                        <TransitionLink href="/" passHref>
                            <Image
                                src="/central-horz-blanco.svg"
                                alt="central"
                                className="logo h-8 md:h-10 w-auto"
                                width={565 * 0.5}
                                height={120 * 0.5}
                                priority
                            />
                        </TransitionLink>

                        {/* Desktop Menu */}
                        <div className="hidden md:block">
                            <ul className="flex items-center  space-x-12 text-white uppercase font-bold">
                                <li><TransitionLink href={`/estudios`}>Estudios</TransitionLink></li>
                                <li><TransitionLink href={`/equipos`}>Equipos</TransitionLink></li>
                                <li><TransitionLink href={`/faq`}>FAQ</TransitionLink></li>
                            </ul>
                        </div>

                        <div className="rightNav">
                            <div className="flex items-center space-x-2 md:space-x-6 text-white uppercase font-bold">

                                {/* Hamburger button for md and below */}
                                <button
                                    className="md:hidden flex flex-col justify-center items-center size-10"
                                    aria-label="Toggle menu"
                                    onClick={() => toggleMenu(!menuOpen)}
                                >
                                    <span className={`block w-4 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                                    <span className={`block w-4 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
                                    <span className={`block w-4 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                                </button>

                                <div
                                    className='CART-BUTTON relative flex justify-center items-center size-10'
                                    onClick={() => { toggleCart(!cartOpen) }}
                                >
                                    {cart.length > 0
                                        ?
                                        <>
                                            <div className="select-none text-xs font-bold text-black text-center mr-[0.15em] mb-[0.65em]">{cart.length}</div>
                                            <div className='absolute -z-10 top-0 left-0'><CartFullIcon size={10} /></div>
                                        </>
                                        :
                                        <CartIcon size={10} />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav >


            {/* Mobile Nav expanded */}
            <div className={`MOBILE-NAV md:hidden bg-black w-full h-screen z-50 left-0 top-0 fixed transition-all ease-in-out duration-300 ${menuOpen ? "-translate-x-0 opacity-100" : "translate-x-[100vw] opacity-0"}`}>
                <ul className={`flex flex-col items-center justify-center h-full py-4 space-y-4 text-2xl text-white uppercase font-bold`}>
                    <li><TransitionLink href={`/estudios`} onClick={() => setMenuOpen(false)}>Estudios</TransitionLink></li>
                    <li><TransitionLink href={`/equipos`} onClick={() => setMenuOpen(false)}>Equipos</TransitionLink></li>
                </ul>
            </div>


            <Cart
                products={products}
                toggleCart={toggleCart}
                cartOpen={cartOpen}
            />

        </CursorFollowWrapper>
    );
}



