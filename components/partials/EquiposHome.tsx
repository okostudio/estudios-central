"use client"
import React from 'react'
import { TransitionLink } from "@/components/TransitionLink"

const EquiposHome = () => {

    type EquipoProps = {
        cols?: string,
        rows?: string,
        imgUrl?: string
    };
    const EquipoHome = ({ cols, rows, imgUrl }: EquipoProps) => {
        return (
            <div className={`${cols ? cols : "col-span-2"} ${rows ? rows : "row-span-1"} content-stretch aspect-[3/4] relative`}>
                <TransitionLink href={"/equipos"} hoverText={"Ver equipos"} classes={'h-full group'}>
                    <div className="h-full transition-colors ease-out duration-300 group-hover:bg-white overflow-clip">
                        <img src={imgUrl} className='h-full mb-4 object-cover group-hover:scale-120 transition-transform duration-300 hover:duration-1000 ease-in-out' />
                    </div>
                    <h5 className='text-xs lg:text-sm mb-8'>
                        Digital Camera Canon EOS 5D Mark II
                    </h5>
                </TransitionLink>
            </div>
        )
    }

    // const products = await fetchProducts();
    // console.log(products);

    return (
        <section className='equipos-home py-24'>
            <div className="container mx-auto p-8">
                <h2 className=''>Alquiler <br /> de Equipos</h2>
            </div>
            <div className="w-full px-8 lg:px-8 relative">

                <div className="grid grid-cols-6 lg:grid-cols-12 min-h-full w-full py-t pb-4 gap-12 gap-y-24 md:gap-y-36">
                    <EquipoHome cols={"col-span-4 lg:col-span-3"} imgUrl={"/equipos/Digital-Camera-Canon-EOS-5D-Mark-II.jpg"} />
                    <EquipoHome cols={"col-span-2"} imgUrl={"/equipos/Light-Control-Frame-Cloth.jpg"} />
                    <EquipoHome cols={"col-span-2"} imgUrl={"/equipos/Light-Flash-Profoto-Softbox-RFI-5--Octa.png.jpg"} />
                    <EquipoHome cols={"col-span-4 lg:col-span-3"} imgUrl={"/equipos/Light-Flash-Profoto-D2-1000W.jpg"} />
                    <EquipoHome cols={"col-span-3 lg:col-span-2"} imgUrl={"/equipos/Digital-Camera-Fuji-GFX-100-S-II.jpg"} />
                </div>
                <div className="md:container mx-auto grid grid-cols-6 lg:grid-cols-12 min-h-full pb-12 gap-12 gap-y-24 md:gap-y-36">
                    <div className='col-span-6 xl:col-span-6 relative pr-[15%] md:pr-[25%] content-start'>
                        <div className="py-15 lg:py-0">
                            <p className='text-xl lg:text-xl xl:text-2xl mb-8'>Equipos de nivel profesional listos para cual quier sesión. Cámaras, luces y accesorios seleccionados para garantizar resultados de calidad.</p>
                            <TransitionLink href="/equipos"><button className="secondary min-w-[40vw] md:min-w-auto">Ver todos</button></TransitionLink>
                        </div>
                    </div>
                    <EquipoHome cols={"col-span-2"} imgUrl={"/equipos/Digital-Camera-Canon-EOS-5D-Mark-II.jpg"} />
                    <EquipoHome cols={"col-span-4 lg:col-span-3"} imgUrl={"/equipos/Light-Control-Frame-Cloth.jpg"} />
                </div>

            </div>
        </section>
    )

}



export default EquiposHome