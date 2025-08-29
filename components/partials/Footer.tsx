import React from 'react'
import { CentralLogoText } from '@/components/partials/Logos'
import Image from 'next/image'
import { TransitionLink } from '@/components/TransitionLink'
import { FacebookIcon, InstaIcon, TiktokIcon } from '@/components/icons/icons';
// import Link from 'next/link'

const Footer = () => {
    return (
        <section className='bg-black text-white py-24'>
            <div className="container mx-auto p-4 mb-12">
                <div className="flex flex-col items-center justify-center">
                    <CentralLogoText name='footer-logo' />

                    <div className="w-full  footer-nav mt-12">
                        <div className="flex flex-row justify-between items-center">
                            <Image
                                src="/logo-central-land-white-white.png"
                                alt="central"
                                className="logo h-10 w-auto hidden md:block"
                                width={565 * 0.5}
                                height={120 * 0.5}
                                priority
                            />
                            <div className="nav-links mx-auto md:mx-0">
                                <ul className="flex items-center  space-x-12 text-white uppercase font-bold">
                                    <li><TransitionLink href={`/estudios`}>Estudios</TransitionLink></li>
                                    <li><TransitionLink href={`/equipos`}>Equipos</TransitionLink></li>
                                    <li><TransitionLink href={`/faq`}>FAQ</TransitionLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="social-links flex items-center justify-end text-white space-x-4 border-t-1 border-t-white pt-3 mt-4">
                            <TiktokIcon size={4} />
                            <FacebookIcon size={4} />
                            <InstaIcon size={4} />
                        </div>
                    </div>

                    <p className='text-xs mt-8'>© Central, Inc. 2025</p>
                </div>
                {/* <div className="h-full w-full md:col-span-12 text-center overflow-hidden flex items-center justify-center">
                    <div className="hero content flex flex-col items-center justify-center">
                        
                    </div>
                </div> */}

            </div>
        </section>
    )
}

export default Footer
