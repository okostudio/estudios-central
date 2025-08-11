import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {
    return (
        <nav className="fixed w-full z-100 mb-50 bg-black">
            <div className="container mx-auto flex items-center justify-between p-4">
                <Link href="/" passHref>
                    <Image
                        src="/central-horz-blanco.svg"
                        alt="central"
                        className="logo h-10"
                        width={200}
                        height={40}
                        priority
                    />
                </Link>

                <div className="menu">
                    <ul className="flex justify-center space-x-6 text-white">
                        <li><Link href="/equipo" className="hover:underline">Equipo</Link></li>
                        <li><Link href="/estudios" className="hover:underline">Estudios</Link></li>
                        <li><Link href="/contact" className="hover:underline">Contacto</Link></li>
                    </ul>
                </div>
            </div>

        </nav >
    );
}

export default Nav; 