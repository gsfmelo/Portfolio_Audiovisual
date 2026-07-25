import Link from 'next/link';
import FadeIn from '../components/FadeIn';

export default function Sobre() {
    return (
        <main className="min-h-screen px-[8vw] py-16 relative z-10">

            {/* 1. HERO SOBRE: APRESENTAÇÃO + FOTO MENOR (Carrega Imediatamente) */}
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

                {/* ESPAÇO PARA O RETRATO */}
                <div className="aspect-[4/5] bg-osso2 border border-preto/15 relative flex items-center justify-center group overflow-hidden w-full max-w-[280px] mx-auto md:mx-0 shadow-sm">
                    <span className="font-mono text-[10px] text-preto/40 uppercase tracking-widest text-center px-4">
                        [ seu retrato<br />principal ]
                    </span>
                    <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-vinho z-10"></div>
                    <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-vinho z-10"></div>
                    <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-vinho z-10"></div>
                    <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-vinho z-10"></div>
                </div>
            </section>

            {/* 2. BIO & TRAJETÓRIA + FOTO EM AÇÃO */}
            <FadeIn>
                <section className="mt-16 pt-11 border-t border-preto/15">
                    <div className="grid grid-cols-1 md:grid-cols-[280px_100px_1fr] gap-10 items-start">
                        <div className="aspect-[4/3] md:aspect-square bg-preto/5 border border-preto/15 border-dashed relative flex items-center justify-center group overflow-hidden w-full">
                            <span className="font-mono text-[10px] text-preto/40 uppercase tracking-widest text-center px-4">
                                [ foto sua em<br />ação / no set ]
                            </span>
                        </div>
                        <span className="font-mono text-xs tracking-[0.15em] uppercase text-vinho block md:mt-2">Trajetória</span>
                        <div className="font-sans text-base leading-[1.85] text-preto/85 space-y-5">
                            <p>Formada em Cinema e Audiovisual pela Universidade Federal de Pernambuco, comecei em produções universitárias — passando por diferentes funções até construir uma base sólida em linguagem cinematográfica e construção narrativa.</p>
                            <p>Hoje, edito vídeo para redes sociais com foco em conteúdo dinâmico para Instagram: ritmo, cortes certeiros e adaptação de linguagem pensados pra gerar engajamento real. Também assino direção e roteiro em curtas-metragens autorais — um lado que sustenta o outro.</p>
                            <p>Estou cursando Análise e Desenvolvimento de Sistemas, unindo a lógica de quem constrói pra tela com a lógica de quem constrói por trás dela.</p>
                        </div>
                    </div>
                </section>
            </FadeIn>

            {/* 3. EXPERIÊNCIA PROFISSIONAL */}
            <FadeIn>
                <section className="mt-20 pt-11 border-t border-preto/15">
                    <span className="font-mono text-xs tracking-[0.15em] uppercase text-vinho block mb-8">Experiência</span>
                    <div className="flex flex-col">
                        {[
                            { ano: '2025 —', cargo: 'Editora de Vídeo', local: 'CAP Assessoria' },
                            { ano: 'Ago–Nov 2025', cargo: 'Assistente de Marketing Digital', local: 'Falcor Travels & Secretariado do Brasil' },
                            { ano: 'Jul 2022–2023', cargo: 'Estágio em Edição de Vídeo', local: 'Sec. do Brasil, Falcor Travels & Pleno' },
                            { ano: 'Mai–Jun 2022', cargo: 'Estágio em Videomaker', local: 'Sec. da Educação — Prefeitura do Recife' },
                            { ano: 'Ago–Out 2021', cargo: 'Estágio em Produção Televisiva', local: 'TV Universitária Recife' }
                        ].map((xp, index) => (
                            <div key={index} className={`grid grid-cols-1 md:grid-cols-[140px_1fr_auto] gap-y-2 gap-x-6 items-baseline py-5 border-preto/15 hover:bg-osso2/50 transition-colors ${index === 0 ? 'border-y' : 'border-b'}`}>
                                <div className="font-mono text-[11px] text-preto/50 uppercase">{xp.ano}</div>
                                <div className="font-serif text-[18px] font-normal">{xp.cargo}</div>
                                <div className="font-mono text-[11px] text-preto/55 text-left md:text-right uppercase">{xp.local}</div>
                            </div>
                        ))}
                    </div>
                </section>
            </FadeIn>

            {/* 4. SKILLS / O QUE EU TRAGO */}
            <FadeIn>
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
            </FadeIn>

            {/* 5. EDUCAÇÃO */}
            <FadeIn>
                <section className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-preto/15 border border-preto/15 mt-[60px]">
                    <div className="bg-osso p-[30px] hover:bg-osso2 transition-colors">
                        <div className="font-mono text-[11px] text-vinho mb-2 uppercase tracking-widest">UFPE · 2018–2025</div>
                        <div className="font-serif text-[22px] font-normal">Cinema e <i className="italic text-[#C99A3E]">Audiovisual</i></div>
                    </div>
                    <div className="bg-osso p-[30px] hover:bg-osso2 transition-colors">
                        <div className="font-mono text-[11px] text-vinho mb-2 uppercase tracking-widest">UNINTER · 2023–2026</div>
                        <div className="font-serif text-[22px] font-normal">Análise e <i className="italic text-[#C99A3E]">Desenv. de Sistemas</i></div>
                    </div>
                </section>
            </FadeIn>

            {/* 5.5. A PONTE PARA A TECNOLOGIA */}
            <FadeIn>
                <section className="mt-[80px] pt-12 border-t border-preto/15">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-center bg-preto/5 p-8 md:p-12 border border-preto/15">
                        <div>
                            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#C84A31] block mb-4">/ O outro lado da tela</span>
                            <h2 className="font-serif font-normal text-[clamp(28px,3vw,36px)] text-preto leading-tight mb-4">
                                Desenvolvimento & <i className="font-light italic text-[#C99A3E]">Engenharia de Dados</i>.
                            </h2>
                            <p className="font-sans text-base text-preto/75 max-w-2xl leading-relaxed">
                                Minha atuação não se limita à ilha de edição. Como estudante de Análise e Desenvolvimento de Sistemas, construo pontes entre a lógica de programação e a produção criativa — desde scripts em Python para automação de processamento de vídeos (como no projeto ProntoPlay) até arquiteturas de dados complexas.
                            </p>
                        </div>
                        <div className="flex flex-col items-start md:items-end gap-3 md:pl-8 md:border-l md:border-preto/15">
                            <div className="font-mono text-[11px] tracking-[0.1em] uppercase bg-preto text-osso px-8 py-4 opacity-80 cursor-not-allowed border border-preto flex flex-col items-center group relative overflow-hidden">
                                <span className="block group-hover:-translate-y-8 transition-transform duration-300">Portfólio de Tech</span>
                                <span className="absolute top-full text-[#C99A3E] group-hover:-translate-y-11 transition-transform duration-300">[ Em breve ]</span>
                            </div>
                            <span className="font-mono text-[9px] text-preto/40 uppercase tracking-widest text-center md:text-right w-full">Python · NoSQL · Kafka</span>
                        </div>
                    </div>
                </section>
            </FadeIn>

            {/* 6. LADO B / CANTINHO DE PERSONALIDADE */}
            <FadeIn>
                <section className="mt-[80px] pt-12 border-t border-preto/15">
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-vinho block mb-6">Cantinho de personalidade</span>
                    <div className="mb-10">
                        <h2 className="font-serif font-normal text-[clamp(28px,4vw,40px)] text-preto">
                            Cinéfila, <i className="font-light italic text-[#C84A31]">rock clássico</i>, anos 70.
                        </h2>
                        <p className="font-mono text-[11px] text-preto/50 max-w-md mt-4 leading-relaxed uppercase tracking-wider">
                            Quatro elementos pra deixar a personalidade aparecer sem competir com o lado profissional.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-preto/15 border border-preto/15">
                        <div className="bg-[#241D18] p-12 min-h-[300px] flex items-center justify-center relative overflow-hidden">
                            <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-full bg-[#16120F] border border-[#3A332E] shadow-2xl flex items-center justify-center relative">
                                <div className="absolute inset-[10px] rounded-full border border-[#2A231E]/40"></div>
                                <div className="absolute inset-[20px] rounded-full border border-[#2A231E]/50"></div>
                                <div className="absolute inset-[30px] rounded-full border border-[#2A231E]/40"></div>
                                <div className="absolute inset-[40px] rounded-full border border-[#2A231E]/60"></div>
                                <div className="absolute inset-[50px] rounded-full border border-[#2A231E]/40"></div>
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#C84A31] rounded-full z-10 flex flex-col items-center justify-center relative shadow-inner">
                                    <span className="font-mono text-[7.5px] font-bold tracking-widest text-[#FAF4E6] leading-[1.2] text-center mt-1">GEOVANNA<br />MELO</span>
                                    <div className="w-2 h-2 bg-[#241D18] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-sm"></div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-osso2 p-8 sm:p-12 flex flex-col justify-center">
                            <h3 className="font-serif font-black text-3xl sm:text-4xl text-[#C84A31] lowercase tracking-tighter mb-1">referências</h3>
                            <p className="font-mono text-[9px] text-preto/50 uppercase tracking-widest mb-10">o que me formou, lado B</p>
                            <ul className="flex flex-col gap-5">
                                <li className="flex justify-between items-baseline border-b border-preto/10 pb-2 border-dashed group">
                                    <div className="flex gap-4 items-baseline">
                                        <span className="font-mono text-[10px] text-[#C99A3E] font-bold">01</span>
                                        <span className="font-serif italic text-[19px] text-preto group-hover:text-[#C84A31] transition-colors">Nova Hollywood</span>
                                    </div>
                                    <span className="font-mono text-[9px] text-preto/40 uppercase tracking-wider text-right ml-4">70s</span>
                                </li>
                                <li className="flex justify-between items-baseline border-b border-preto/10 pb-2 border-dashed group">
                                    <div className="flex gap-4 items-baseline">
                                        <span className="font-mono text-[10px] text-[#C99A3E] font-bold">02</span>
                                        <span className="font-serif italic text-[19px] text-preto group-hover:text-[#C84A31] transition-colors">[ banda / disco ]</span>
                                    </div>
                                    <span className="font-mono text-[9px] text-preto/40 uppercase tracking-wider text-right ml-4">rock clássico</span>
                                </li>
                                <li className="flex justify-between items-baseline border-b border-preto/10 pb-2 border-dashed group">
                                    <div className="flex gap-4 items-baseline">
                                        <span className="font-mono text-[10px] text-[#C99A3E] font-bold">03</span>
                                        <span className="font-serif italic text-[19px] text-preto group-hover:text-[#C84A31] transition-colors">Era Código Hays</span>
                                    </div>
                                    <span className="font-mono text-[9px] text-preto/40 uppercase tracking-wider text-right ml-4">cinema antigo</span>
                                </li>
                                <li className="flex justify-between items-baseline border-b border-transparent pb-2 group">
                                    <div className="flex gap-4 items-baseline">
                                        <span className="font-mono text-[10px] text-[#C99A3E] font-bold">04</span>
                                        <span className="font-serif italic text-[19px] text-preto group-hover:text-[#C84A31] transition-colors">[ banda / disco ]</span>
                                    </div>
                                    <span className="font-mono text-[9px] text-preto/40 uppercase tracking-wider text-right ml-4">60s</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </FadeIn>

            {/* 7. CALL TO ACTION LIMPO */}
            <FadeIn>
                <section className="mt-24 mb-8 flex justify-center">
                    <Link href="/projetos" className="group flex items-center gap-4 hover:opacity-75 transition-opacity">
                        <span className="font-serif italic text-2xl md:text-3xl text-vinho">Conheça meus projetos</span>
                        <span className="font-sans text-2xl text-vinho group-hover:translate-x-2 transition-transform">→</span>
                    </Link>
                </section>
            </FadeIn>

        </main>
    );
}