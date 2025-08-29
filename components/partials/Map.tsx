import React from 'react'
import { MapPin } from '@/components/icons/icons'
import Link from 'next/link'

const Map = () => {
    return (
        <section>
            <div className="container mx-auto p-4 mb-12">
                <h3 className='text-3xl md:text-5xl'>Ubicación</h3>
                <p>Av. Gonzalo Ramírez 1630, 11200 Montevideo, Departamento de Montevideo</p>
            </div>
            <Link className='relative w-full' target='_blank' href={"https://www.google.com/maps/place/Av.+Gonzalo+Ram%C3%ADrez+1630,+11200+Montevideo,+Departamento+de+Montevideo/"}>
                <img src="/mapa.jpg" alt="" className='h-[50svh] lg:h-auto w-full object-cover' />
                <div className="top-0 absolute w-full h-full flex items-center justify-center pointer-events-none">
                    <MapPin size={8} classes={'fill-red-700 mb-6'} />
                </div>
            </Link>
        </section>
    )
}

export default Map
