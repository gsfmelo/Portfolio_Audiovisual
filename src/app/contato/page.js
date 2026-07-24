export default function Contato() {
    return (
        <main className="min-h-[85vh] flex flex-col justify-center px-[8vw] py-16 relative z-10">

            {/* CABEÇALHO: NEUTRO E IMPACTANTE */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-end border-b border-preto/15 pb-16 mt-8">

                <div className="max-w-3xl">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="w-2 h-2 rounded-full bg-vinho animate-pulse"></span>
                        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-preto/60">
                            Status: Disponível para novos projetos
                        </span>
                    </div>
                    <h1 className="font-serif font-normal text-[clamp(40px,5vw,72px)] leading-[1.05] tracking-tight text-preto">
                        Vamos conversar sobre o seu <i className="font-light italic text-vinho">próximo projeto.</i>
                    </h1>
                </div>

                <div className="lg:mb-3 lg:ml-auto max-w-sm">
                    <p className="font-sans text-base text-preto/70 leading-relaxed">
                        Seja para a montagem de um curta-metragem autoral, edição dinâmica para o digital ou planejamento de conteúdo, entre em contato para discutirmos ideias e orçamentos.
                    </p>
                </div>

            </section>

            {/* GRID DE INFORMAÇÕES */}
            <section className="pt-16 grid grid-cols-1 md:grid-cols-2 gap-16">

                {/* Contato Direto */}
                <div className="flex flex-col gap-12">
                    <div>
                        <span className="font-mono text-[10px] text-preto/40 tracking-[0.2em] uppercase block mb-3">/ e-mail</span>
                        <a
                            href="mailto:gsfmelo@gmail.com"
                            className="font-serif text-[clamp(28px,4vw,40px)] text-preto hover:text-vinho transition-colors"
                        >
                            gsfmelo@gmail.com
                        </a>
                    </div>

                    <div>
                        <span className="font-mono text-[10px] text-preto/40 tracking-[0.2em] uppercase block mb-3">/ telefone & whatsapp</span>
                        <a
                            href="https://wa.me/5581983665444"
                            target="_blank"
                            rel="noreferrer"
                            className="font-serif text-[clamp(28px,4vw,40px)] text-preto hover:text-vinho transition-colors"
                        >
                            (81) 98366-5444
                        </a>
                    </div>
                </div>

                {/* Redes Sociais */}
                <div className="flex flex-col gap-10 md:items-end">
                    <div className="w-full md:max-w-[240px]">
                        <span className="font-mono text-[10px] text-preto/40 tracking-[0.2em] uppercase block mb-6 md:text-right">/ presença digital</span>

                        <div className="flex flex-col font-mono text-[11px] tracking-widest uppercase">
                            {[
                                { nome: 'Instagram', url: '#' },
                                { nome: 'LinkedIn', url: '#' },
                                { nome: 'Vimeo', url: '#' },
                                { nome: 'Behance', url: '#' }
                            ].map((rede, i, arr) => (
                                <a
                                    key={rede.nome}
                                    href={rede.url}
                                    className={`text-preto/70 hover:text-vinho hover:bg-osso2/50 transition-colors flex justify-between md:justify-end md:gap-6 py-4 group ${i !== arr.length - 1 ? 'border-b border-preto/10' : ''}`}
                                >
                                    <span>{rede.nome}</span>
                                    <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

            </section>
        </main>
    );
}