import Link from 'next/link';
import FadeIn from '../components/FadeIn';

export default function Projetos() {
    return (
        <main className="min-h-screen px-[8vw] py-16 relative z-10">

            {/* HERO PROJETOS (Fica solto, sem FadeIn, para carregar logo de cara) */}
            <section className="pb-16 border-b border-preto/10">
                <span className="font-mono text-xs tracking-[0.15em] uppercase text-vinho mb-4 block">Projetos</span>
                <h1 className="font-serif font-normal text-[clamp(32px,4.5vw,52px)] leading-[1.15] max-w-3xl">
                    Do <i className="font-light italic text-vinho">corte certeiro</i> ao curta autoral — tudo o que já contei em vídeo.
                </h1>
                <p className="font-mono text-[12.5px] text-preto/60 max-w-md mt-6 leading-[1.75]">
                    Uma rolagem só, do trabalho que resolve pra cliente até o que eu carrego comigo há mais tempo.
                </p>
            </section>

            {/* 1. EM DESTAQUE */}
            <FadeIn>
                <section className="pt-16 mb-20">
                    <span className="font-mono text-[10px] text-preto/40 tracking-[0.2em] uppercase block mb-6">/ em destaque</span>

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-[1px] bg-preto/15 border border-preto/15">

                        <div className="bg-osso grid grid-cols-[100px_1fr] sm:grid-cols-[150px_1fr] gap-6 p-6 sm:p-8 hover:bg-osso2/50 transition-colors">
                            <div className="aspect-[2/3] bg-osso2 border border-preto/15 relative flex items-center justify-center overflow-hidden">
                                <span className="font-mono text-[10px] text-preto/35 uppercase">pôster</span>
                            </div>
                            <div className="flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between font-mono text-[10px] text-vinho tracking-widest uppercase">
                                        <span>Campanha</span><span>2026</span>
                                    </div>
                                    <h3 className="font-serif font-medium text-2xl mt-3 leading-[1.15]">Miss Universe <i className="font-light italic text-vinho">PE</i></h3>
                                    <p className="font-sans text-[12.5px] text-preto/60 mt-2 italic leading-[1.55]">
                                        [sinopse — trajes, chegada e bastidores da campanha]
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <div className="font-mono text-[10px] text-preto/55 uppercase">captação e edição</div>
                                    <a href="#" className="font-mono text-[10px] text-ambar uppercase mt-1.5 block hover:underline underline-offset-4">[ assistir ao vídeo ]</a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-osso grid grid-cols-[100px_1fr] sm:grid-cols-[150px_1fr] gap-6 p-6 sm:p-8 hover:bg-osso2/50 transition-colors">
                            <div className="aspect-[2/3] bg-osso2 border border-preto/15 relative flex items-center justify-center overflow-hidden">
                                <span className="font-mono text-[10px] text-preto/35 uppercase text-center leading-tight">pôster /<br />frame</span>
                            </div>
                            <div className="flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between font-mono text-[10px] text-vinho tracking-widest uppercase">
                                        <span>Curta · 14'</span><span>2024–26</span>
                                    </div>
                                    <h3 className="font-serif font-medium text-2xl mt-3 leading-[1.15]">Quando o <i className="font-light italic text-vinho">Telefone Tocar</i></h3>
                                    <p className="font-sans text-[12.5px] text-preto/60 mt-2 italic leading-[1.55]">
                                        [sinopse — sobre a trama do filme] — Lei Paulo Gustavo Olinda, em pós-produção.
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <div className="font-mono text-[10px] text-preto/55 uppercase">direção, roteiro e produção</div>
                                    <a href="#" className="font-mono text-[10px] text-ambar uppercase mt-1.5 block hover:underline underline-offset-4">[ link provisório ]</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </FadeIn>

            {/* 2. MODO APLICADO */}
            <FadeIn>
                <section className="mb-20">
                    <span className="font-mono text-[10px] text-preto/40 tracking-[0.2em] uppercase block mb-6">/ modo aplicado</span>
                    <div className="mb-8">
                        <h2 className="font-serif font-normal text-[28px]">Marketing & <i className="font-light italic text-vinho">conteúdo</i></h2>
                        <p className="font-mono text-[11.5px] text-preto/55 max-w-md mt-2 leading-[1.6]">Edição e estratégia pra marcas e instituições.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-preto/15 border border-preto/15">

                        <div className="bg-osso grid grid-cols-[90px_1fr] sm:grid-cols-[120px_1fr] gap-5 p-6 hover:bg-osso2/50 transition-colors">
                            <div className="aspect-[2/3] bg-osso2 border border-preto/15 flex items-center justify-center"><span className="font-mono text-[9px] text-preto/30">img</span></div>
                            <div className="flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between font-mono text-[10px] text-vinho tracking-widest uppercase"><span>Institucional</span><span>2025</span></div>
                                    <h3 className="font-serif font-medium text-[19px] mt-2 leading-[1.15]">Intercâmbio <i className="font-light italic text-vinho">Malta & Itália</i></h3>
                                    <p className="font-sans text-[12.5px] text-preto/60 mt-2 italic leading-[1.55]">[sinopse — campanhas e playlists institucionais]</p>
                                </div>
                                <div className="mt-3">
                                    <div className="font-mono text-[10px] text-preto/55 uppercase">roteiro, edição e playlists</div>
                                    <a href="#" className="font-mono text-[10px] text-ambar uppercase mt-1 hover:underline">[ assistir projeto ]</a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-osso grid grid-cols-[90px_1fr] sm:grid-cols-[120px_1fr] gap-5 p-6 hover:bg-osso2/50 transition-colors">
                            <div className="aspect-[2/3] bg-osso2 border border-preto/15 flex items-center justify-center"><span className="font-mono text-[9px] text-preto/30">img</span></div>
                            <div className="flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between font-mono text-[10px] text-vinho tracking-widest uppercase"><span>Tutoriais</span><span>2026</span></div>
                                    <h3 className="font-serif font-medium text-[19px] mt-2 leading-[1.15]">Ferramentas Google <i className="font-light italic text-vinho">na Prática</i></h3>
                                    <p className="font-sans text-[12.5px] text-preto/60 mt-2 italic leading-[1.55]">[sinopse — série educativa de inclusão digital]</p>
                                </div>
                                <div className="mt-3">
                                    <div className="font-mono text-[10px] text-preto/55 uppercase">roteiro, produção e edição</div>
                                    <a href="#" className="font-mono text-[10px] text-ambar uppercase mt-1 hover:underline">[ assistir série ]</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </FadeIn>

            {/* 3. TRABALHO AUTORAL */}
            <FadeIn>
                <section className="mb-20">
                    <span className="font-mono text-[10px] text-preto/40 tracking-[0.2em] uppercase block mb-6">/ trabalho autoral</span>
                    <div className="mb-8">
                        <h2 className="font-serif font-normal text-[28px]">Direção, <i className="font-light italic text-vinho">roteiro e montagem</i></h2>
                        <p className="font-mono text-[11.5px] text-preto/55 max-w-md mt-2 leading-[1.6]">Onde a visão é integralmente sua.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-preto/15 border border-preto/15">

                        <div className="bg-osso grid grid-cols-[90px_1fr] sm:grid-cols-[120px_1fr] gap-5 p-6 hover:bg-osso2/50 transition-colors">
                            <div className="aspect-[2/3] bg-osso2 border border-preto/15 flex items-center justify-center"><span className="font-mono text-[9px] text-preto/30">img</span></div>
                            <div className="flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between font-mono text-[10px] text-vinho tracking-widest uppercase"><span>Minidoc · 4'</span><span>2024</span></div>
                                    <h3 className="font-serif font-medium text-[19px] mt-2 leading-[1.15]">Beijos e <i className="font-light italic text-vinho">Confidências</i></h3>
                                    <p className="font-sans text-[12.5px] text-preto/60 mt-2 italic leading-[1.55]">pesquisa autoral BICC-UFPE, exibido na Mostra BICC 2025.</p>
                                </div>
                                <div className="mt-3">
                                    <div className="font-mono text-[10px] text-preto/55 uppercase">dir., roteiro, prod. e montagem</div>
                                    <a href="#" className="font-mono text-[10px] text-ambar uppercase mt-1 hover:underline">[ ver projeto ]</a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-osso grid grid-cols-[90px_1fr] sm:grid-cols-[120px_1fr] gap-5 p-6 hover:bg-osso2/50 transition-colors">
                            <div className="aspect-[2/3] bg-osso2 border border-preto/15 flex items-center justify-center"><span className="font-mono text-[9px] text-preto/30">img</span></div>
                            <div className="flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between font-mono text-[10px] text-vinho tracking-widest uppercase"><span>Curta · 12'</span><span>2019–21</span></div>
                                    <h3 className="font-serif font-medium text-[19px] mt-2 leading-[1.15]">Insônia</h3>
                                    <p className="font-sans text-[12.5px] text-preto/60 mt-2 italic leading-[1.55]">primeiro curta universitário dirigido e finalizado.</p>
                                </div>
                                <div className="mt-3">
                                    <div className="font-mono text-[10px] text-preto/55 uppercase">dir., assist. de montagem e fin.</div>
                                    <a href="#" className="font-mono text-[10px] text-ambar uppercase mt-1 hover:underline">[ ver projeto ]</a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-osso grid grid-cols-[90px_1fr] sm:grid-cols-[120px_1fr] gap-5 p-6 hover:bg-osso2/50 transition-colors">
                            <div className="aspect-[2/3] bg-osso2 border border-preto/15 flex items-center justify-center"><span className="font-mono text-[9px] text-preto/30">img</span></div>
                            <div className="flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between font-mono text-[10px] text-vinho tracking-widest uppercase"><span>Ensaio · 12'</span><span>2021</span></div>
                                    <h3 className="font-serif font-medium text-[19px] mt-2 leading-[1.15]">All About <i className="font-light italic text-vinho">Love</i></h3>
                                    <p className="font-sans text-[12.5px] text-preto/60 mt-2 italic leading-[1.55]">vídeo-ensaio universitário sobre música e cinema.</p>
                                </div>
                                <div className="mt-3">
                                    <div className="font-mono text-[10px] text-preto/55 uppercase">montagem</div>
                                    <a href="#" className="font-mono text-[10px] text-ambar uppercase mt-1 hover:underline">[ ver projeto ]</a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-osso grid grid-cols-[90px_1fr] sm:grid-cols-[120px_1fr] gap-5 p-6 hover:bg-osso2/50 transition-colors">
                            <div className="aspect-[2/3] bg-osso2 border border-preto/15 flex items-center justify-center"><span className="font-mono text-[9px] text-preto/30">img</span></div>
                            <div className="flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between font-mono text-[10px] text-vinho tracking-widest uppercase"><span>Instasérie</span><span>2019</span></div>
                                    <h3 className="font-serif font-medium text-[19px] mt-2 leading-[1.15]">Olívia</h3>
                                    <p className="font-sans text-[12.5px] text-preto/60 mt-2 italic leading-[1.55]">trabalho final de Dispositivos Móveis no Audiovisual.</p>
                                </div>
                                <div className="mt-3">
                                    <div className="font-mono text-[10px] text-preto/55 uppercase">dir., roteiro, prod. e fotografia</div>
                                    <a href="#" className="font-mono text-[10px] text-ambar uppercase mt-1 hover:underline">[ ver projeto ]</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </FadeIn>

            {/* 4. COLABORAÇÕES */}
            <FadeIn>
                <section className="mb-12">
                    <span className="font-mono text-[10px] text-preto/40 tracking-[0.2em] uppercase block mb-6">/ colaborações</span>
                    <div className="mb-8">
                        <h2 className="font-serif font-normal text-[28px]">Onde servi <i className="font-light italic text-vinho">a visão de outros</i></h2>
                        <p className="font-mono text-[11.5px] text-preto/55 max-w-md mt-2 leading-[1.6]">Assistência de direção, montagem e fotografia em projetos parceiros.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-preto/15 border border-preto/15">

                        <div className="bg-osso2 grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr] gap-5 p-6 hover:bg-osso transition-colors">
                            <div className="aspect-[2/3] bg-osso border border-preto/15 flex items-center justify-center"><span className="font-mono text-[8px] text-preto/30 uppercase">img</span></div>
                            <div className="flex flex-col justify-between">
                                <div>
                                    <div className="font-mono text-[10px] text-preto/50 uppercase tracking-widest mb-1">dir. Eduardo Gomes · 2024</div>
                                    <h3 className="font-serif text-[20px] leading-tight text-preto">2000.com</h3>
                                    <div className="font-sans text-[12.5px] text-preto/60 italic mt-1">Curta-metragem · 21'</div>
                                </div>
                                <div className="mt-3">
                                    <div className="font-mono text-[10px] text-vinho uppercase">assist. direção & montagem</div>
                                    <a href="#" className="font-mono text-[10px] text-ambar uppercase hover:underline mt-1 block">[ assistir ]</a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-osso2 grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr] gap-5 p-6 hover:bg-osso transition-colors">
                            <div className="aspect-[2/3] bg-osso border border-preto/15 flex items-center justify-center"><span className="font-mono text-[8px] text-preto/30 uppercase">img</span></div>
                            <div className="flex flex-col justify-between">
                                <div>
                                    <div className="font-mono text-[10px] text-preto/50 uppercase tracking-widest mb-1">dir. Pietra Couto · 2022</div>
                                    <h3 className="font-serif text-[20px] leading-tight text-preto">ART</h3>
                                    <div className="font-sans text-[12.5px] text-preto/60 italic mt-1">Curta-metragem · 6'</div>
                                </div>
                                <div className="mt-3">
                                    <div className="font-mono text-[10px] text-vinho uppercase">assist. direção & montadora</div>
                                    <a href="#" className="font-mono text-[10px] text-ambar uppercase hover:underline mt-1 block">[ assistir ]</a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-osso2 grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr] gap-5 p-6 hover:bg-osso transition-colors">
                            <div className="aspect-[2/3] bg-osso border border-preto/15 flex items-center justify-center"><span className="font-mono text-[8px] text-preto/30 uppercase">img</span></div>
                            <div className="flex flex-col justify-between">
                                <div>
                                    <div className="font-mono text-[10px] text-preto/50 uppercase tracking-widest mb-1">dir. Diá · 2019</div>
                                    <h3 className="font-serif text-[20px] leading-tight text-preto">Amar é Reticência</h3>
                                    <div className="font-sans text-[12.5px] text-preto/60 italic mt-1">Curta-metragem · 16'</div>
                                </div>
                                <div className="mt-3">
                                    <div className="font-mono text-[10px] text-vinho uppercase">assistência de fotografia</div>
                                    <a href="#" className="font-mono text-[10px] text-ambar uppercase hover:underline mt-1 block">[ assistir ]</a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-osso2 grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr] gap-5 p-6 hover:bg-osso transition-colors border-t border-preto/15 lg:border-t-0">
                            <div className="aspect-[2/3] bg-osso border border-preto/15 border-dashed flex items-center justify-center"><span className="font-mono text-[8px] text-preto/30 uppercase">img</span></div>
                            <div className="flex flex-col justify-between">
                                <div>
                                    <div className="font-mono text-[10px] text-preto/50 uppercase tracking-widest mb-1">dir. [ Nome ] · [ Ano ]</div>
                                    <h3 className="font-serif text-[20px] leading-tight text-preto">[ Título do Projeto ]</h3>
                                    <div className="font-sans text-[12.5px] text-preto/60 italic mt-1">[ Tipo / Duração ]</div>
                                </div>
                                <div className="mt-3">
                                    <div className="font-mono text-[10px] text-vinho uppercase">[ Sua Função ]</div>
                                    <a href="#" className="font-mono text-[10px] text-ambar uppercase hover:underline mt-1 block">[ assistir ]</a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-osso2 grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr] gap-5 p-6 hover:bg-osso transition-colors lg:col-span-2 lg:w-[calc(50%-0.5px)] border-t border-preto/15 lg:border-t-preto/15">
                            <div className="aspect-[2/3] bg-osso border border-preto/15 border-dashed flex items-center justify-center"><span className="font-mono text-[8px] text-preto/30 uppercase">img</span></div>
                            <div className="flex flex-col justify-between">
                                <div>
                                    <div className="font-mono text-[10px] text-preto/50 uppercase tracking-widest mb-1">dir. [ Nome ] · [ Ano ]</div>
                                    <h3 className="font-serif text-[20px] leading-tight text-preto">[ Título do Projeto ]</h3>
                                    <div className="font-sans text-[12.5px] text-preto/60 italic mt-1">[ Tipo / Duração ]</div>
                                </div>
                                <div className="mt-3">
                                    <div className="font-mono text-[10px] text-vinho uppercase">[ Sua Função ]</div>
                                    <a href="#" className="font-mono text-[10px] text-ambar uppercase hover:underline mt-1 block">[ assistir ]</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </FadeIn>

            {/* CTA FINAL - PROJETOS */}
            <FadeIn>
                <section className="py-[100px] px-[8vw] text-center bg-[#C84A31] text-[#FAF4E6] mt-24">
                    <div className="flex justify-center items-center gap-3 mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#FAF4E6] animate-pulse"></span>
                        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#FAF4E6]">
                            Status: Disponível
                        </span>
                    </div>
                    <h2 className="font-serif font-normal text-[clamp(32px,5vw,52px)]">
                        Pronta para dar ritmo ao seu <i className="font-light italic text-[#FAF4E6]">próximo projeto?</i>
                    </h2>
                    <Link
                        href="/contato"
                        className="inline-block mt-10 font-mono text-[11px] tracking-[0.1em] uppercase border border-[#FAF4E6] text-[#FAF4E6] px-8 py-3.5 hover:bg-[#FAF4E6] hover:text-[#C84A31] transition-colors shadow-sm"
                    >
                        Falar com Geovanna
                    </Link>
                </section>
            </FadeIn>

        </main>
    );
}