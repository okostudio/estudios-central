import React, { useContext, useState } from 'react'
import { CartContext } from '@/components/common/CartContext';
import { ProductType } from '@/types/Product';
import Image from 'next/image';
import { HoverContext } from '../common/HoverContext';
import useDeviceDetection from '@/libs/hooks/useDeviceDetection';

type EquipoProps = {
    product: ProductType;
    addToCart: (productId: string) => void;
    toggleCart: (productId: string) => void;
};


const Equipo = ({
    product,
    addToCart,
    toggleCart
}: EquipoProps) => {
    const isMobile = useDeviceDetection();
    const { setItemHovered } = useContext(HoverContext);
    const { cart, setCart } = useContext(CartContext)
    const [showDescription, setShowDescription] = useState<boolean>(false);

    const isInCart = cart.includes(product._id);
    return (
        <div
            key={product._id}
            className={`group col ${product._id} cursor-pointer`}
            onClick={() => {
                setShowDescription(false)
                toggleCart(product._id)
            }}
            onMouseMove={(e) => {
                e.preventDefault();
                // setItemHovered({ text: "Leer \n más", fontSize: "text-xs", x: e.clientX, y: e.clientY, scale: 0.6 });
                setItemHovered({ text: isInCart ? "-" : "+", fontSize: "text-2xl", x: e.clientX, y: e.clientY, scale: 0.5 });
            }}
        >
            <div className="image relative w-full h-auto">
                <div className='overflow-hidden'>
                    <Image src={product.imageUrl} alt={product.imageAlt || product.title} width={480} height={480} className="scale-120 aspect-[3/4] object-cover transition duration-200 ease-out" />
                </div>
                <div className='overflow-hidden absolute top-0 left-0 w-full h-full'>
                    <Image src={product.imageUrl} alt={product.imageAlt || product.title} width={480} height={480} className="scale-120 aspect-[3/4] object-cover transition duration-200 ease-out" />
                </div>


                {!isMobile ?
                    <div className="description overflow-hidden">
                        <div className="absolute p-3 pb-5 top-0 leading-none left-0 w-full h-full  bg-gray-200/95 flex flex-col items-start justify-between opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
                            <span className="text-black text-xs mb-4">{product.description}</span>
                        </div>
                    </div>
                    :
                    <div className="description overflow-hidden">
                        <div className={`absolute p-3 pb-5 top-0 leading-none left-0 w-full h-full  bg-gray-200/95 flex flex-col items-start justify-start transition duration-200 ease-in-out ${showDescription ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                            <div className="w-full text-right mb-4"><span className="absolute rotate-45 top-2 right-2">+</span></div>
                            <span className="text-black text-xs mb-4">{product.description}</span>
                        </div>
                    </div>
                }
            </div>
            {/* description */}
            <div className="flex align-start justify-between mt-3 leading-none text-grey-600">
                <div>
                    <h5 className="text-xs font-bold">{product.title}</h5>
                    <p className="text-xs">{
                        new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                        }).format(product.price)
                    }</p>
                    <p
                        className="text-xs md:hidden text-red-700/80"
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowDescription(!showDescription)
                        }}
                    >Detalles</p>
                </div>
                <div className='ml-3'>
                    <button
                        type='button'
                        onClick={e => {
                            e.stopPropagation();
                            toggleCart(product._id);
                        }}
                        className={`small ${isInCart ? "selected" : ""}`}
                    >
                        {isInCart ? "–" : "+"}
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Equipo;