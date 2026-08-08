"use client";

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import FadeIn from '../components/FadeIn';

// IMPORTAÇÃO DOS SEUS DADOS
import {
    projetosDestaque,
    projetosAplicado,
    projetosAutoral,
    projetosColaboracoes
} from '../data/projetos';

// Subcomponente do Divisor de Categoria
function DivisorCategoria({ idx, texto, contagem }) {
    return (
        <div className="flex items-baseline gap-4 px-[6vw] md:px-[8vw]">
            <span className="font-mono text-sm md:text-base text-[#C99A3E]">{idx}</span>
            <span className="font-serif italic font-normal text-xl md:text-2xl text-preto/60 whitespace-nowrap">{texto}</span>
            <div className="flex-1 h-px bg-preto/15"></div>
            <span className="font-mono text-xs md:text-sm text-preto/40">{contagem}</span>
        </div>
    );
}

// Subcomponente do Carrossel de Projetos (Com Autoplay)
function Carrossel({ projetos }) {
    const scrollRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false); // Estado para pausar o autoplay

    const rolar = (direcao) => {
        if (scrollRef.current) {
            const track = scrollRef.current;
            const card = track.querySelector('.car-card');
            const step = card ? card.offsetWidth + 1 : 400;

            if (direcao === 'dir') {
                // Verifica se chegou no final. Se sim, volta pro começo (loop).
                const isAtEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 10;
                if (isAtEnd) {
                    track.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    track.scrollBy({ left: step, behavior: 'smooth' });
                }
            } else {
                track.scrollBy({ left: -step, behavior: 'smooth' });
            }
        }
    };

    // Efeito de Autoplay: Rola para a direita a cada 4 segundos
    useEffect(() => {
        let intervalo;
        if (!isHovered) {
            intervalo = setInterval(() => {
                rolar('dir');
            }, 4000); // 4000ms = 4 segundos
        }

        // Limpa o intervalo quando o componente desmonta ou quando o mouse entra
        return () => clearInterval(intervalo);
    }, [isHovered]);

    if (!projetos || projetos.length === 0) return null;

    return (
        <div
            className="relative group/carousel"
            onMouseEnter={() => setIsHovered(true)} // Pausa o autoplay
            onMouseLeave={() => setIsHovered(false)} // Retoma o autoplay
        >
            {/* Botão Anterior */}
            <button
                onClick={() => rolar('esq')}
                className="absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 w-14 h-14 rounded-full bg-osso border border-vinho text-vinho hover:bg-vinho hover:text-osso transition-colors flex items-center justify-center font-mono text-2xl z-10 opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 shadow-md"
            >
                ‹
            </button>

            {/* Trilha do Carrossel */}
            <div
                ref={scrollRef}
                className="flex gap-[1px] bg-preto/15 border border-preto/15 overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
            >
                {projetos.map((proj) => (
                    <div
                        key={proj.id}
                        className="car-card bg-osso flex flex-col md:grid md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr] gap-6 md:gap-8 p-6 md:p-8 snap-start shrink-0 basis-[85vw] md:basis-[600px] lg:basis-[700px]"
                    >
                        {/* Pôster Maior */}
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

                        {/* Informações Maiores */}
                        <div className="flex flex-col justify-between h-full">
                            <div>
                                <div className="flex justify-between font-mono text-xs md:text-sm text-vinho mb-3 uppercase tracking-wider font-medium">
                                    <span>{proj.meta1}</span>
                                    <span>{proj.meta2}</span>
                                </div>
                                <h3 className="font-serif font-medium text-2xl md:text-3xl leading-[1.15] text-preto">
                                    {proj.tituloNormal} <i className="italic font-light text-vinho">{proj.tituloItalico}</i>
                                </h3>
                                <p className="font-sans text-sm md:text-base text-preto/75 mt-3 leading-[1.65] italic">
                                    {proj.sinopse}
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-preto/10">
                                <div className="font-mono text-xs md:text-sm text-preto/60 uppercase tracking-widest">{proj.funcoes}</div>
                                <div className="font-mono text-xs md:text-sm text-[#C99A3E] mt-2 font-medium hover:underline cursor-pointer tracking-widest">
                                    <a href={proj.link} target="_blank" rel="noopener noreferrer">[ ver projeto ]</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Botão Próximo */}
            <button
                onClick={() => rolar('dir')}
                className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 w-14 h-14 rounded-full bg-osso border border-vinho text-vinho hover:bg-vinho hover:text-osso transition-colors flex items-center justify-center font-mono text-2xl z-10 opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 shadow-md"
            >
                ›
            </button>
        </div>
    );
}

export default function Projetos() {
    return (
        <main className="min-h-screen relative z-10 flex flex-col bg-osso">
            {/* Efeito de ruído global opcional */}
            <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.04] mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')]"></div>

            {/* CABEÇALHO (Hero Ampliado) */}
            <FadeIn>
                <section className="pt-20 pb-12 px-[6vw] md:px-[8vw]">
                    <span className="font-mono text-sm tracking-[0.15em] uppercase text-vinho mb-4 block font-medium">Projetos · 13 trabalhos</span>
                    <h1 className="font-serif font-normal text-[clamp(40px,5vw,64px)] leading-[1.1] max-w-[900px] text-preto">
                        Tudo o que já <i className="italic font-light text-vinho">contei</i> em vídeo
                    </h1>
                    <p className="font-mono text-base md:text-lg text-preto/70 max-w-[600px] mt-6 leading-relaxed">
                        Dos projetos institucionais aos autorais. Uma seleção de trabalhos que refletem minha visão e meu estilo.
                    </p>
                </section>
            </FadeIn>

{/* SEÇÃO 01: DESTAQUE (Cards Enxutos) */}
            <FadeIn>
                <DivisorCategoria idx="01" texto="em destaque" contagem="2 trabalhos" />
                <section className="pt-8 pb-20 px-[6vw] md:px-[8vw]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-preto/15 border border-preto/15">
                        {projetosDestaque && projetosDestaque.map((proj) => (
                            <div key={proj.id} className="bg-osso flex flex-col gap-5 p-6 md:p-8 h-full">
                                
                            {/* Still em cima (Formato Tela de Cinema 16:9) */}
                            <div className="w-full aspect-video border border-dashed border-preto/30 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-osso2 to-osso relative overflow-hidden group">
                                
                                {/* Ele tenta puxar o proj.still primeiro. Se você esquecer de colocar, ele usa a imagem normal como reserva */}
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
                </section>
            </FadeIn>

            {/* SEÇÃO 02: MODO APLICADO */}
            <FadeIn>
                <DivisorCategoria idx="02" texto="modo conteúdo" contagem="2 trabalhos · arraste ou use as setas" />
                <section className="pt-8 pb-20 px-[6vw] md:px-[8vw]">
                    <div className="mb-10">
                        <h2 className="font-serif font-normal text-4xl text-preto">Marketing &amp; <i className="italic font-light text-vinho">conteúdo</i></h2>
                        <p className="font-mono text-base text-preto/60 max-w-xl mt-3 leading-relaxed">Edição, campanha e estratégia pra marcas e instituições.</p>
                    </div>
                    <Carrossel projetos={projetosAplicado} />
                </section>
            </FadeIn>

            {/* SEÇÃO 03: TRABALHO AUTORAL */}
            <FadeIn>
                <DivisorCategoria idx="03" texto="modo autoral" contagem="5 trabalhos · arraste ou use as setas" />
                <section className="pt-8 pb-20 px-[6vw] md:px-[8vw]">
                    <div className="mb-10">
                        <h2 className="font-serif font-normal text-4xl text-preto">Direção, <i className="italic font-light text-vinho">produção e montagem</i></h2>
                        <p className="font-mono text-base text-preto/60 max-w-xl mt-3 leading-relaxed">Onde compartilho minha visão.</p>
                    </div>
                    <Carrossel projetos={projetosAutoral} />
                </section>
            </FadeIn>

            {/* SEÇÃO 04: COLABORAÇÕES */}
            <FadeIn>
                <DivisorCategoria idx="04" texto="colaborações" contagem="3 trabalhos · arraste ou use as setas" />
                <section className="pt-8 pb-20 px-[6vw] md:px-[8vw]">
                    <div className="mb-10">
                        <h2 className="font-serif font-normal text-4xl text-preto">Onde atuei <i className="italic font-light text-vinho">em funções-chave</i></h2>
                        <p className="font-mono text-base text-preto/60 max-w-xl mt-3 leading-relaxed">Assistência de direção, produção, montagem e fotografia — trabalho de equipe, mesmo peso.</p>
                    </div>
                    <Carrossel projetos={projetosColaboracoes} />
                </section>
            </FadeIn>

            {/* CTA FINAL */}
            <FadeIn>
                <div className="bg-vinho text-osso text-center py-24 md:py-32 px-[8vw] mt-10">
                    <h2 className="font-serif italic font-normal text-[clamp(32px,5vw,52px)]">Gostou do que viu?</h2>
                    <Link href="/contato" className="inline-block mt-8 font-mono text-sm tracking-[0.1em] uppercase border border-osso text-osso py-4 px-10 hover:bg-osso hover:text-vinho transition-colors font-medium">
                        Vamos conversar →
                    </Link>
                </div>
            </FadeIn>

        </main>
    );
}