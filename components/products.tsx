"use client";
import { ProductType } from '@/types/Product';
import Image from "next/image";
import { useState } from 'react';

interface PropsInterface {
    products: ProductType[];
}

const Products = (props: PropsInterface) => {
    const { products } = props;

    // Get all unique categories
    const categories = Array.from(new Set(products.map((product) => product.category)));

    // State for selected categories
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    // State for selected products (for selection, not filtering)
    const [selectedProducts, setSelectedProducts] = useState<ProductType[]>([]);

    // Filter products by selected categories
    const filteredProducts =
        selectedCategories.length === 0
            ? products
            : products.filter((product) => selectedCategories.includes(product.category));

    // Handle category filter toggle
    const handleCategoryToggle = (category: string) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((c) => c !== category)
                : [...prev, category]
        );
    };

    // Clear all filters
    const handleClearFilters = () => setSelectedCategories([]);

    return (
        <section className="products">

        // <div className="container mx-auto px-4">
                <div className="container mx-auto px-4">
                    {/* Filter Component */}
                    <div className="filters mb-4">
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-2xl font-bold">Alquiler Equipo</h2>
                        </div>
                        <div className="flex flex-wrap gap-1 mb-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`text-xs px-3 py-1 rounded-full border transition ${selectedCategories.includes(category)
                                        ? 'bg-gray-200 text-gray-800 border-gray-300 hover:bg-gray-300'
                                        : 'text-gray-800 transparent border-grey-300 hover:bg-gray-100'
                                        }`}
                                    onClick={() => handleCategoryToggle(category)}
                                >
                                    {category}
                                </button>
                            ))}
                            {selectedCategories.length > 0 ?
                                <button
                                    className='text-xs px-3 py-1 rounded-full border bg-gray-700 text-white border-gray-900 hover:bg-black'
                                    onClick={handleClearFilters}
                                    disabled={selectedCategories.length === 0}
                                >
                                    Limpiar filtros
                                </button>
                                : null}
                        </div>
                    </div>
                </div>

                {/* Products List */}
                <div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 gap-y-12">
                    {filteredProducts.map((product) => (
                        <div key={product._id} className={`group col ${product._id} cursor-pointer`}>
                            <div className="image relative w-full h-0 pb-[100%] overflow-hidden">
                                <Image src={product.imageUrl} alt={product.imageAlt || product.title} width={640} height={640} className="group-hover:scale-110 transition duration-200 ease-out" />
                                <div className="description">
                                    <div className="absolute p-3 pb-5 top-0 leading-none left-0 w-full h-full bg-black/50 flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition duration-200 ease-out">
                                        <span className="text-white text-xs mb-4">{product.description}</span>
                                    </div>
                                </div>
                            </div>
                            {/* description */}
                            <div className="flex align-start mt-3 leading-none text-grey-600">
                                <div>
                                    <button className={`
                                    text-gray-800 transparent border border-black font-bold text-md rounded-full 
                                    text-sm px-2.5 py-1 text-center mr-2 cursor-pointer
                                    transition duration-200 ease-out
                                    group-hover:bg-black group-hover:text-white 
                                    `}>+</button>
                                </div>
                                <div>
                                    <h5 className="text-xs font-bold">{product.title}</h5>
                                    <p className="text-xs">${product.price}.00</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        </section>

    );
}

export default Products;