"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';



type NavLinksProps = {
    isMobile: boolean;
    closeMenuFunction: (open: boolean) => void;
};

const NavLinks: React.FC<NavLinksProps> = ({ isMobile, closeMenuFunction }) => {
    return (
        <div className={isMobile ? "md:hidden  bg-black w-full h-screen absolute left-0 top-full z-10" : "hidden md:block"}>
            <ul className={`flex ${isMobile ? "flex-col items-center justify-center h-full py-4 space-y-4 text-2xl" : "space-x-6 "} text-white uppercase font-bold`}>
                <li><Link href="/equipo" onClick={() => closeMenuFunction(false)}>Equipo</Link></li>
                <li><Link href="/estudios" onClick={() => closeMenuFunction(false)}>Estudios</Link></li>
                <li><Link href="/contact" onClick={() => closeMenuFunction(false)}>Contacto</Link></li>
            </ul>
        </div>
    );
};

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full z-100 mb-50 bg-black">
            <div className="container mx-auto p-4 flex items-center justify-between">
                <Link href="/" passHref>
                    <Image
                        src="/central-horz-white.png"
                        alt="central"
                        className="logo h-10 w-auto"
                        width={565 * 0.5}
                        height={120 * 0.5}
                        priority
                    />
                </Link>

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

                {/* Menu */}
                {!menuOpen &&
                    (<NavLinks isMobile={false} closeMenuFunction={setMenuOpen} />)
                }

            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <NavLinks isMobile={true} closeMenuFunction={setMenuOpen} />
            )}
        </nav>
    );
}

export default Nav;