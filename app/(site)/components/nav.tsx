"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { fetchNav } from '@/sanity/sanity-utils';

type MenuItem = {
    title: string;
    slug: string;
};

type NavLinksProps = {
    isMobile: boolean;
    closeMenuFunction: (open: boolean) => void;
    menu: MenuItem[];
};

const NavLinks: React.FC<NavLinksProps> = ({ isMobile, closeMenuFunction, menu }) => {
    return (
        <div className={isMobile ? "md:hidden bg-black w-full h-screen absolute left-0 top-full z-10" : "hidden md:block"}>
            <ul className={`flex ${isMobile ? "flex-col items-center justify-center h-full py-4 space-y-4 text-2xl" : "space-x-6 "} text-white uppercase font-bold`}>
                {menu.map((item) => (
                    <li key={item.slug}>
                        <Link href={`/${item.slug}`} onClick={() => closeMenuFunction(false)}>
                            {item.title}
                        </Link>
                    </li>
                ))}
                <li>
                    <Link href={`/`} onClick={() => closeMenuFunction(false)}>
                        <svg className='fill-white w-6 h6' viewBox="0 0 60 60"><path d="M53.7,3.7h-10c-.6,0-1.2.3-1.5.7-.4.5-.5,1.1-.4,1.6l1.3,6.9h-11.3s0,0,0,0h-13.3s0,0,0,0H5c-.6,0-1.2.3-1.5.7s-.5,1.1-.4,1.7l5,25c.2.9,1,1.6,2,1.6h40c.6,0,1.2-.3,1.5-.7.4-.5.5-1.1.4-1.6l-5.9-31.9h7.6c1.1,0,2-.9,2-2s-.9-2-2-2ZM25,38l-4.2-21h9.3l4.2,21h-9.3ZM7.4,17h9.3l4.2,21h-9.3l-4.2-21ZM47.6,38h-9.3l-4.2-21h9.6l3.9,21Z" /><path d="M20.1,43.3c-3.3,0-6,2.7-6,6s2.7,6,6,6,6-2.7,6-6-2.7-6-6-6ZM20.1,51.2c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2Z" /><path d="M42.1,43.3c-3.3,0-6,2.7-6,6s2.7,6,6,6,6-2.7,6-6-2.7-6-6-6ZM42.1,51.2c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2Z" /></svg>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [menu, setMenu] = useState<MenuItem[]>([]);

    useEffect(() => {
        fetchNav().then((navs) => {
            // Assumes navs[0].menu is the menu array
            if (navs && navs.length > 0 && Array.isArray(navs[0].menu)) {
                setMenu(
                    navs[0].menu
                        .filter((item) => typeof item.title === 'string' && typeof item.slug === 'string')
                        .map((item) => ({
                            title: item.title,
                            slug: item.slug,
                        }))
                );
            }
        });
    }, []);

    return (
        <nav className="fixed w-full z-100 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.0)]">
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

                {/* Desktop Menu */}
                {!menuOpen && <NavLinks isMobile={false} closeMenuFunction={setMenuOpen} menu={menu} />}
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <NavLinks isMobile={true} closeMenuFunction={setMenuOpen} menu={menu} />
            )}
        </nav>
    );
}

export default Nav;