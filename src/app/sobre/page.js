export default function Sobre() {
    return (
        <main className="min-h-screen px-[8vw] py-16 relative z-10">

            {/* Cabeçalho Biográfico */}
            <div className="mb-16 max-w-3xl">
                <span className="font-mono text-xs tracking-widest uppercase text-vinho mb-4 block">
                    Background · Biografia
                </span>
                <h1 className="font-serif font-medium text-5xl md:text-6xl tracking-tight mb-6">
                    Oi, sou <i className="font-light italic text-vinho">Geovanna Melo!</i>
                </h1>
                <div className="font-mono text-sm text-preto/75 space-y-5 leading-relaxed">
                    <p>
                        Editora de vídeo e realizadora audiovisual formada em Cinema e Audiovisual pela UFPE. Minha trajetória no audiovisual começou em produções universitárias, onde atuei em diferentes áreas, desenvolvendo uma base sólida em linguagem cinematográfica e construção narrativa.
                    </p>
                    <p>
                        Atualmente, trabalho com edição de vídeos para redes sociais, com foco em conteúdos para Instagram. Possuo experiência na criação de vídeos dinâmicos, utilizando ritmo, cortes e adaptação de linguagem para o ambiente digital, com o objetivo de gerar engajamento e comunicar de forma clara e criativa.
                    </p>
                </div>
            </div>

            {/* Experiência Profissional (Timeline) */}
            <section className="mb-16">
                <div className="border-b border-preto/15 pb-5 mb-6">
                    <h2 className="font-serif font-medium text-3xl">Experiência Profissional</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-preto/15 border border-preto/15">

                    <div className="bg-osso p-8 flex flex-col justify-start">
                        <div className="font-mono text-[10px] text-vinho mb-3 uppercase tracking-widest">2025 – Presente</div>
                        <h3 className="font-serif text-2xl mb-1">Editora de Vídeo</h3>
                        <p className="font-mono text-xs text-preto/60 mb-4 uppercase">CAP Assessoria</p>
                        <p className="font-mono text-xs text-preto/80 leading-relaxed">
                            Planejamento de conteúdo para redes sociais (Instagram, YouTube, LinkedIn). Captação e edição de vídeos para redes sociais.
                        </p>
                    </div>

                    <div className="bg-osso p-8 flex flex-col justify-start">
                        <div className="font-mono text-[10px] text-vinho mb-3 uppercase tracking-widest">Ago 2025 – Nov 2025</div>
                        <h3 className="font-serif text-2xl mb-1">Assist. de Marketing Digital</h3>
                        <p className="font-mono text-xs text-preto/60 mb-4 uppercase">Falcor Travels & Secretariado do Brasil</p>
                        <p className="font-mono text-xs text-preto/80 leading-relaxed">
                            Planejamento de conteúdo para redes sociais. Elaboração de roteiros, edição de vídeos e cronograma de postagens/linha editorial.
                        </p>
                    </div>

                    <div className="bg-osso p-8 flex flex-col justify-start">
                        <div className="font-mono text-[10px] text-vinho mb-3 uppercase tracking-widest">Jul 2022 – Jul 2023</div>
                        <h3 className="font-serif text-2xl mb-1">Estágio em Edição de Vídeo</h3>
                        <p className="font-mono text-xs text-preto/60 mb-4 uppercase">Sec. do Brasil, Falcor Travels & Pleno</p>
                        <p className="font-mono text-xs text-preto/80 leading-relaxed">
                            Edição de videoaulas, vídeos institucionais e para o YouTube da Falcor Travels. Criação de peças para Instagram.
                        </p>
                    </div>

                    <div className="bg-osso p-8 flex flex-col justify-start">
                        <div className="font-mono text-[10px] text-vinho mb-3 uppercase tracking-widest">Mai 2022 – Jun 2022</div>
                        <h3 className="font-serif text-2xl mb-1">Estágio em Videomaker</h3>
                        <p className="font-mono text-xs text-preto/60 mb-4 uppercase">Sec. da Educação do Recife</p>
                        <p className="font-mono text-xs text-preto/80 leading-relaxed">
                            Captação e edição de vídeos educativos para o canal EducaRecife.
                        </p>
                    </div>

                </div>
            </section>

            {/* Grid de Habilidades */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-preto/15 border border-preto/15 mb-16">
                <div className="bg-osso p-8 flex flex-col justify-start">
                    <h2 className="font-serif text-2xl mb-6">Softwares de Edição</h2>
                    <div className="flex flex-wrap gap-2">
                        {[
                            'Premiere PRO (Avançado)',
                            'CapCut (Avançado)',
                            'DaVinci Resolve (Intermediário)',
                            'After Effects (Básico)',
                            'Lightroom (Intermediário)'
                        ].map(skill => (
                            <span key={skill} className="font-mono text-[11px] border border-preto/20 px-3 py-1.5 uppercase text-preto/80">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="bg-osso2 p-8 flex flex-col justify-start border-t-2 border-vinho">
                    <h2 className="font-serif text-2xl mb-6">Marketing & Produção</h2>
                    <div className="flex flex-wrap gap-2">
                        {[
                            'Produção de Conteúdo Web',
                            'Copywriting',
                            'Inbound Marketing',
                            'Pacote Office & Google',
                            'Canva e Figma',
                            'Inglês (Fluente)'
                        ].map(skill => (
                            <span key={skill} className="font-mono text-[11px] border border-vinho/30 bg-vinho/5 px-3 py-1.5 uppercase text-preto">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Educação Formal */}
            <section>
                <span className="font-mono text-xs tracking-widest uppercase text-vinho mb-6 block">
                    Educação
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-preto/15 border border-preto/15">
                    <div className="bg-osso p-8">
                        <div className="font-mono text-xs text-vinho mb-2">UFPE · 2018–2025</div>
                        <div className="font-serif text-2xl font-medium mb-3">Cinema e Audiovisual</div>
                        <p className="font-mono text-[11px] text-preto/70 leading-relaxed">
                            Integração do Diretório Acadêmico e participação no Programa de Bolsas de Incentivo de Criação Cultural (BICC), desenvolvendo pesquisa autoral sobre representação no audiovisual.
                        </p>
                    </div>
                    <div className="bg-osso p-8">
                        <div className="font-mono text-xs text-vinho mb-2">UNINTER · 2023–2026</div>
                        <div className="font-serif text-2xl font-medium mb-3">Análise e Desenv. de Sistemas</div>
                        <p className="font-mono text-[11px] text-preto/70 leading-relaxed">
                            A tecnologia sempre representou um terreno fértil para expandir a forma como trabalho no audiovisual e no ambiente digital.
                        </p>
                    </div>
                </div>
            </section>

        </main>
    );
}
