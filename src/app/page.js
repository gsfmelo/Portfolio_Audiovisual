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

            {/* BOTÕES */}
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

          {/* Lado Direito: Foto Estilo Viewfinder Cinematográfico */}
          <div className="relative w-full max-w-sm md:max-w-md aspect-square mx-auto lg:ml-auto group">
            
            {/* Marcas de Enquadramento (Viewfinder) com animação sutil */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-[1.5px] border-l-[1.5px] border-preto/80 z-10 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 duration-500"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-[1.5px] border-r-[1.5px] border-preto/80 z-10 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 duration-500"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-[1.5px] border-l-[1.5px] border-preto/80 z-10 transition-transform group-hover:-translate-x-2 group-hover:translate-y-2 duration-500"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-[1.5px] border-r-[1.5px] border-preto/80 z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-500"></div>

            {/* A Imagem */}
            <div className="w-full h-full p-2">
              <img 
                src="/home.jpg" 
                alt="Geovanna Melo - Realizadora e Editora" 
                className="w-full h-full object-cover object-top grayscale contrast-125 brightness-95 group-hover:grayscale-0 transition-all duration-700 shadow-xl" 
              />
            </div>

            {/* Detalhe técnico minimalista (tipo visor de câmera) */}
            <div className="absolute -right-8 bottom-12 rotate-90 font-mono text-[9px] tracking-[0.3em] text-preto/40 uppercase hidden md:block select-none">
              REC // 24FPS
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
                <div key={proj.id} className="bg-osso flex flex-col gap-5 p-6 md:p-8 h-full transition-colors hover:bg-osso/80">

                  {/* Still em cima (Formato Tela de Cinema 16:9) */}
                  <div className="w-full aspect-video border border-dashed border-preto/30 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-osso2 to-osso relative overflow-hidden group">
                    {proj.still || proj.imagem ? (
                      <img 
                        src={proj.still || proj.imagem} 
                        alt={proj.tituloNormal} 
                        className="w-full h-full object-cover object-center grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                      />
                    ) : (
                      <>
                        <span className="font-mono text-3xl text-preto/25">+</span>
                        <span className="font-mono text-xs text-preto/30 tracking-widest uppercase">still</span>
                      </>
                    )}
                  </div>

                  {/* Informações Enxutas embaixo */}
                  <div className="flex flex-col flex-1 mt-2">
                    
                    {/* Tags */}
                    <div className="flex justify-between items-center mb-3 border-b border-preto/15 pb-3">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-vinho">{proj.meta1}</span>
                      <span className="font-mono text-[10px] uppercase text-vinho">{proj.meta2}</span>
                    </div>
                    
                    {/* Títulos */}
                    <h3 className="font-serif font-medium text-2xl md:text-3xl text-preto leading-tight">
                      {proj.tituloNormal} <i className="text-vinho font-light">{proj.tituloItalico}</i>
                    </h3>
                    
                    {/* Funções e Link presos no rodapé da caixa */}
                    <div className="mt-auto pt-6 flex items-center justify-between gap-4">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-preto/60">
                        {proj.funcoes}
                      </span>
                      <a 
                        href={proj.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="font-mono text-[10px] text-[#C99A3E] uppercase tracking-widest font-medium hover:underline whitespace-nowrap"
                      >
                        [ ver projeto ]
                      </a>
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