"use client";

import { useRef } from 'react';
import Link from 'next/link';
import FadeIn from '../components/FadeIn';

// Componente limpo de rolagem horizontal com setas
function SecaoProjetos({ titulo, descricao, projetos }) {
    const scrollRef = useRef(null);

    const rolar = (direcao) => {
        if (scrollRef.current) {
            const distancia = scrollRef.current.clientWidth * 0.8;
            scrollRef.current.scrollBy({
                left: direcao === 'esq' ? -distancia : distancia,
                behavior: 'smooth'
            });
        }
    };

    if (!projetos || projetos.length === 0) return null;

    return (
        <section className="mt-20 md:mt-24 w-full relative">
            <div className="px-[6vw] md:px-[8vw] flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
                <div>
                    <h2 className="font-serif text-3xl md:text-4xl text-preto mb-2">{titulo}</h2>
                    {descricao && <p className="font-mono text-xs text-preto/60 uppercase tracking-widest">{descricao}</p>}
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={() => rolar('esq')}
                        className="w-10 h-10 md:w-12 md:h-12 border border-preto/15 bg-osso2/50 hover:bg-preto hover:text-osso transition-colors flex items-center justify-center font-sans text-xl focus:outline-none"
                        aria-label="Rolar para a esquerda"
                    >
                        ←
                    </button>
                    <button
                        onClick={() => rolar('dir')}
                        className="w-10 h-10 md:w-12 md:h-12 border border-preto/15 bg-osso2/50 hover:bg-preto hover:text-osso transition-colors flex items-center justify-center font-sans text-xl focus:outline-none"
                        aria-label="Rolar para a direita"
                    >
                        →
                    </button>
                </div>
            </div>

            {/* Linha fina e limpa em vez da película poluída */}
            <div className="w-full h-px bg-preto/15 mb-8"></div>

            <div
                ref={scrollRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-10 px-[6vw] md:px-[8vw] pb-10 pt-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] items-stretch"
            >
                {projetos.map((projeto, idx) => (
                    <div
                        key={idx}
                        className="snap-center shrink-0 w-[85vw] md:w-[700px] lg:w-[850px] flex flex-col md:flex-row gap-8 md:gap-12 group border border-preto/15 bg-osso2/40 hover:bg-osso2 p-6 md:p-10 transition-all duration-300 relative"
                    >

                        {/* THUMBNAIL / PÔSTER */}
                        <div className="w-full md:w-[260px] shrink-0 aspect-[2/3] bg-preto/5 border border-preto/15 flex items-center justify-center relative overflow-hidden">
                            {projeto.imagem ? (
                                <img
                                    src={projeto.imagem}
                                    alt={`Pôster de ${projeto.titulo}`}
                                    className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                />
                            ) : (
                                <span className="font-mono text-[10px] md:text-xs uppercase text-preto/40 tracking-widest text-center px-4 border border-dashed border-preto/15 w-full h-full flex items-center justify-center">
                                    [ Pôster / Capa ]
                                </span>
                            )}
                        </div>

                        <div className="flex flex-col flex-grow justify-between py-2">
                            <div>
                                <div className="flex justify-between items-center mb-6 font-mono text-xs text-preto/50 uppercase tracking-widest">
                                    <span>{projeto.ano}</span>
                                    <span>{projeto.tag}</span>
                                </div>

                                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-preto group-hover:text-vinho transition-colors mb-6 leading-tight">
                                    {projeto.titulo}
                                </h3>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {projeto.funcoes.map((funcao, i) => (
                                        <span key={i} className="border border-preto/15 bg-osso px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-vinho">
                                            {funcao}
                                        </span>
                                    ))}
                                </div>

                                <p className="font-sans text-base md:text-lg text-preto/75 leading-relaxed mb-8">
                                    {projeto.sinopse}
                                </p>
                            </div>

                            <div className="pt-6 border-t border-preto/10 mt-auto flex justify-end">
                                <a
                                    href={projeto.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-mono text-xs uppercase tracking-widest text-preto group-hover:text-vinho font-medium inline-flex items-center gap-2 transition-colors"
                                >
                                    <span>Ver detalhes</span>
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="shrink-0 w-[2vw] md:w-[4vw]"></div>
            </div>
        </section>
    );
}

export default function Projetos() {

    // 1. PROJETOS EM DESTAQUE
    const projetosDestaque = [
        {
            titulo: 'Quando o Telefone Tocar',
            imagem: '/images/telefone1.png',
            ano: '2024 / 2025',
            tag: 'Curta-Metragem de Ficção (14\')',
            funcoes: ['Direção', 'Roteiro', 'Produção'],
            sinopse: 'Projeto aprovado pela Lei Paulo Gustavo Olinda. Um curta-metragem autoral onde assino direção, roteiro e produção.',
            link: '#'
        }
    ];

    // 2. TRABALHO AUTORAL
    const projetosAutoral = [
        {
            titulo: 'Minidoc LGBTQIAPN+ no Audiovisual',
            ano: '2023 / 2024',
            tag: 'Pesquisa / Documentário',
            funcoes: ['Realização', 'Pesquisa'],
            sinopse: 'Desenvolvido através do Programa de Bolsas de Incentivo de Criação Cultural (BICC) da UFPE. Uma pesquisa autoral voltada para experimentação de linguagem estética e representação.',
            link: '#'
        },
        {
            titulo: 'Projeto ProntoPlay (Tech/ADS)',
            ano: '2025',
            tag: 'Automação & Processamento',
            funcoes: ['Desenvolvimento Python', 'Edição Automatizada'],
            sinopse: 'Criado para otimizar fluxos criativos. Utilizando Python, MoviePy e OpenCV, construí uma automação de cortes que une minha lógica de edição de vídeo à engenharia de dados.',
            link: '#'
        }
    ];

    // 3. MARKETING & REDES
    const projetosMarketing = [
        {
            titulo: 'Conheça Malta & Itália',
            ano: '2022 / 2025',
            tag: 'Série YouTube / Redes Sociais',
            funcoes: ['Edição de Vídeo', 'Montagem'],
            sinopse: 'Série de vídeos e edições dinâmicas para o YouTube e Instagram do Secretariado do Brasil e Falcor Travels. Foco em retenção, criação de peças digitais e adaptação de linguagem.',
            link: '#'
        },
        {
            titulo: 'Conteúdo Viajante 50+',
            ano: '2025',
            tag: 'Storytelling Digital',
            funcoes: ['Roteiro', 'Planejamento de Conteúdo', 'Edição'],
            sinopse: 'Elaboração de roteiros, planejamento de linha editorial e edição de vídeos de viagens. Trabalho focado em engajamento real e construção de comunidade digital.',
            link: '#'
        },
        {
            titulo: 'Propagandas Institucionais de Intercâmbio',
            ano: '2022 / 2023',
            tag: 'Vídeo Institucional',
            funcoes: ['Edição de Vídeo'],
            sinopse: 'Montagem de propagandas e campanhas de cursos de intercâmbio para rodar em sites institucionais e redes sociais.',
            link: '#'
        }
    ];

    // 4. COLABORAÇÕES (SET)
    const projetosColaboracoes = [
        {
            titulo: 'Casa de Vó',
            ano: '2025',
            tag: 'Curta-Metragem',
            funcoes: ['Assistência de Direção'],
            sinopse: 'Participação no set de filmagem do curta-metragem "Casa de Vó". Organização do set e assistência direta à visão da direção principal.',
            link: '#'
        }
    ];

    return (
        <main className="min-h-screen py-16 md:py-24 relative z-10 flex flex-col overflow-hidden">

            <section className="px-[6vw] md:px-[8vw] mb-4">
                <span className="font-mono text-xs md:text-sm tracking-[0.15em] uppercase text-vinho mb-4 block font-medium">Catálogo · Mostra</span>
                <h1 className="font-serif font-normal text-[clamp(36px,5vw,60px)] leading-[1.1] tracking-tight mb-6">
                    Histórias contadas em <i className="font-light italic text-vinho">movimento.</i>
                </h1>
                <p className="font-sans text-lg md:text-xl text-preto/80 max-w-2xl leading-relaxed">
                    Navegue pelo catálogo dos meus trabalhos. Use as setas para rolar pelos projetos e ver os detalhes de cada produção.
                </p>
            </section>

            <FadeIn>
                <SecaoProjetos
                    titulo="Em Destaque"
                    descricao="Obras centrais do meu portfólio"
                    projetos={projetosDestaque}
                />
            </FadeIn>

            <FadeIn>
                <SecaoProjetos
                    titulo="Trabalho Autoral & Pesquisa"
                    descricao="Direção, roteiros e experimentação"
                    projetos={projetosAutoral}
                />
            </FadeIn>

            <FadeIn>
                <SecaoProjetos
                    titulo="Marketing & Redes"
                    descricao="Edição dinâmica e planejamento de conteúdo"
                    projetos={projetosMarketing}
                />
            </FadeIn>

            <FadeIn>
                <SecaoProjetos
                    titulo="Colaborações de Set"
                    descricao="Produção e assistência técnica em equipe"
                    projetos={projetosColaboracoes}
                />
            </FadeIn>

{/* 5. CALL TO ACTION FINAL - BANNER FULL WIDTH */}
      <FadeIn>
        <section className="mt-20 w-full bg-[#C84A31] text-[#FAF4E6] py-28 md:py-36 px-[6vw] md:px-[8vw] flex flex-col items-center justify-center text-center">
          
          {/* Badge de Status */}
          <div className="flex items-center gap-3 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-8 opacity-90">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FAF4E6]"></span>
            <span>Status: Disponível</span>
          </div>

          {/* Título */}
          <h2 className="font-serif font-normal text-[clamp(32px,4vw,56px)] leading-tight mb-12 max-w-4xl">
            Vamos conversar sobre o seu <i className="font-light italic">próximo projeto.</i>
          </h2>

          {/* Botão Vazado (Outline) */}
          <Link 
            href="/contato" 
            className="inline-block font-mono text-xs tracking-[0.15em] uppercase border border-[#FAF4E6]/40 hover:bg-[#FAF4E6] hover:text-[#C84A31] transition-colors px-10 py-5"
          >
            Entrar em Contato
          </Link>

        </section>
      </FadeIn>
      
        </main>
    );
}