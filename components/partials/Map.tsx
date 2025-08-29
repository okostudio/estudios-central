import React from 'react'
import { MapPin } from '@/components/icons/icons'
import Link from 'next/link'

const Map = () => {
    return (
        <section>
            <div className="container mx-auto p-4 pt-16 mb-12">
                <h2 className='mb-4'>Ubicación</h2>
                <p className=''>Av. Gonzalo Ramírez 1630, 11200 Montevideo, Departamento de Montevideo</p>
            </div>
            <Link className='relative w-full' target='_blank' href={"https://www.google.com/maps/place/Av.+Gonzalo+Ram%C3%ADrez+1630,+11200+Montevideo,+Departamento+de+Montevideo/"}>
                <img src="/mapa.jpg" alt="mapa" className='hidden  md:block h-[70svh] lg:h-auto w-full object-cover' />
                <img src="/mapa-iphone.jpg" alt="mapa" className='md:hidden h-[50svh] w-full object-cover' />
                <div className="hidden md:flex top-0 absolute w-full h-full items-center justify-center pointer-events-none">
                    <MapPin size={8} classes={'fill-red-700 mb-6'} />
                </div>
            </Link>
        </section>
    )
}

export default Map
