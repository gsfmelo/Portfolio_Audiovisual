"use client";

import "./globals.css";
import Link from 'next/link';
import { useState } from 'react';
import BackToTop from './components/BackToTop';
import StatusBadge from './components/StatusBadge';

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="pt-BR">
      <body className="antialiased flex flex-col min-h-screen relative">

        {/* MENU SUPERIOR (NAV) */}
        <nav className="flex justify-between items-center py-6 px-[8vw] relative z-50 bg-osso">

          {/* LOGO CLICÁVEL */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="font-serif italic text-xl hover:opacity-75 transition-opacity"
          >
            geovanna <span className="text-vinho">melo</span>
          </Link>

          {/* SELO DE STATUS NO DESKTOP (Aparece em telas médias e grandes) */}
          <div className="hidden md:block">
            <StatusBadge />
          </div>

          {/* Links Desktop */}
          <div className="hidden md:flex gap-7 font-mono text-[11px] tracking-[0.05em] uppercase">
            <a href="/" className="text-preto/55 hover:text-vinho transition-colors">home</a>
            <a href="/projetos" className="text-preto/55 hover:text-vinho transition-colors">projetos</a>
            <a href="/sobre" className="text-preto/55 hover:text-vinho transition-colors">sobre</a>
            <a href="/contato" className="text-preto/55 hover:text-vinho transition-colors">contato</a>
          </div>

          {/* Botão do Menu Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden font-mono text-[11px] tracking-widest uppercase text-preto z-50 p-2 focus:outline-none"
            aria-label="Menu"
          >
            {isOpen ? '[ fechar ]' : '[ menu ]'}
          </button>
        </nav>

        {/* OVERLAY DO MENU MOBILE */}
        {isOpen && (
          <div className="fixed inset-0 bg-osso z-40 flex flex-col justify-center px-[10vw] md:hidden animate-fadeIn">

            {/* Selo de Status visível no menu mobile */}
            <div className="mb-8">
              <StatusBadge />
            </div>

            <div className="flex flex-col gap-8 font-serif text-3xl">
              <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-vinho transition-colors">
                home <span className="font-mono text-xs text-vinho tracking-widest block mt-1">/ início</span>
              </Link>
              <Link href="/projetos" onClick={() => setIsOpen(false)} className="hover:text-vinho transition-colors">
                projetos <span className="font-mono text-xs text-vinho tracking-widest block mt-1">/ portfólio e curtas</span>
              </Link>
              <Link href="/sobre" onClick={() => setIsOpen(false)} className="hover:text-vinho transition-colors">
                sobre <span className="font-mono text-xs text-vinho tracking-widest block mt-1">/ bio e tech</span>
              </Link>
              <Link href="/contato" onClick={() => setIsOpen(false)} className="hover:text-vinho transition-colors">
                contato <span className="font-mono text-xs text-vinho tracking-widest block mt-1">/ e-mail e whatsapp</span>
              </Link>
            </div>
          </div>
        )}

        {/* DIVISOR ESTILO PELÍCULA - TOPO */}
        <div
          className="w-full h-12 border-y border-preto/15"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(36, 29, 24, 0.12) 3px, transparent 3.5px)',
            backgroundSize: '64px 100%',
            backgroundPosition: 'center'
          }}
        ></div>

        {/* CONTEÚDO DAS PÁGINAS */}
        <div className="flex-grow">
          {children}
        </div>

        {/* DIVISOR ESTILO PELÍCULA - RODAPÉ */}
        <div
          className="w-full h-12 border-y border-preto/15 mt-16"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(36, 29, 24, 0.12) 3px, transparent 3.5px)',
            backgroundSize: '64px 100%',
            backgroundPosition: 'center'
          }}
        ></div>

        {/* RODAPÉ (FOOTER) */}
        <footer className="py-8 px-[8vw] flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-[11px] text-preto/50 tracking-widest uppercase mt-auto">
          <span>© 2026 Geovanna Melo</span>
          <span>Editora de Vídeo & Realizadora</span>
        </footer>

        {/* BOTÃO VOLTAR AO TOPO FLUTUANTE */}
        <BackToTop />

      </body>
    </html>
  );
}