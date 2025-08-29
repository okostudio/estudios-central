import { ProductType } from '@/types/Product';
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../common/CartContext';
import { TrashIcon, WhatsappIcon } from '../icons/icons';
import Image from 'next/image';


type CartProps = {
    products: ProductType[];
    toggleCart: (open: boolean) => void;
    cartOpen: boolean;
};


const Cart = ({
    products,
    cartOpen,
    toggleCart
}: CartProps) => {


    const [cartTotal, setCartTotal] = useState(0);

    const { cart, setCart, name, setName, dateFrom, setDateFrom, dateTo, setDateTo } = useContext(CartContext);

    const filteredProducts = cart ? products.filter(product => cart.includes(product._id)) : [];

    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })
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

        <div
            className={
                `
                        CART bg-white text-black fixed right-0 top-0 h-[100dvh] z-200 overflow-x-clip
                        w-full md:w-128 shadow-2xl 
                        ${cartOpen ? "translate-x-0" : "translate-x-full"} transition-transform ease-in-out duration-300
                    `}
        >
            {/* 
                

                CART SELECTION
                TODO: CREATE NEW COMPONENTE FOR 
                
                */
                cart.length > 0 ?

                    <div className='flex flex-col justify-stretch h-[100dvh] max-h-[100dvh]'>
                        {/* PRODUCTS HEADER */}
                        <div className="cart-top h-16 flex items-center justify-between p-4 bg-white">
                            <div className="flex items-center justify-between">
                                <h2 className='mr-4 py-8'>Seleccion </h2>
                                <span className="size-8 border-1 border-black/50 text-center p-1">{cart.length}</span>
                            </div>
                            <span
                                onClick={() => { toggleCart(false) }}
                                className="size-8 bg-white text-xl text-center text-black p-1">
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
                                        <div className="p-2">
                                            <TrashIcon size={4} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CART FOOTER */}
                        <div className="cart-footer h-50 w-full bg-white pt-4">
                            <div className="mx-4 py-6 border-t-1 border-black/40">
                                <div className="flex items-center justify-between">
                                    <h3>TOTAL</h3>
                                    <h3>{currencyFormatter.format(cartTotal)}</h3>
                                </div>
                                <p className="italic text-xs mb-6">Sujeto a confirmación</p>
                                <button
                                    className="black flex items-center justify-center gap-3 text-white px-4 py-4 mb-1 mx-auto w-full bg-black hover:bg-green-700"
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
                                ><span className='md:text-sm text-center'>Enviar solicitud por WhatsApp</span> <WhatsappIcon /></button>
                                <p className="italic text-xs text-center">Se abrirá WhatsApp con tu selección prellenada.</p>
                            </div>
                        </div>
                    </div>

                    :

                    <div className='flex flex-col justify-center h-[100dvh] max-h-[100dvh]'>
                        {/* PRODUCTS HEADER */}
                        <div className="cart-top flex items-center p-16 bg-white">
                            <div className="text-center w-full">
                                <h3 className='py-4'>Tu selección está vacía</h3>
                                <p className='mb-16'>Agregá equipos desde el catálogo.</p>
                                <button className="secondary w-full"
                                    onClick={() => {
                                        toggleCart(false);
                                        window.location.href = "/equipos";
                                    }}
                                >Ver catálogo</button>
                            </div>

                        </div>
                        <span
                            onClick={() => { toggleCart(false) }}
                            className="size-8 bg-white text-xl text-center text-black p-4 px-8 absolute top-0 right-0">
                            x
                        </span>
                    </div>
            }


        </div>
    )
}

export default Cart
