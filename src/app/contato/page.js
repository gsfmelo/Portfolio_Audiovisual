export default function Contato() {
    return (
        <main className="min-h-[75vh] px-[8vw] py-16 flex flex-col justify-center items-center relative z-10 text-center">

            <span className="font-mono text-xs tracking-widest uppercase text-vinho mb-6 block">
                Contato · Redes
            </span>

            <h1 className="font-serif font-medium text-5xl md:text-7xl tracking-tight mb-12">
                Obrigada por <br />
                <i className="font-light italic text-vinho">ficar até o fim.</i>
            </h1>

            {/* Informações de Contato */}
            <div className="flex flex-col gap-6 font-mono text-sm text-preto/80 uppercase tracking-widest">
                <a
                    href="mailto:gsfmelo@gmail.com"
                    className="hover:text-vinho transition-colors hover:underline underline-offset-4"
                >
                    gsfmelo@gmail.com
                </a>

                <a
                    href="https://wa.me/5581983665444"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-vinho transition-colors hover:underline underline-offset-4"
                >
                    (81) 98366-5444
                </a>
            </div>

            {/* Links de Redes Sociais */}
            <div className="mt-20 flex gap-8 font-mono text-[11px] text-preto/50 uppercase tracking-widest">
                <a href="#" className="hover:text-vinho transition-colors">Instagram</a>
                <a href="#" className="hover:text-vinho transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-vinho transition-colors">Vimeo</a>
                <a href="#" className="hover:text-vinho transition-colors">Behance</a>
            </div>

        </main>
    );
}
