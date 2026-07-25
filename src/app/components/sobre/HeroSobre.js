export default function HeroSobre() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-20 items-center mb-20 md:mb-28">
            <div>
                <span className="font-mono text-xs md:text-sm tracking-[0.15em] uppercase text-vinho mb-4 block font-medium">Posicionamento · Visão</span>
                <h1 className="font-serif font-normal text-[clamp(36px,4.8vw,56px)] leading-[1.12] tracking-tight mb-8">
                    Toda boa história começa <i className="font-light italic text-vinho">antes da câmera.</i>
                </h1>
                <p className="font-sans text-lg md:text-xl text-preto/85 leading-relaxed mb-8">
                    Acredito que bons vídeos não chamam atenção apenas pela estética. Eles permanecem pela forma como fazem alguém sentir alguma coisa.
                </p>
                <div className="pt-8 border-t border-preto/15">
                    <h2 className="font-serif text-2xl md:text-3xl font-normal">
                        Oi, sou <i className="font-light italic text-vinho">Geovanna Melo.</i>
                    </h2>
                    <p className="font-sans text-base md:text-lg text-preto/80 mt-3 leading-relaxed">
                        Editora de vídeo, realizadora audiovisual e profissional de marketing. Meu trabalho é <strong className="text-preto font-normal underline decoration-vinho/60 underline-offset-4">organizar histórias</strong> para cinema, marcas e plataformas digitais.
                    </p>
                </div>
            </div>

            <div className="aspect-[4/5] bg-osso2 border border-preto/15 relative flex items-center justify-center group overflow-hidden w-full max-w-[280px] sm:max-w-[320px] mx-auto lg:mx-0 shadow-sm">
                <span className="font-mono text-xs text-preto/50 uppercase tracking-widest text-center px-4">
                    [ seu retrato<br />principal ]
                </span>
                <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-vinho z-10"></div>
                <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-vinho z-10"></div>
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-vinho z-10"></div>
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-vinho z-10"></div>
            </div>
        </section>
    );
}