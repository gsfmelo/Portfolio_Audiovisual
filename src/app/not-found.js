// src/app/not-found.js
"use client";

import Link from 'next/link';
import FadeIn from './components/FadeIn';

export default function NotFound() {
  return (
    <main className="min-h-screen relative z-10 flex flex-col bg-osso text-preto">
      {/* Efeito de ruído global opcional */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.04] mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')]"></div>

      {/* CONTEÚDO CENTRAL (404) */}
      <FadeIn>
        <section className="flex flex-col items-center justify-center text-center py-24 md:py-32 px-[6vw] md:px-[8vw] min-h-[70vh]">
          
          {/* Container do Viewfinder com conteúdo */}
          <div className="relative w-full flex flex-col items-center justify-center p-8">
            
            {/* Marcas de Enquadramento (Viewfinder) - CORRIGIDAS PARA VINHO */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-[1.5px] border-l-[1.5px] border-vinho z-10"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-[1.5px] border-r-[1.5px] border-vinho z-10"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-[1.5px] border-l-[1.5px] border-vinho z-10"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-[1.5px] border-r-[1.5px] border-vinho z-10"></div>

            {/* Kicker de Status */}
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] mb-6 text-preto/60">
              {/* O ponto mudou de creme para vinho */}
              <span className="w-1.5 h-1.5 rounded-full bg-vinho"></span>
              <span>Erro 404 · Cena Não Encontrada</span>
            </div>
            
            {/* Título Principal */}
            <h1 className="font-serif font-normal text-[clamp(48px,8vw,80px)] leading-[1.05] max-w-[800px] text-preto">
              Ops, esta cena ficou na
              {/* O itálico mudou de terracota para VINHO */}
              <i className="italic font-light text-vinho"> sala de corte.</i>
            </h1>
            
            {/* Descrição */}
            <p className="font-sans text-base md:text-lg text-preto/75 max-w-[550px] leading-[1.6] mt-6">
              O link que você tentou acessar não existe ou foi descartado na montagem final. Vamos voltar para o roteiro principal?
            </p>

            {/* BOTÃO (PADRONIZADO E CORRIGIDO) */}
            <div className="mt-12">
              <Link
                href="/"
                className="inline-block font-mono text-xs md:text-sm tracking-[0.1em] uppercase bg-vinho text-osso py-3.5 px-8 hover:bg-preto transition-colors text-center"
              >
                ← Voltar para a Home
              </Link>
            </div>
          </div>
          
        </section>
      </FadeIn>

    </main>
  );
}