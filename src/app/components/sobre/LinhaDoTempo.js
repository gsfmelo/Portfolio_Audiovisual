export default function LinhaDoTempo() {
    const exps = [
        { period: '2025 —', roleNormal: 'Editora de ', roleItalic: 'Vídeo', org: 'CAP Assessoria' },
        { period: 'Ago–Nov 2025', roleNormal: 'Assistente de Marketing Digital', roleItalic: '', org: 'Falcor Travels & Secretariado do Brasil' },
        { period: 'Jul 2022–2023', roleNormal: 'Estágio em Edição de ', roleItalic: 'Vídeo', org: 'Secretariado do Brasil, Falcor & Pleno' },
        { period: 'Mai–Jun 2022', roleNormal: 'Estágio em Videomaker', roleItalic: '', org: 'Secretaria da Educação — Pref. Recife' },
        { period: 'Ago–Out 2021', roleNormal: 'Estágio em Produção ', roleItalic: 'Televisiva', org: 'TV Universitária Recife' }
    ];

    return (
        <section className="px-[6vw] md:px-[8vw] pb-16">
            <div className="border-t border-preto/15 pt-12">
                <span className="font-mono text-sm tracking-[0.15em] uppercase text-vinho font-medium block mb-8">
                    Experiência
                </span>
                <div className="flex flex-col border-t border-preto/15">
                    {exps.map((exp, idx) => (
                        <div key={idx} className="grid grid-cols-1 md:grid-cols-[160px_1fr_auto] gap-4 md:gap-8 items-baseline py-6 border-b border-preto/15">
                            <div className="font-mono text-xs md:text-sm text-preto/50 uppercase tracking-widest">{exp.period}</div>
                            <div className="font-serif font-normal text-2xl md:text-3xl text-preto">
                                {exp.roleNormal} <i className="italic text-vinho">{exp.roleItalic}</i>
                            </div>
                            <div className="font-mono text-xs md:text-sm text-preto/60 uppercase tracking-widest md:text-right mt-2 md:mt-0">
                                {exp.org}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}