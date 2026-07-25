export default function MetodoTrabalho() {
    return (
        <section className="mt-16 md:mt-24 pt-16 border-t border-preto/15">
            <div className="grid grid-cols-1 lg:grid-cols-[280px_80px_1fr] gap-8 lg:gap-10 items-start">

                <div className="aspect-[4/3] lg:aspect-square bg-preto/5 border border-preto/15 border-dashed relative flex items-center justify-center group overflow-hidden w-full max-w-[280px] mx-auto lg:mx-0 mb-6 lg:mb-0">
                    <span className="font-mono text-xs text-preto/50 uppercase tracking-widest text-center px-4">
                        [ foto sua em<br />ação / no set ]
                    </span>
                </div>

                <span className="font-mono text-xs md:text-sm tracking-[0.15em] uppercase text-vinho block lg:mt-2 font-medium">Método</span>

                <div className="font-sans text-base md:text-lg leading-[1.8] text-preto/85 space-y-6">
                    <h3 className="font-serif text-2xl md:text-3xl font-normal text-preto mb-3">Minha forma de trabalhar</h3>
                    <p>Gosto de pensar no audiovisual como uma ferramenta de comunicação antes de qualquer coisa. Cada vídeo precisa encontrar seu próprio ritmo, sua própria linguagem e conversar com quem está do outro lado da tela.</p>
                    <p>É por isso que meu trabalho vai além da edição. Participo da construção da ideia, organizo a narrativa, penso no ritmo da montagem e adapto cada projeto ao contexto em que ele será visto — seja um curta-metragem, uma campanha para redes sociais ou um vídeo institucional.</p>
                </div>
            </div>
        </section>
    );
}