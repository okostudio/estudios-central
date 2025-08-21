"use client";
import Image from 'next/image';
import { useState } from 'react';
import { TransitionLink } from './TransitionLink';
import { CartIcon, FacebookIcon, InstaIcon, TiktokIcon } from './icons/icons';



type NavLinksProps = {
    isMobile: boolean;
    closeMenuFunction: (open: boolean) => void;
};

const NavLinks: React.FC<NavLinksProps> = ({ isMobile, closeMenuFunction }) => {
    return (
        <div className={isMobile ? "md:hidden bg-black w-full h-screen absolute left-0 top-full z-10" : "hidden md:block"}>
            <ul className={`flex ${isMobile ? "flex-col items-center justify-center h-full py-4 space-y-4 text-2xl" : "space-x-6 "} text-white uppercase font-bold`}>
                <li><TransitionLink href={`/estudios`} onClick={() => closeMenuFunction(false)}>Estudios</TransitionLink></li>
                <li><TransitionLink href={`/equipo`} onClick={() => closeMenuFunction(false)}>Equipo</TransitionLink></li>
                <li><TransitionLink href={`/`} onClick={() => closeMenuFunction(false)}>
                    <CartIcon />
                </TransitionLink></li>
            </ul>
        </div>
    );
};

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    // const [menu, setMenu] = useState<MenuItem[]>([]);

    return (
        <nav className="top-nav fixed w-full z-100 bg-gradient-to-b from-[rgba(0,0,0,0.75)] to-[rgba(0,0,0,0.0)]">
            <div className="container mx-auto p-4">
                <div className="social-links flex items-center justify-start space-x-4">
                    <TiktokIcon size={4} />
                    <FacebookIcon size={4} />
                    <InstaIcon size={4} />
                </div>
                <div className="nav-links flex items-center justify-between mt-4 border-t-1 border-t-white pt-4">
                    <TransitionLink href="/" passHref>
                        <Image
                            src="/logo-central-land-white-white.png"
                            alt="central"
                            className="logo h-10 w-auto"
                            width={565 * 0.5}
                            height={120 * 0.5}
                            priority
                        />
                    </TransitionLink>

                    {/* Hamburger button for md and below */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center w-10 h-10"
                        aria-label="Toggle menu"
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        <span className={`block w-4 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                        <span className={`block w-4 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-4 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <ul className="flex items-center  space-x-12 text-white uppercase font-bold">
                            <li><TransitionLink href={`/estudios`}>Estudios</TransitionLink></li>
                            <li><TransitionLink href={`/equipo`}>Equipo</TransitionLink></li>
                            <li><TransitionLink href={`/faq`}>FAQ</TransitionLink></li>
                        </ul>
                    </div>

                    <div className="rightNav hidden md:block">
                        <div className="flex items-center  space-x-6 text-white uppercase font-bold">

                            <div className="hidden lg:block">
                                <TransitionLink href={`/`}>
                                    <button className="button-white">
                                        Reservar Estudios
                                    </button>
                                </TransitionLink>
                            </div>
                            <TransitionLink href={`/`}><CartIcon size={10} /></TransitionLink>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <NavLinks isMobile={true} closeMenuFunction={setMenuOpen} />
            )}
        </nav>
    );
}

export default Nav;