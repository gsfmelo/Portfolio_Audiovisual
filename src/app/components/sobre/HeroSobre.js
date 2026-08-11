export default function HeroSobre() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-start pt-24 pb-16 px-[6vw] md:px-[8vw]">
            
            <div className="lg:mt-8">
                <span className="font-mono text-sm tracking-[0.15em] uppercase text-vinho mb-6 block font-medium">
                    Sobre
                </span>
                <h1 className="font-serif font-normal text-[clamp(40px,5vw,64px)] leading-[1.1]">
                    Meu trabalho começa <i className="italic font-light text-vinho">antes</i> do <i className="italic font-light text-vinho">primeiro corte.</i>
                </h1>
                <div className="font-mono text-xs md:text-sm tracking-[0.1em] uppercase text-preto/60 mt-6 font-medium">
                    realizadora audiovisual · videomaker · editora de vídeo · estrategista de conteúdo
                </div>
            </div>

            {/* Retrato com cantoneiras */}
            {/* Lado Direito: Foto Estilo Viewfinder Cinematográfico */}
            <div className="relative w-full max-w-[300px] lg:max-w-[360px] aspect-[3/4] mx-auto lg:ml-auto lg:mr-8 group">
            
                {/* Marcas de Enquadramento (Viewfinder) com animação sutil */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-[1.5px] border-l-[1.5px] border-preto/80 z-10 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 duration-500"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-[1.5px] border-r-[1.5px] border-preto/80 z-10 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 duration-500"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-[1.5px] border-l-[1.5px] border-preto/80 z-10 transition-transform group-hover:-translate-x-2 group-hover:translate-y-2 duration-500"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-[1.5px] border-r-[1.5px] border-preto/80 z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-500"></div>

                {/* A Imagem */}
                <div className="w-full h-full p-2">
                    <img 
                        src="/fotocamera.jpg" 
                        alt="Geovanna Melo com equipamento de câmera" 
                        className="w-full h-full object-cover object-center grayscale contrast-110 brightness-95 group-hover:grayscale-0 transition-all duration-700 shadow-xl" 
                    />
                </div>

                {/* Detalhe técnico minimalista */}
                <div className="absolute -right-8 bottom-12 rotate-90 font-mono text-[9px] tracking-[0.3em] text-preto/40 uppercase hidden md:block select-none">
                    REC // 24FPS
                </div>

            </div>
        </section>
    );
}