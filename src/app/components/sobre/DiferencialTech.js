export default function DiferencialTech() {
    return (
        <section className="mt-20 md:mt-28 pt-12 border-t border-preto/15">
            <div className="bg-preto/5 p-8 md:p-12 border border-preto/15 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div>
                    <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#C84A31] block mb-3 font-medium">/ O diferencial técnico</span>
                    <h3 className="font-serif font-normal text-2xl md:text-3xl text-preto leading-tight mb-3">
                        Também gosto de entender o que acontece <i className="font-light italic text-[#C99A3E]">por trás da tela.</i>
                    </h3>
                    <p className="font-sans text-base text-preto/80 max-w-xl leading-relaxed">
                        Além do audiovisual, estudo Análise e Desenvolvimento de Sistemas. Isso me permite criar automações e scripts em Python (como o projeto ProntoPlay) para otimizar fluxos de trabalho e processamento de vídeo.
                    </p>
                </div>

                <a
                    href="https://seu-portfolio-tech-aqui.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs tracking-[0.1em] uppercase border border-preto bg-preto text-osso px-7 py-4 hover:bg-vinho hover:border-vinho transition-colors text-center whitespace-nowrap font-medium"
                >
                    Ver Portfólio Tech →
                </a>
            </div>
        </section>
    );
}