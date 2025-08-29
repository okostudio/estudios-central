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
    const [cartTotal, setCartTotal] = useState(0);

    const { cart, setCart } = useContext(CartContext);

    const filteredProducts = cart ? products.filter(product => cart.includes(product._id)) : [];

    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })

    const toggleMenu = (open: boolean) => {
        setCartOpen(false)
        setMenuOpen(open)
    }
    const toggeCart = (open: boolean) => {
        setMenuOpen(false)
        setCartOpen(open)
    }
    const removeFromCart = (productId: string) => {
        setCart((prev: string[]) =>
            prev.filter(id => id !== productId)
        );
    };


    // const [menu, setMenu] = useState<MenuItem[]>([]);

    useEffect(() => {
        const total = filteredProducts.reduce((currentTotal, product) => {
            return currentTotal + product.price;
        }, 0); // The '0' is the initial value for the accumulator
        setCartTotal(total)

    }, [cart])

    return (
        <CursorFollowWrapper>
            {cartOpen ? null : <SmoothScroll />}

            <nav className="top-nav fixed top-0 w-full z-100 bg-gradient-to-b from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0.75)]">
                <div className="p-2  px-4">
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
                                <li><TransitionLink href={`/equipo`}>Equipo</TransitionLink></li>
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

                                {/* RESERVE STUDIOS */}
                                <div className="hidden lg:block">
                                    <TransitionLink href={`/estudios`}>
                                        <button className="secondary">
                                            Ver Estudios
                                        </button>
                                    </TransitionLink>
                                </div>

                                {/* CART BUTTON */}
                                <div
                                    className='CART-BUTTON relative flex justify-center items-center size-10'
                                    onClick={() => { toggeCart(!cartOpen) }}
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
                {/* Mobile menu */}



            </nav >

            {/* Mobile Nav expanded */}
            <div className={`MOBILE-NAV md:hidden bg-black w-full h-screen z-50 left-0 top-0 fixed transition-all ease-in-out duration-300 ${menuOpen ? "-translate-x-0 opacity-100" : "translate-x-[100vw] opacity-0"}`}>
                <ul className={`flex flex-col items-center justify-center h-full py-4 space-y-4 text-2xl text-white uppercase font-bold`}>
                    <li><TransitionLink href={`/estudios`} onClick={() => setMenuOpen(false)}>Estudios</TransitionLink></li>
                    <li><TransitionLink href={`/equipo`} onClick={() => setMenuOpen(false)}>Equipo</TransitionLink></li>
                </ul>
            </div>


            {/* SHOPPING CART  */}
            <div
                className={
                    `
                        CART bg-white/95 text-black fixed right-0 top-0 h-[100dvh] z-200 overflow-x-clip
                        w-full md:w-128 shadow-2xl 
                        
                        ${cartOpen ? "translate-x-0" : "translate-x-full"} transition-transform ease-in-out duration-300
                        `}
            >
                {/* 
                

                CART SELECTION
                TODO: CREATE NEW COMPONENTE FOR 
                
                */

                }
                <div className='flex flex-col justify-stretch max-h-[100dvh]'>
                    {/* PRODUCTS HEADER */}
                    <div className="cart-top h-16 flex items-center justify-between p-4 bg-white">
                        <div className="flex items-center justify-between">
                            <h2 className='mr-4 py-8'>Seleccion </h2>
                            <span className="size-8 bg-black/50 rounded-full text-center text-white p-1">{cart.length}</span>
                        </div>
                        <span
                            onClick={() => { toggeCart(false) }}
                            className="size-8 bg-white text-xl rounded-full text-center text-black p-1">
                            x
                        </span>
                    </div>
                    {/* PRODUCTS-LIST */}
                    <div className="PRODUCTS-LIST p-4 pt-0 h-full max-h-full overflow-y-scroll">
                        {filteredProducts.map((product) => (
                            <div key={product._id} className={`group col ${product._id} cursor-pointer flex items-center justify-between my-2 border-b-1 pb-2 border-black/20 last:border-0`}>
                                <div className='flex items-center gap-4'>
                                    <div className="image relative size-14 md:size-18 overflow-hidden">
                                        <Image src={product.imageUrl} alt={product.imageAlt || product.title} width={320} height={320} className="scale-125" />
                                    </div>
                                    {/* description */}
                                    <div className="flex align-start mt-3 leading-none text-grey-600">
                                        <div>
                                            <h5 className="text-xs font-bold">{product.title}</h5>
                                            <p className="text-xs">{currencyFormatter.format(product.price)
                                            }</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="text-black/60 hover:text-black"
                                    onClick={() => { removeFromCart(product._id) }}
                                >
                                    <TrashIcon size={4} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CART FOOTER */}
                    <div className="cart-footer h-50 w-full bg-white/90 pt-4">
                        <div className="mx-4 py-6 border-t-1 border-black/40">
                            <div className="flex items-center justify-between">
                                <h3>TOTAL</h3>
                                <h3>{currencyFormatter.format(cartTotal)}</h3>
                            </div>
                            <p className="italic text-xs mb-6">Sujeto a confirmación</p>
                            <button
                                className="black flex items-center gap-3 text-white rounded-full px-4 py-4 mb-1 mx-auto bg-black hover:bg-green-700"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const phoneNumber = "+59891068840"; // e.g., "1234567890"
                                    const draftMessage = [
                                        "Hola, me gustaría reservar los siguientes productos:",
                                        "",
                                        ...filteredProducts.map(product => `• ${product.title} - _$${product.price}.00_`),
                                        "-------",
                                        `*TOTAL: ${cartTotal}.00`,
                                        "",
                                        "¿Podrían confirmarme la disponibilidad?"
                                    ].join('\n');
                                    const encodedMessage = encodeURIComponent(draftMessage);
                                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                                    window.open(whatsappUrl, "_blank");

                                }}
                            ><span className='md:text-sm'>Enviar solicitud por WhatsApp</span> <WhatsappIcon /></button>
                            <p className="italic text-xs text-center">Se abrirá WhatsApp con tu selección prellenada.</p>
                        </div>
                    </div>
                </div>
            </div>
        </CursorFollowWrapper>
    );
}



