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
        <section className="pt-12 pb-16 md:pt-16 md:pb-20 px-[6vw] md:px-[8vw] grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center min-h-[70vh]">

          {/* Lado Esquerdo: Textos */}
          <div>
            <span className="font-mono text-xs md:text-sm tracking-[0.15em] uppercase text-vinho mb-5 block font-medium">
              Geovanna Melo · Portfólio
            </span>
            
            <h1 className="font-serif font-normal text-[clamp(36px,4.5vw,60px)] leading-[1.05] max-w-[800px] text-preto mb-6">
              Transformando <i className="italic font-light text-vinho">ideias</i> em narrativas que fazem <i className="italic font-light text-vinho">sentido.</i>
            </h1>
            
            <p className="font-sans text-base md:text-lg text-preto/75 max-w-[550px] leading-[1.6]">
              Audiovisual, comunicação e tecnologia — conectados por um olhar criativo, inovador e estratégico.
            </p>

            {/* BOTÕES */}
            <div className="mt-8 flex flex-col sm:flex-row gap-5">
              <Link
                href="/projetos"
                className="inline-block font-mono text-xs md:text-sm tracking-[0.1em] uppercase bg-preto text-osso py-3.5 px-8 hover:bg-vinho transition-colors text-center"
              >
                Ver Projetos
              </Link>
              <a
                href="/curriculo-geovannamelo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-mono text-xs md:text-sm tracking-[0.1em] uppercase border border-preto/20 text-preto py-3.5 px-8 hover:border-preto hover:text-vinho transition-colors text-center"
              >
                Baixar Currículo
              </a>
            </div>
          </div>

