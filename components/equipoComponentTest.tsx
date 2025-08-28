"use client"
import React, { useContext, useRef, useState } from 'react'
import Image from "next/image";

import { ProductType } from '@/types/Product';
import { HoverContext } from '@/components/common/HoverContext';
import Footer from '@/components/partials/Footer';
import { CartContext } from '@/components/common/CartContext';


type EquipoComponentProps = {
  products: ProductType[];
};

export default function EquipoComponentTest({
  products,
}: EquipoComponentProps) {

  console.log("TESTTTTT PRODUCTS", products)


  return (
    <div className="wtf">
      WTF??????
    </div>
  );
}

