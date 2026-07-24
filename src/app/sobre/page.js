import Link from 'next/link';

export default function Sobre() {
    return (
        <main className="min-h-screen px-[8vw] py-16 relative z-10">

            {/* 1. HERO SOBRE: APRESENTAÇÃO + FOTO MENOR */}
            <section className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-16 items-center mb-0">
                <div>
                    <span className="font-mono text-xs tracking-[0.15em] uppercase text-vinho mb-4 block">Background · Biografia</span>
                    <h1 className="font-serif font-normal text-[clamp(34px,4.4vw,52px)] leading-[1.15] tracking-tight">
                        Oi, sou <i className="font-light italic text-vinho">Geovanna Melo!</i>
                    </h1>
                    <p className="font-sans text-lg mt-6 text-preto/80 max-w-2xl leading-relaxed">
                        Editora de vídeo e realizadora audiovisual — conto histórias cortando, roteirizando e dando ritmo a quem precisa ser ouvido.
                    </p>
                    <div className="font-mono text-xs tracking-[0.1em] uppercase text-preto/55 mt-6">
                        editora de vídeo · realizadora audiovisual · marketing
                    </div>
                </div>

                {/* ESPAÇO PARA O RETRATO (Direita) */}
                <div className="aspect-[4/5] bg-osso2 border border-preto/15 relative flex items-center justify-center group overflow-hidden w-full max-w-[280px] mx-auto md:mx-0">
                    <span className="font-mono text-[10px] text-preto/40 uppercase tracking-widest text-center px-4">
                        [ seu retrato<br />principal ]
                    </span>

                    <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-vinho z-10"></div>
                    <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-vinho z-10"></div>
                    <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-vinho z-10"></div>
                    <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-vinho z-10"></div>
                </div>
            </section>

            {/* 2. BIO & TRAJETÓRIA + FOTO EM AÇÃO (Agora na Esquerda) */}
            <section className="mt-16 pt-11 border-t border-preto/15">
                <div className="grid grid-cols-1 md:grid-cols-[280px_100px_1fr] gap-10 items-start">

                    {/* ESPAÇO PARA A FOTO EM AÇÃO (Esquerda) */}
                    <div className="aspect-[4/3] md:aspect-square bg-preto/5 border border-preto/15 border-dashed relative flex items-center justify-center group overflow-hidden w-full">
                        <span className="font-mono text-[10px] text-preto/40 uppercase tracking-widest text-center px-4">
                            [ foto sua em<br />ação / no set ]
                        </span>
                    </div>

                    <span className="font-mono text-xs tracking-[0.15em] uppercase text-vinho block md:mt-2">Trajetória</span>

                    <div className="font-sans text-base leading-[1.85] text-preto/85 space-y-5">
                        <p>
                            Formada em Cinema e Audiovisual pela Universidade Federal de Pernambuco, comecei em produções universitárias — passando por diferentes funções até construir uma base sólida em linguagem cinematográfica e construção narrativa.
                        </p>
                        <p>
                            Hoje, edito vídeo para redes sociais com foco em conteúdo dinâmico para Instagram: ritmo, cortes certeiros e adaptação de linguagem pensados pra gerar engajamento real. Também assino direção e roteiro em curtas-metragens autorais — um lado que sustenta o outro.
                        </p>
                        <p>
                            Estou cursando Análise e Desenvolvimento de Sistemas, unindo a lógica de quem constrói pra tela com a lógica de quem constrói por trás dela.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. EXPERIÊNCIA PROFISSIONAL */}
            <section className="mt-20 pt-11 border-t border-preto/15">
                <span className="font-mono text-xs tracking-[0.15em] uppercase text-vinho block mb-8">Experiência</span>

                <div className="flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-[140px_1fr_auto] gap-y-2 gap-x-6 items-baseline py-5 border-y border-preto/15 hover:bg-osso2/50 transition-colors">
                        <div className="font-mono text-[11px] text-preto/50 uppercase">2025 —</div>
                        <div className="font-serif text-[18px] font-normal">Editora de <i className="italic text-vinho">Vídeo</i></div>
                        <div className="font-mono text-[11px] text-preto/55 text-left md:text-right uppercase">CAP Assessoria</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[140px_1fr_auto] gap-y-2 gap-x-6 items-baseline py-5 border-b border-preto/15 hover:bg-osso2/50 transition-colors">
                        <div className="font-mono text-[11px] text-preto/50 uppercase">Ago–Nov 2025</div>
                        <div className="font-serif text-[18px] font-normal">Assistente de Marketing Digital</div>
                        <div className="font-mono text-[11px] text-preto/55 text-left md:text-right uppercase">Falcor Travels & Secretariado do Brasil</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[140px_1fr_auto] gap-y-2 gap-x-6 items-baseline py-5 border-b border-preto/15 hover:bg-osso2/50 transition-colors">
                        <div className="font-mono text-[11px] text-preto/50 uppercase">Jul 2022–2023</div>
                        <div className="font-serif text-[18px] font-normal">Estágio em Edição de <i className="italic text-vinho">Vídeo</i></div>
                        <div className="font-mono text-[11px] text-preto/55 text-left md:text-right uppercase">Sec. do Brasil, Falcor Travels & Pleno</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[140px_1fr_auto] gap-y-2 gap-x-6 items-baseline py-5 border-b border-preto/15 hover:bg-osso2/50 transition-colors">
                        <div className="font-mono text-[11px] text-preto/50 uppercase">Mai–Jun 2022</div>
                        <div className="font-serif text-[18px] font-normal">Estágio em Videomaker</div>
                        <div className="font-mono text-[11px] text-preto/55 text-left md:text-right uppercase">Sec. da Educação — Prefeitura do Recife</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[140px_1fr_auto] gap-y-2 gap-x-6 items-baseline py-5 border-b border-preto/15 hover:bg-osso2/50 transition-colors">
                        <div className="font-mono text-[11px] text-preto/50 uppercase">Ago–Out 2021</div>
                        <div className="font-serif text-[18px] font-normal">Estágio em Produção <i className="italic text-vinho">Televisiva</i></div>
                        <div className="font-mono text-[11px] text-preto/55 text-left md:text-right uppercase">TV Universitária Recife</div>
                    </div>
                </div>
            </section>

            {/* 4. SKILLS / O QUE EU TRAGO */}
            <section className="mt-16 pt-11 border-t border-preto/15">
                <span className="font-mono text-xs tracking-[0.15em] uppercase text-vinho block mb-8">O que eu trago</span>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div>
                        <h3 className="font-serif italic font-normal text-[20px] mb-4 text-vinho">Edição</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Premiere', 'CapCut', 'DaVinci Resolve', 'After Effects', 'Lightroom'].map(skill => (
                                <span key={skill} className="font-mono text-[11px] border border-preto/15 px-3 py-1.5 uppercase hover:bg-osso2 transition-colors cursor-default">{skill}</span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-serif italic font-normal text-[20px] mb-4 text-vinho">Conteúdo & marketing</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Roteiro pra redes', 'Linha editorial', 'Copywriting', 'Canva', 'Figma'].map(skill => (
                                <span key={skill} className="font-mono text-[11px] border border-preto/15 px-3 py-1.5 uppercase hover:bg-osso2 transition-colors cursor-default">{skill}</span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-serif italic font-normal text-[20px] mb-4 text-vinho">Direção</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Roteiro', 'Produção', 'Direção de curtas', 'Pesquisa autoral'].map(skill => (
                                <span key={skill} className="font-mono text-[11px] border border-preto/15 px-3 py-1.5 uppercase hover:bg-osso2 transition-colors cursor-default">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. EDUCAÇÃO */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-preto/15 border border-preto/15 mt-[60px]">
                <div className="bg-osso p-[30px] hover:bg-osso2 transition-colors">
                    <div className="font-mono text-[11px] text-vinho mb-2 uppercase tracking-widest">UFPE · 2018–2025</div>
                    <div className="font-serif text-[22px] font-normal">Cinema e <i className="italic text-ambar">Audiovisual</i></div>
                </div>
                <div className="bg-osso p-[30px] hover:bg-osso2 transition-colors">
                    <div className="font-mono text-[11px] text-vinho mb-2 uppercase tracking-widest">UNINTER · 2023–2026</div>
                    <div className="font-serif text-[22px] font-normal">Análise e <i className="italic text-ambar">Desenv. de Sistemas</i></div>
                </div>
            </section>

            {/* 6. CALL TO ACTION LIMPO */}
            <section className="mt-24 mb-8 flex justify-center">
                <Link href="/projetos" className="group flex items-center gap-4 hover:opacity-75 transition-opacity">
                    <span className="font-serif italic text-2xl md:text-3xl text-vinho">
                        Conheça meus projetos
                    </span>
                    <span className="font-sans text-2xl text-vinho group-hover:translate-x-2 transition-transform">
                        →
                    </span>
                </Link>
            </section>

        </main>
    );
}