{/* Lado Direito: Foto Retangular DEITADA (Paisagem) */}
          <div className="w-full flex justify-center lg:justify-end">
            {/* Mudei para aspect-[4/3] (deitada) e aumentei a largura máxima para 500px */}
            <div className="relative w-full max-w-[400px] lg:max-w-[500px] aspect-[4/3] mx-auto lg:mr-0 group mt-8 lg:mt-0">
              
              {/* Marcas de Enquadramento (Viewfinder) */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-[1.5px] border-l-[1.5px] border-preto/80 z-10 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 duration-500"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-[1.5px] border-r-[1.5px] border-preto/80 z-10 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 duration-500"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-[1.5px] border-l-[1.5px] border-preto/80 z-10 transition-transform group-hover:-translate-x-2 group-hover:translate-y-2 duration-500"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-[1.5px] border-r-[1.5px] border-preto/80 z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-500"></div>

              {/* A Imagem */}
              <div className="w-full h-full p-2">
                <img 
                  src="/home.jpg" 
                  alt="Geovanna Melo - Realizadora Audiovisual e Editora de Vídeo" 
                  className="w-full h-full object-cover object-center grayscale contrast-110 brightness-95 group-hover:grayscale-0 transition-all duration-700 shadow-xl" 
                />
              </div>

              {/* Detalhe técnico */}
              <div className="absolute -right-8 bottom-12 rotate-90 font-mono text-[9px] tracking-[0.3em] text-preto/40 uppercase hidden md:block select-none">
                REC // 24FPS
              </div>

            </div>
          </div>

        </section>
      </FadeIn>

      {/* 1.5 TIRINHA DE CLIENTES / PARCEIROS (MARQUEE CORRIGIDO) */}
      {/* Recoloquei o whitespace-nowrap aqui para impedir que os textos quebrem linha */}
      <div className="w-full bg-vinho text-osso py-2.5 overflow-hidden flex items-center whitespace-nowrap border-y border-vinho/80 relative">
        
        {/* Estilo local para a animação infinita */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
        `}} />

        {/* O container que rola (com whitespace-nowrap reforçado) */}
        <div className="animate-marquee flex items-center w-max whitespace-nowrap">
          {/* A lista de nomes. Repetimos ela duas vezes no código para o loop ficar perfeito e sem buracos */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center whitespace-nowrap">
              <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase mx-8">Miss Universe PE</span>
              <span className="text-ambar text-sm md:text-base mx-2">✦</span>
              <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase mx-8">Falcor Travels</span>
              <span className="text-ambar text-sm md:text-base mx-2">✦</span>
              <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase mx-8">Viajar Para Itália</span>
              <span className="text-ambar text-sm md:text-base mx-2">✦</span>
              <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase mx-8">Secretariado do Brasil</span>
              <span className="text-ambar text-sm md:text-base mx-2">✦</span>
              <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase mx-8">Pleno Treinamentos</span>
              <span className="text-ambar text-sm md:text-base mx-2">✦</span>
              <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase mx-8">Secretaria da Educação da Prefeitura do Recife</span>
              <span className="text-ambar text-sm md:text-base mx-2">✦</span>
              <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase mx-8">TV Universitária Recife</span>
              <span className="text-ambar text-sm md:text-base mx-2">✦</span>
            </div>
          ))}
        </div>
      </div>

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
              className="font-mono text-sm text-ambar hover:text-vinho hover:underline tracking-widest uppercase"
            >
              Ver todos os projetos →
            </Link>
          </div>

          <div className="px-[6vw] md:px-[8vw]">
            {/* Trocado lg:grid-cols-2 por md:grid-cols-2 — mesma inconsistência de breakpoint
                corrigida na página de Projetos, pra tablet já aproveitar a largura */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-preto/15 border border-preto/15">
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
                    {/* Adicionado flex-wrap como rede de segurança: em telas muito estreitas
                        (tipo 375px), a função quebra pra linha de baixo em vez de espremer
                        contra o link "[ ver projeto ]" */}
                    <div className="mt-auto pt-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-preto/60">
                        {proj.funcoes}
                      </span>
                      <a 
                        href={proj.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="font-mono text-[10px] text-ambar uppercase tracking-widest font-medium hover:underline whitespace-nowrap"
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
          <span className="font-mono text-sm tracking-[0.15em] uppercase text-ambar mb-6 block font-medium">Visão & Trajetória</span>
          <h2 className="font-serif font-normal text-[clamp(32px,5vw,56px)] leading-tight max-w-[800px] text-preto mb-8">
            Um repertório, várias formas de <i className="italic font-light text-vinho">pensar.</i>
          </h2>
          <p className="font-sans text-lg md:text-xl text-preto/80 max-w-[650px] leading-relaxed mb-10">
            Minha formação começou no cinema, mas meu olhar não termina nele. Formada em Cinema e Audiovisual pela UFPE e estudante de Análise e Desenvolvimento de Sistemas, encontro no cruzamento entre arte, comunicação, tecnologia e estratégia a forma como gosto de trabalhar.
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

      {/* 4. CTA FINAL (PADRONIZADO) */}
      <FadeIn>
        {/* Removido o mt-10 — a seção anterior já tem seu próprio padding vertical,
            somar mt-10 criava um salto maior que a transição entre as outras seções */}
        <section className="bg-vinho text-osso flex flex-col items-center justify-center text-center py-24 md:py-32 px-[6vw] md:px-[8vw]">

          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] mb-6 opacity-90">
            <span className="w-1.5 h-1.5 rounded-full bg-osso"></span>
            <span>Status: Disponível</span>
          </div>

          <h2 className="font-serif font-normal text-[clamp(32px,5vw,52px)]">
            Vamos conversar sobre o seu <i className="italic font-light">próximo projeto.</i>
          </h2>

          <Link
            href="/contato"
            className="inline-block mt-8 font-mono text-sm tracking-[0.1em] uppercase border border-osso text-osso py-4 px-10 hover:bg-osso hover:text-vinho transition-colors font-medium"
          >
            Entrar em Contato →
          </Link>
          
        </section>
      </FadeIn>

    </main>
  );
}