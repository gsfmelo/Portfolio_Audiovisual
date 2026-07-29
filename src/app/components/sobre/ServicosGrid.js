export default function ServicosGrid() {
    return (
        <section className="px-[6vw] md:px-[8vw] pb-16">
            <div className="border-t border-preto/15 pt-12">
                <span className="font-mono text-sm tracking-[0.15em] uppercase text-vinho font-medium block mb-10">
                    O que eu trago
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

                    <div>
                        <h3 className="font-serif italic font-normal text-2xl md:text-3xl text-vinho mb-6">Edição</h3>
                        <div className="flex flex-wrap gap-3">
                            {['Premiere', 'CapCut', 'DaVinci Resolve', 'After Effects', 'Lightroom'].map(tag => (
                                <span key={tag} className="font-mono text-xs md:text-sm text-preto/70 border border-preto/15 px-4 py-2 uppercase tracking-wider">{tag}</span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-serif italic font-normal text-2xl md:text-3xl text-vinho mb-6">Conteúdo & marketing</h3>
                        <div className="flex flex-wrap gap-3">
                            {['Roteiro pra redes', 'Linha editorial', 'Copywriting', 'Canva', 'Figma'].map(tag => (
                                <span key={tag} className="font-mono text-xs md:text-sm text-preto/70 border border-preto/15 px-4 py-2 uppercase tracking-wider">{tag}</span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-serif italic font-normal text-2xl md:text-3xl text-vinho mb-6">Direção</h3>
                        <div className="flex flex-wrap gap-3">
                            {['Roteiro', 'Produção', 'Direção de curtas', 'Pesquisa autoral'].map(tag => (
                                <span key={tag} className="font-mono text-xs md:text-sm text-preto/70 border border-preto/15 px-4 py-2 uppercase tracking-wider">{tag}</span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}