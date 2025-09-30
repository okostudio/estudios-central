import React, { useContext, useState } from 'react'
import { CartContext } from '@/components/common/CartContext';
import { ProductType } from '@/types/Product';
import Image from 'next/image';
import { HoverContext } from '../common/HoverContext';
import useDeviceDetection from '@/libs/hooks/useDeviceDetection';
import { Plus, Tick } from '../icons/icons';

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
                toggleCart(product._id)
            }}
            onMouseMove={(e) => {
                e.preventDefault();
                // setItemHovered({ text: "Leer \n más", fontSize: "text-xs", x: e.clientX, y: e.clientY, scale: 0.6 });
                setItemHovered({ text: " ", fontSize: "", isHollow: true, x: e.clientX, y: e.clientY, scale: 0.5 });
            }}
        >
            <div className="image relative w-full h-auto">
                <div className='overflow-hidden'>
                    <Image src={product.imageUrl} alt={product.imageAlt || product.title} width={480} height={480} className="scale-120 aspect-[1] object-cover transition duration-200 ease-out" />
                    <div className='absolute top-2 right-2 z-10'>
                        <button
                            type='button'
                            onClick={e => {
                                e.stopPropagation();
                                toggleCart(product._id);
                            }}
                            className={`small p-9 ${isInCart ? "selected" : ""}`}
                        >
                            {isInCart ? <Tick size={2} /> : <Plus size={2} />}
                        </button>
                    </div>
                </div>
                <div className='overflow-hidden absolute top-0 left-0 w-full h-full'>
                    <Image src={product.imageUrl} alt={product.imageAlt || product.title} width={480} height={480} className="scale-120 aspect-[1] object-cover transition duration-200 ease-out" />
                </div>



            </div>
            {/* description */}
            <div className="text-center mt-3 leading-none text-grey-600">
                <div>
                    <h5 className="text-xs font-bold">{product.title}</h5>
                    <p className="text-xs">{
                        new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                        }).format(product.price)
                    }</p>
                </div>

            </div>
        </div>
    );
}
export default Equipo;