"use client"
import React from 'react'
import { TransitionLink } from "@/components/TransitionLink"
import { fetchProducts } from "@/sanity/sanity-utils";

const EquiposHome = () => {

    type EquipoProps = {
        cols?: string,
        rows?: string,
        imgUrl?: string
    };

    const Equipo = ({ cols, rows, imgUrl }: EquipoProps) => {
        return (
            <div className={`${cols ? cols : "col-span-2"} ${rows ? rows : "row-span-1"} content-stretch aspect-[3/4] relative`}>
                <TransitionLink href={"/equipo"} classes={'h-full group'}>
                    <img src={imgUrl} className='h-full mb-4 object-cover saturate-0 group-hover:mix-blend-normal group-hover:saturate-100' />
                    <h3 className='text-xs lg:text-sm mb-8'>
                        Digital Camera Canon EOS 5D Mark II
                    </h3>
                </TransitionLink>
            </div>
        )
    }

    // const products = await fetchProducts();
    // console.log(products);

    return (
        <section className='equipos-home py-24'>
            <div className="container mx-auto p-4">
                <h3 className='text-3xl md:text-5xl'>Alquiler <br /> de Equipos</h3>
            </div>
            <div className="w-full px-4 lg:px-8 relative">

                <div className="grid grid-cols-6 xl:grid-cols-12 min-h-full w-full py-12  gap-4 md:gap-12 md:gap-y-36">
                    <Equipo cols={"col-span-4 xl:col-span-3"} imgUrl={"/equipos/Digital-Camera-Canon-EOS-5D-Mark-II.jpg"} />
                    <Equipo cols={"col-span-2"} imgUrl={"/equipos/Light-Control-Frame-Cloth.jpg"} />
                    <Equipo cols={"col-span-2"} imgUrl={"/equipos/Light-Flash-Profoto-Softbox-RFI-5--Octa.png.jpg"} />
                    <Equipo cols={"col-span-4 xl:col-span-3"} imgUrl={"/equipos/Light-Flash-Profoto-D2-1000W.jpg"} />
                    <Equipo cols={"col-span-3 xl:col-span-2"} imgUrl={"/equipos/Digital-Camera-Fuji-GFX-100-S-II.jpg"} />
                    <div className='col-span-3 xl:col-span-4 relative md:pr-[50%] content-end'>
                        <p>Equipos de nivel profesional listos para cual quier sesión. Cámaras,luces y accesorios seleccionados para garantizar resultados de calidad.</p>
                    </div>
                    <Equipo cols={"col-span-2"} imgUrl={"/equipos/Digital-Camera-Canon-EOS-5D-Mark-II.jpg"} />
                    <Equipo cols={"col-span-4 xl:col-span-3"} imgUrl={"/equipos/Light-Control-Frame-Cloth.jpg"} />
                </div>

            </div>
        </section>
    )

}



export default EquiposHome