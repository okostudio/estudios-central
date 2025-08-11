"use client";
import { Product } from '@/types/Product';


import Image from "next/image";
import { useState } from 'react';

interface PropsInterface {
    products: Product[];
}

// interface SelectableProduct extends Product {
//     selected: boolean;
// }


const Products = (props: PropsInterface) => {

    const { products } = props;

    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

    const filteredProducts = products.filter((product) => {
        return selectedProducts.some((selected) => selected._id === product._id);
    });

    const categories = Array.from(new Set(products.map((product) => product.category)));
    console.log(categories);


    return (
        <div className="container mx-auto" >
            <div className="filters">
                <div className="flex items-center justify-between px-4 mb-4">
                    <h2 className="text-2xl font-bold">Productos</h2>
                    <button
                        className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-300 font-bold text-lg rounded-full text-sm px-4 py-2.5 text-center"
                        onClick={() => setSelectedProducts([])}
                    >
                        Limpiar selección
                    </button>
                </div>
                {/* <div className="flex flex-wrap gap-2 mb-4">
                    {filteredProducts.map((product) => (
                        <button
                            key={product._id}
                            className={`text-sm px-3 py-1 rounded-full ${selectedProducts.some((p) => p._id === product._id) ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                            onClick={() => {
                                if (selectedProducts.some((p) => p._id === product._id)) {
                                    setSelectedProducts(selectedProducts.filter((p) => p._id !== product._id));
                                } else {
                                    setSelectedProducts([...selectedProducts, product]);
                                }
                            }}
                        >
                            {product.title}
                        </button>                */}
            </div>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 gap-y-12">
                {products.map((product) => (
                    <div key={product._id} className={`group col ${product._id}`}>
                        <div className="image relative w-full h-0 pb-[100%] overflow-hidden">
                            <Image src={product.imageUrl} alt={product.imageAlt || product.title} width={640} height={640} className="group-hover:scale-110 transition duration-200 ease-out" />
                            <div className="description">
                                <div className="absolute p-3 pb-5 top-0 leading-none left-0 w-full h-full bg-black/50 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition duration-200 ease-out">

                                    <span className="text-white text-xs mb-4">{product.description}</span>
                                    <button className="text-white bg-red-600 hover:bg-red-700 focus:ring-red-300 font-bold text-lg rounded-full text-sm px-4 py-2.5 text-center me-2">+</button>
                                </div>
                            </div>
                        </div>
                        <div className="description mt-3 leading-none text-grey-600">
                            <h5 className="text-xs font-bold">{product.title}</h5>
                            <p className="text-xs">${product.price}.00</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;