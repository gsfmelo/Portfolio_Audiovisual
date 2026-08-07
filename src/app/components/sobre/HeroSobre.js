export default function HeroSobre() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center pt-24 pb-16 px-[6vw] md:px-[8vw]">
            <div>
                <span className="font-mono text-sm tracking-[0.15em] uppercase text-vinho mb-6 block font-medium">
                    Sobre
                </span>
                <h1 className="font-serif font-normal text-[clamp(40px,5vw,64px)] leading-[1.1]">
                    Edito pra <i className="italic font-light text-vinho">convencer.</i> Dirijo pra <i className="italic font-light text-vinho">ficar.</i>
                </h1>
                <div className="font-mono text-xs md:text-sm tracking-[0.1em] uppercase text-preto/60 mt-6 font-medium">
                    realizadora audiovisual · editora de vídeo · estrategista de conteúdo
                </div>
            </div>

            {/* Retrato com cantoneiras */}
            <div className="aspect-[4/5] bg-osso2 border border-preto/15 relative flex items-center justify-center w-full max-w-[400px] mx-auto lg:mx-0">
                <span className="font-mono text-xs text-preto/35 uppercase tracking-widest">
                        <img
          src="/fotocamera.jpg"
          alt="Geovanna Melo no set de gravação"
          className="absolute inset-0 w-full h-full object-cover"
        />
                </span>
                <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-vinho"></div>
                <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-vinho"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-vinho"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-vinho"></div>
            </div>
        </section>
    );
}