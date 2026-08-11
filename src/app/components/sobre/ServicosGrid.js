export default function ServicosGrid() {
    return (
                <section className="py-20 px-[6vw] md:px-[8vw] border-y border-preto/15">
            <span className="font-mono text-xs tracking-[0.15em] uppercase text-vinho mb-10 block font-medium">
                O que eu trago
            </span>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
                
                {/* COLUNA 1 */}
                <div>
                    <h3 className="font-serif italic font-normal text-2xl md:text-3xl text-vinho mb-6">
                        Edição & Criação
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {['Adobe Premiere Pro', 'Capcut', 'DaVinci Resolve', 'Adobe After Effects', 'Adobe Lightroom', 'Adobe Photoshop', 'Canva', 'Figma'].map((skill) => (
                            <span key={skill} className="border border-preto/20 px-3 py-1.5 font-mono text-[10px] md:text-xs uppercase tracking-widest text-preto/70 bg-osso2/20">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* COLUNA 2 */}
                <div>
                    <h3 className="font-serif italic font-normal text-2xl md:text-3xl text-vinho mb-6">
                        Conteúdo & Marketing
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {['Captação', 'Storytelling', 'Linha Editorial', 'Copywriting', 'Calendário de Planejamento', 'Metodologias Ágeis', 'Ferramentas de IA'].map((skill) => (
                            <span key={skill} className="border border-preto/20 px-3 py-1.5 font-mono text-[10px] md:text-xs uppercase tracking-widest text-preto/70 bg-osso2/20">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* COLUNA 3 */}
                <div>
                    <h3 className="font-serif italic font-normal text-2xl md:text-3xl text-vinho mb-6">
                        Habilidades Interpessoais
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {['Proatividade', 'Trabalho em Equipe', 'Liderança', 'Resolução de Problemas', 'Gerenciamento de Projetos', 'Comunicação Assertiva', 'Responsabilidade'].map((skill) => (
                            <span key={skill} className="border border-preto/20 px-3 py-1.5 font-mono text-[10px] md:text-xs uppercase tracking-widest text-preto/70 bg-osso2/20">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}