export default function Projetos() {
    return (
        <main className="min-h-screen px-[8vw] py-16 relative z-10">

            {/* Cabeçalho da Página */}
            <div className="mb-16">
                <span className="font-mono text-xs tracking-widest uppercase text-vinho mb-4 block">
                    Arquivo · 2019–2026
                </span>
                <h1 className="font-serif font-medium text-5xl md:text-6xl tracking-tight">
                    Projetos <i className="font-light italic text-vinho">selecionados</i>
                </h1>
                <p className="font-mono text-sm text-preto/60 max-w-xl mt-4 leading-relaxed">
                    Um panorama do meu trabalho, desde a construção narrativa em curtas-metragens até a edição dinâmica e estratégica para o ambiente digital e campanhas de marketing.
                </p>
            </div>

            {/* SEÇÃO 1: DIREÇÃO AUTORAL */}
            <section className="mb-16">
                <div className="flex justify-between items-end border-b border-preto/15 pb-5 mb-6 flex-wrap gap-4">
                    <h2 className="font-serif font-medium text-3xl">
                        Trabalho Autoral<br /><i className="font-light italic text-vinho">— direção & realização</i>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-preto/15 border border-preto/15">
                    <div className="bg-osso p-7 min-h-[190px] flex flex-col justify-between hover:bg-osso2 transition-colors">
                        <div className="font-mono text-[10px] text-ambar flex justify-between uppercase">
                            <span>Curta · 14'</span><span>2024–26</span>
                        </div>
                        <h3 className="font-serif font-medium text-[22px] leading-tight mt-4">Quando o<br />Telefone Tocar</h3>
                        <p className="font-mono text-[10px] text-preto/50 mt-4 uppercase">direção, roteiro e produção</p>
                    </div>

                    <div className="bg-osso p-7 min-h-[190px] flex flex-col justify-between hover:bg-osso2 transition-colors">
                        <div className="font-mono text-[10px] text-ambar flex justify-between uppercase">
                            <span>Minidoc · 4'</span><span>2024</span>
                        </div>
                        <h3 className="font-serif font-medium text-[22px] leading-tight mt-4">Beijos e Confidências</h3>
                        <p className="font-mono text-[10px] text-preto/50 mt-4 uppercase">direção, roteiro, produção e montagem</p>
                    </div>

                    <div className="bg-osso p-7 min-h-[190px] flex flex-col justify-between hover:bg-osso2 transition-colors">
                        <div className="font-mono text-[10px] text-ambar flex justify-between uppercase">
                            <span>Curta · 12'</span><span>2019–21</span>
                        </div>
                        <h3 className="font-serif font-medium text-[22px] leading-tight mt-4">Insônia</h3>
                        <p className="font-mono text-[10px] text-preto/50 mt-4 uppercase">direção e assistência de montagem</p>
                    </div>

                    <div className="bg-osso p-7 min-h-[190px] flex flex-col justify-between hover:bg-osso2 transition-colors">
                        <div className="font-mono text-[10px] text-ambar flex justify-between uppercase">
                            <span>Instasérie</span><span>2019</span>
                        </div>
                        <h3 className="font-serif font-medium text-[22px] leading-tight mt-4">Olívia</h3>
                        <p className="font-mono text-[10px] text-preto/50 mt-4 uppercase">direção, roteiro, produção e fotografia</p>
                    </div>
                </div>
            </section>

            {/* SEÇÃO 2: MONTAGEM E COLABORAÇÕES */}
            <section className="mb-16">
                <div className="flex justify-between items-end border-b border-preto/15 pb-5 mb-6 flex-wrap gap-4">
                    <h2 className="font-serif font-medium text-3xl">
                        Montagem & Colaborações<br /><i className="font-light italic text-vinho">— a serviço da narrativa</i>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-preto/15 border border-preto/15">
                    <div className="bg-osso2 p-7 min-h-[190px] flex flex-col justify-between border-t-2 border-vinho">
                        <div className="font-mono text-[10px] text-vinho flex justify-between uppercase">
                            <span>Curta · 21'</span><span>2024</span>
                        </div>
                        <h3 className="font-serif font-medium text-[22px] leading-tight mt-4">2000.COM</h3>
                        <p className="font-mono text-[10px] text-preto/60 mt-4 uppercase">assistência de direção e montagem</p>
                    </div>

                    <div className="bg-osso2 p-7 min-h-[190px] flex flex-col justify-between border-t-2 border-vinho">
                        <div className="font-mono text-[10px] text-vinho flex justify-between uppercase">
                            <span>Curta · 6'</span><span>2022</span>
                        </div>
                        <h3 className="font-serif font-medium text-[22px] leading-tight mt-4">ART</h3>
                        <p className="font-mono text-[10px] text-preto/60 mt-4 uppercase">assistência de direção e montadora</p>
                    </div>

                    <div className="bg-osso p-7 min-h-[190px] flex flex-col justify-between hover:bg-osso2 transition-colors">
                        <div className="font-mono text-[10px] text-ambar flex justify-between uppercase">
                            <span>Vídeo Ensaio · 12'</span><span>2021</span>
                        </div>
                        <h3 className="font-serif font-medium text-[22px] leading-tight mt-4">All About Love</h3>
                        <p className="font-mono text-[10px] text-preto/50 mt-4 uppercase">montagem</p>
                    </div>

                    <div className="bg-osso p-7 min-h-[190px] flex flex-col justify-between hover:bg-osso2 transition-colors">
                        <div className="font-mono text-[10px] text-ambar flex justify-between uppercase">
                            <span>Curta · 16'</span><span>2019</span>
                        </div>
                        <h3 className="font-serif font-medium text-[22px] leading-tight mt-4">Amar é Reticência</h3>
                        <p className="font-mono text-[10px] text-preto/50 mt-4 uppercase">assistência de fotografia</p>
                    </div>
                </div>
            </section>

            {/* SEÇÃO 3: PUBLICIDADE E INSTITUCIONAL */}
            <section>
                <div className="flex justify-between items-end border-b border-preto/15 pb-5 mb-6 flex-wrap gap-4">
                    <h2 className="font-serif font-medium text-3xl">
                        Publicidade & Conteúdo<br /><i className="font-light italic text-vinho">— ritmo e adaptação digital</i>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-preto/15 border border-preto/15">
                    <div className="bg-osso p-7 min-h-[190px] flex flex-col justify-between hover:bg-osso2 transition-colors">
                        <div className="font-mono text-[10px] text-ambar flex justify-between uppercase">
                            <span>Campanha</span><span>2026</span>
                        </div>
                        <h3 className="font-serif font-medium text-[22px] leading-tight mt-4">Miss Universe PE</h3>
                        <p className="font-mono text-[10px] text-preto/50 mt-4 uppercase">captação e edição — trajes de banho, gala e chegada</p>
                    </div>

                    <div className="bg-osso p-7 min-h-[190px] flex flex-col justify-between hover:bg-osso2 transition-colors">
                        <div className="font-mono text-[10px] text-ambar flex justify-between uppercase">
                            <span>Redes Sociais</span><span>2025</span>
                        </div>
                        <h3 className="font-serif font-medium text-[22px] leading-tight mt-4">Falcor Travels & Secretariado</h3>
                        <p className="font-mono text-[10px] text-preto/50 mt-4 uppercase">edição para reels, roteiro e playlists (malta e itália)</p>
                    </div>

                    <div className="bg-osso p-7 min-h-[190px] flex flex-col justify-between hover:bg-osso2 transition-colors border-t-2 border-transparent">
                        <div className="font-mono text-[10px] text-ambar flex justify-between uppercase">
                            <span>Série Educativa</span><span>2026</span>
                        </div>
                        <h3 className="font-serif font-medium text-[22px] leading-tight mt-4">Ferramentas Google na Prática</h3>
                        <p className="font-mono text-[10px] text-preto/50 mt-4 uppercase">roteiro, produção e edição</p>
                    </div>

                    <div className="bg-osso p-7 min-h-[190px] flex flex-col justify-between hover:bg-osso2 transition-colors border-t-2 border-transparent">
                        <div className="font-mono text-[10px] text-ambar flex justify-between uppercase">
                            <span>Conteúdo Institucional</span><span>2022</span>
                        </div>
                        <h3 className="font-serif font-medium text-[22px] leading-tight mt-4">EducaRecife</h3>
                        <p className="font-mono text-[10px] text-preto/50 mt-4 uppercase">captação e edição de vídeos educativos</p>
                    </div>
                </div>
            </section>

        </main>
    );
}
