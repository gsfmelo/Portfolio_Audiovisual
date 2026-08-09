// src/app/components/Navbar.js
"use client";

import Link from 'next/link';
import { useState } from 'react';
import StatusBadge from './StatusBadge';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* MENU SUPERIOR (NAV) */}
            <nav className="flex justify-between items-center py-6 px-[6vw] md:px-[8vw] relative z-50 bg-osso">
                <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="font-serif italic text-2xl hover:opacity-75 transition-opacity"
                >
                    Geovanna <span className="text-vinho">Melo</span>
                </Link>

                <div className="hidden md:block">
                    <StatusBadge />
                </div>

                <div className="hidden md:flex gap-8 font-mono text-[13px] tracking-[0.05em] uppercase font-medium">
                    <Link href="/" className="text-preto/70 hover:text-vinho transition-colors">home</Link>
                    <Link href="/projetos" className="text-preto/70 hover:text-vinho transition-colors">projetos</Link>
                    <Link href="/sobre" className="text-preto/70 hover:text-vinho transition-colors">sobre</Link>
                    <Link href="/contato" className="text-preto/70 hover:text-vinho transition-colors">contato</Link>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden font-mono text-[12px] tracking-widest uppercase text-preto z-50 p-3 focus:outline-none bg-osso2 border border-preto/15"
                    aria-label="Menu"
                >
                    {isOpen ? '[ fechar ]' : '[ menu ]'}
                </button>
            </nav>

            {/* OVERLAY DO MENU MOBILE */}
            {isOpen && (
                <div className="fixed inset-0 bg-osso z-40 flex flex-col justify-center px-[8vw] md:hidden animate-fadeIn">
                    <div className="mb-10">
                        <StatusBadge />
                    </div>
                    <div className="flex flex-col gap-8 font-serif text-3xl sm:text-4xl">
                        <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-vinho transition-colors">
                            home <span className="font-mono text-xs text-vinho tracking-widest block mt-1.5">/home</span>
                        </Link>
                        <Link href="/projetos" onClick={() => setIsOpen(false)} className="hover:text-vinho transition-colors">
                            projetos <span className="font-mono text-xs text-vinho tracking-widest block mt-1.5">/ projetos</span>
                        </Link>
                        <Link href="/sobre" onClick={() => setIsOpen(false)} className="hover:text-vinho transition-colors">
                            sobre <span className="font-mono text-xs text-vinho tracking-widest block mt-1.5">/sobre</span>
                        </Link>
                        <Link href="/contato" onClick={() => setIsOpen(false)} className="hover:text-vinho transition-colors">
                            contato <span className="font-mono text-xs text-vinho tracking-widest block mt-1.5">/contato</span>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}