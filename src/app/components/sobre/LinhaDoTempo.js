export default function LinhaDoTempo() {
    const experiencias = [
        { ano: '2025 —', cargo: 'Editora de Vídeo', local: 'CAP Assessoria' },
        { ano: 'Ago–Nov 2025', cargo: 'Assistente de Marketing Digital', local: 'Falcor Travels' },
        { ano: 'Jul 2022–2023', cargo: 'Estágio em Edição de Vídeo', local: 'Secretariado do Brasil' },
        { ano: 'Mai–Jun 2022', cargo: 'Estágio em Videomaker', local: 'Pref. do Recife' },
        { ano: 'Ago–Out 2021', cargo: 'Estágio em Produção Televisiva', local: 'TV Universitária' }
    ];

    return (
        <section className="mt-20 md:mt-28 pt-16 border-t border-preto/15">
            <span className="font-mono text-xs md:text-sm tracking-[0.15em] uppercase text-vinho block mb-8 font-medium">Linha do Tempo</span>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                    <h3 className="font-serif text-2xl font-normal mb-6 text-preto">Experiência Profissional</h3>
                    <div className="flex flex-col">
                        {experiencias.map((xp, index) => (
                            <div key={index} className={`grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1 py-4 border-preto/15 ${index === 0 ? 'border-t border-b' : 'border-b'}`}>
                                <div className="font-mono text-xs text-preto/60 uppercase">{xp.ano}</div>
                                <div>
                                    <div className="font-serif text-lg">{xp.cargo}</div>
                                    <div className="font-mono text-xs text-preto/60 uppercase mt-0.5">{xp.local}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="font-serif text-2xl font-normal mb-6 text-preto">Formação & Acadêmico</h3>
                    <div className="space-y-4">
                        <div className="p-6 bg-osso2 border border-preto/15">
                            <div className="font-mono text-xs text-vinho mb-1.5 uppercase tracking-widest">UFPE · 2018–2025</div>
                            <div className="font-serif text-xl">Cinema e Audiovisual</div>
                            <p className="font-sans text-sm text-preto/75 mt-1.5">Graduação e pesquisa autoral BICC.</p>
                        </div>
                        <div className="p-6 bg-osso2 border border-preto/15">
                            <div className="font-mono text-xs text-vinho mb-1.5 uppercase tracking-widest">UNINTER · 2023–2026</div>
                            <div className="font-serif text-xl">Análise e Desenvolvimento de Sistemas</div>
                            <p className="font-sans text-sm text-preto/75 mt-1.5">Foco em lógica e automação de processos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}