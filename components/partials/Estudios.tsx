import React from 'react'
import { TransitionLink } from '@/components/TransitionLink'

const Estudios = () => {

    return (
        <section className='mb-24'>
            <div className="container mx-auto px-4 relative">

                <div className="md:grid grid-flow-col grid-cols-8 min-h-full w-full py-12">
                    <div className="col-span-3 content-stretch">
                        <div className="h-full flex justify-between flex-col">
                            <TransitionLink href={"/estudios"} classes="m-12 md:m-0 mb-12">
                                <img src="/studio-sml.jpg" className='w-full mb-4' alt="" />
                                <h3 className='text-2xl lg:text-4xl mb-8'>
                                    Estudio //<br />
                                    Chico
                                </h3>
                                <p className='underline text-sm'>Ver mas</p>
                            </TransitionLink>

                            <div className="hidden md:block lg:w-[75%] lg:text-xl">
                                <p>Espacios diseña dos para adaptarsea cada
                                    producción. Su perficies amplias, gran altura y
                                    la posibilidad de transformar el estudio según
                                    las necesida des del proyecto.</p>
                            </div>
                        </div>
                    </div>



                    <div className="col-span-4 col-start-5 ">
                        <TransitionLink href={"/estudios"}>
                            <img src="/studio-lrg.jpg" className='w-full mb-4' alt="" />
                            <h3 className='text-2xl lg:text-4xl mb-8'>
                                Estudio //<br />
                                Grande
                            </h3>
                            <p className='underline text-sm'>Ver mas</p>
                        </TransitionLink>
                    </div>
                </div>

            </div>
        </section>
    )

}

export default Estudios