import React, { useContext } from 'react'
import { CartContext } from '@/components/common/CartContext';
import { ProductType } from '@/types/Product';
import Image from 'next/image';
import { HoverContext } from '../common/HoverContext';

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

    const { setItemHovered } = useContext(HoverContext);
    const { cart, setCart } = useContext(CartContext)
    const isInCart = cart.includes(product._id);
    return (
        <div
            key={product._id}
            className={`group col ${product._id} cursor-pointer`}
            onClick={() => { toggleCart(product._id) }}
            onMouseMove={(e) => {
                e.preventDefault();
                // setItemHovered({ text: "Leer \n más", fontSize: "text-xs", x: e.clientX, y: e.clientY, scale: 0.6 });
                setItemHovered({ text: isInCart ? "-" : "+", fontSize: "text-2xl", x: e.clientX, y: e.clientY, scale: 0.5 });
            }}
        >
            <div className="image relative w-full h-auto overflow-hidden">
                <Image src={product.imageUrl} alt={product.imageAlt || product.title} width={480} height={480} className="scale-120 group-hover:scale-100 aspect-[3/4] object-cover transition duration-200 ease-out" />
                <div className="description">
                    <div className="absolute p-3 pb-5 top-0 leading-none left-0 w-full h-full -translate-x-10 group-hover:translate-x-0 bg-gray-200/95 flex flex-col items-start justify-between opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out">
                        <span className="text-black text-xs mb-4">{product.description}</span>
                    </div>
                </div>
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
                    <p className="text-xs md:hidden text-red-700/80">Leer más</p>
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