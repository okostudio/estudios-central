"use client"
import React, { useContext, useRef, useState } from 'react'
import Image from "next/image";

import { ProductType } from '@/types/Product';
import { HoverContext } from '@/components/common/HoverContext';
import { CartContext } from '@/components/common/CartContext';
import CursorFollowWrapper from '@/components/common/CursorFollowWrapper';
import Equipo from '@/components/partials/Equipo';


type EquipoComponentProps = {
  products: ProductType[];
};

export default function EquipoComponent({
  products,
}: EquipoComponentProps) {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const { cart, setCart } = useContext(CartContext)

  const addToCart = (productId: string) => {
    setCart((prev: string[]) => {
      if (prev.includes(productId)) return prev;
      return [...prev, productId];
    });
  };

  const toggleCart = (productId: string) => {
    setCart((prev: string[]) =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  //
  //
  // FILTERS
  //
  // Get all unique categories
  const categories = Array.from(new Set(products.map((product) => product.category)));

  // State for selected categories
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

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
    <CursorFollowWrapper>
      <div className="mx-auto px-4 py-24">
        {/* Filter Component */}
        <div className="filters mb-4">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-3xl md:text-5xl tracking-tight pb-4 font-bold">Solicitud de alquiler de equipos</h1>
          </div>
          <div className="flex flex-wrap gap-1 mb-4 pb-4">

            {/* category buttons */}
            {categories.map((category) => (
              <button
                key={category}
                className={`secondary ${selectedCategories.includes(category) ? 'selected' : null}`}
                onClick={() => handleCategoryToggle(category)}
              >
                {category}
              </button>
            ))}

            {/* View all button */}
            {selectedCategories.length > 0 ?
              <button
                className='primary'
                onClick={handleClearFilters}
                disabled={selectedCategories.length === 0}
              >
                Ver todos
              </button>
              : null}

          </div>
        </div>
        {/* Products List */}
        <div className="grid grid-cols-2 md:[grid-template-columns:repeat(auto-fit,minmax(120px,180px))] gap-4 md:gap-8 md:gap-y-16">
          {filteredProducts.map((product) => (
            <Equipo key={product._id} product={product} addToCart={addToCart} toggleCart={toggleCart} />
          ))}
        </div>
      </div>
    </CursorFollowWrapper>
  );
}

