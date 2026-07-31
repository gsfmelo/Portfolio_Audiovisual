export default function ServicosGrid() {
    return (
        <section className="px-[6vw] md:px-[8vw] pb-16">
            <div className="border-t border-preto/15 pt-12">
                <span className="font-mono text-sm tracking-[0.15em] uppercase text-vinho font-medium block mb-10">
                    O que eu trago
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

                    <div>
                        <h3 className="font-serif italic font-normal text-2xl md:text-3xl text-vinho mb-6">Edição & Criação</h3>
                        <div className="flex flex-wrap gap-3">
                            {['Adobe Premiere PRO', 'CapCut', 'DaVinci Resolve', 'Adobe After Effects', 'Adobe Lightroom', 'Adobe Photoshop', 'Canva', 'Figma'].map(tag => (
                                <span key={tag} className="font-mono text-xs md:text-sm text-preto/70 border border-preto/15 px-4 py-2 uppercase tracking-wider">{tag}</span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-serif italic font-normal text-2xl md:text-3xl text-vinho mb-6">Conteúdo & marketing</h3>
                        <div className="flex flex-wrap gap-3">
                            {['Captação', 'Storytelling', 'Linha editorial', 'Copywriting', 'Calendário de Planejamento', 'Metodologias Ágeis', 'Ferramentas de IA'].map(tag => (
                                <span key={tag} className="font-mono text-xs md:text-sm text-preto/70 border border-preto/15 px-4 py-2 uppercase tracking-wider">{tag}</span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-serif italic font-normal text-2xl md:text-3xl text-vinho mb-6">Habilidades Interpessoais</h3>
                        <div className="flex flex-wrap gap-3">
                            {['Proatividade','Trabalho em Equipe', 'Liderança', 'Resolução de Problemas', 'Gerenciamento de Projetos', 'Comunicação Assertiva', 'Responsabilidade'].map(tag => (
                                <span key={tag} className="font-mono text-xs md:text-sm text-preto/70 border border-preto/15 px-4 py-2 uppercase tracking-wider">{tag}</span>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}