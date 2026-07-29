"use client";

import Link from 'next/link';
import FadeIn from './components/FadeIn';
import { projetosDestaque } from './data/projetos';

export default function Home() {
  return (
    <main className="min-h-screen relative z-10 flex flex-col bg-osso">
      {/* Efeito de ruído global opcional */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.04] mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')]"></div>

      {/* 1. HERO SECTION */}
      <FadeIn>
        <section className="pt-24 pb-20 md:pt-32 md:pb-28 px-[6vw] md:px-[8vw] grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center min-h-[85vh]">

          {/* Lado Esquerdo: Textos */}
          <div>
            <span className="font-mono text-sm tracking-[0.15em] uppercase text-vinho mb-6 block font-medium">
              Geovanna Melo · Portfólio
            </span>
            <h1 className="font-serif font-normal text-[clamp(44px,6vw,80px)] leading-[1.05] max-w-[1100px] text-preto mb-8">
              Organizando narrativas através do <i className="italic font-light text-vinho">corte certeiro.</i>
            </h1>
            <p className="font-sans text-lg md:text-xl text-preto/75 max-w-[600px] leading-[1.6]">
              Editora de vídeo e realizadora audiovisual. Do cinema à criação de conteúdo para marcas, unindo linguagem técnica e visão estética.
            </p>

            {/* BOTÕES ATUALIZADOS */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <Link
                href="/projetos"
                className="inline-block font-mono text-sm tracking-[0.1em] uppercase bg-preto text-osso py-4 px-10 hover:bg-vinho transition-colors text-center"
              >
                Ver Projetos
              </Link>
              <a
                href="/Portfólio Editora de Vídeo - Geovanna Melo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-mono text-sm tracking-[0.1em] uppercase border border-preto/20 text-preto py-4 px-10 hover:border-preto hover:text-vinho transition-colors text-center"
              >
                Baixar Currículo
              </a>
            </div>
          </div>

          {/* Lado Direito: Foto Emoldurada */}
          <div className="relative w-full max-w-[420px] mx-auto lg:ml-auto mt-10 lg:mt-0">
            <div className="absolute inset-0 translate-x-4 translate-y-4 border border-vinho/40"></div>

            <div className="aspect-[3/4] bg-osso2 border border-preto/15 relative z-10 flex flex-col items-center justify-center overflow-hidden group">
              <img
                src="/foto-home.jpg"
                alt="Geovanna Melo"
                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 absolute inset-0 z-0"
                onError={(e) => e.target.style.display = 'none'}
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center bg-osso2 text-preto/30 -z-10">
                <span className="font-mono text-3xl">+</span>
                <span className="font-mono text-xs tracking-widest uppercase mt-2">[ sua foto ]</span>
              </div>

              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-osso z-20 mix-blend-difference"></div>
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-osso z-20 mix-blend-difference"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-osso z-20 mix-blend-difference"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-osso z-20 mix-blend-difference"></div>
            </div>
          </div>

        </section>
      </FadeIn>

      {/* 2. PROJETOS EM DESTAQUE */}
      <FadeIn>
        <section className="py-20 bg-preto/5 border-y border-preto/15">
          <div className="px-[6vw] md:px-[8vw] mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-mono text-sm tracking-[0.15em] uppercase text-vinho mb-3 block font-medium">Trabalhos Selecionados</span>
              <h2 className="font-serif font-normal text-4xl md:text-5xl text-preto">
                Em <i className="italic font-light text-vinho">Destaque</i>
              </h2>
            </div>
            <Link
              href="/projetos"
              className="font-mono text-sm text-[#C99A3E] hover:text-vinho hover:underline tracking-widest uppercase"
            >
              Ver todos os projetos →
            </Link>
          </div>

          <div className="px-[6vw] md:px-[8vw]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-preto/15 border border-preto/15">
              {projetosDestaque && projetosDestaque.map((proj) => (
                <div key={proj.id} className="bg-osso flex flex-col md:grid md:grid-cols-[220px_1fr] gap-8 p-8 md:p-10 transition-colors hover:bg-osso/80">

                  {/* Pôster */}
                  <div className="aspect-[2/3] border border-dashed border-preto/30 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-osso2 to-osso relative overflow-hidden group">
                    {proj.imagem ? (
                      <img src={proj.imagem} alt={proj.tituloNormal} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                    ) : (
                      <>
                        <span className="font-mono text-3xl text-preto/25">+</span>
                        <span className="font-mono text-xs text-preto/30 tracking-widest uppercase">pôster</span>
                      </>
                    )}
                  </div>

                  {/* Infos do Card */}
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <div className="flex justify-between font-mono text-xs md:text-sm text-vinho mb-3 uppercase tracking-wider font-medium">
                        <span>{proj.meta1}</span>
                        <span>{proj.meta2}</span>
                      </div>
                      <h3 className="font-serif font-medium text-3xl md:text-4xl leading-[1.1] text-preto">
                        {proj.tituloNormal} <i className="italic font-light text-vinho">{proj.tituloItalico}</i>
                      </h3>
                      <p className="font-sans text-base md:text-lg text-preto/75 mt-4 leading-[1.6] italic">
                        {proj.sinopse}
                      </p>
                    </div>
                    <div className="mt-8 pt-5 border-t border-preto/10">
                      <div className="font-mono text-xs md:text-sm text-preto/60 uppercase tracking-widest">{proj.funcoes}</div>
                      <div className="font-mono text-xs md:text-sm text-[#C99A3E] mt-2 font-medium hover:underline cursor-pointer tracking-widest">
                        <a href={proj.link} target="_blank" rel="noopener noreferrer">[ ver projeto ]</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 3. SNEAK PEEK SOBRE */}
      <FadeIn>
        <section className="py-24 px-[6vw] md:px-[8vw] flex flex-col items-center text-center">
          <span className="font-mono text-sm tracking-[0.15em] uppercase text-[#C99A3E] mb-6 block font-medium">Visão & Trajetória</span>
          <h2 className="font-serif font-normal text-[clamp(32px,5vw,56px)] leading-tight max-w-[800px] text-preto mb-8">
            A técnica serve à <i className="italic font-light text-vinho">narrativa.</i>
          </h2>
          <p className="font-sans text-lg md:text-xl text-preto/80 max-w-[650px] leading-relaxed mb-10">
            Formada em Cinema e Audiovisual pela UFPE e estudante de Análise e Desenvolvimento de Sistemas. Acredito que um bom vídeo une sensibilidade artística com inteligência estrutural e estratégia.
          </p>
          <Link
            href="/sobre"
            className="group font-serif italic text-2xl md:text-3xl text-vinho hover:opacity-75 transition-opacity flex items-center gap-4"
          >
            <span>Descubra como eu trabalho</span>
            <span className="font-sans text-xl group-hover:translate-x-2 transition-transform">→</span>
          </Link>
        </section>
      </FadeIn>

      {/* 4. CTA FINAL */}
      <FadeIn>
        <section className="w-full bg-[#C84A31] text-[#FAF4E6] py-28 md:py-36 px-[6vw] md:px-[8vw] flex flex-col items-center justify-center text-center">

          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] mb-8 opacity-90">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FAF4E6]"></span>
            <span>Status: Disponível</span>
          </div>

          <h2 className="font-serif font-normal text-[clamp(36px,5vw,64px)] leading-tight mb-12 max-w-4xl">
            Vamos conversar sobre o seu <i className="font-light italic">próximo projeto.</i>
          </h2>

          <Link
            href="/contato"
            className="inline-block font-mono text-sm tracking-[0.15em] uppercase border border-[#FAF4E6]/40 hover:bg-[#FAF4E6] hover:text-[#C84A31] transition-colors px-12 py-5 font-medium"
          >
            Entrar em Contato
          </Link>
        </section>
      </FadeIn>

    </main>
  );
}