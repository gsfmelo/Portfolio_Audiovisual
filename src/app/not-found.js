import Link from 'next/link';
import FadeIn from './components/FadeIn';

export default function NotFound() {
    return (
        <main className="min-h-[75vh] px-[8vw] py-20 flex flex-col justify-center items-center text-center relative z-10">
            <FadeIn>

                {/* Indicador estilo claquete / erro de take */}
                <div className="flex justify-center items-center gap-3 mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#C84A31]"></span>
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-preto/50">
                        Erro 404 · Cena não encontrada
                    </span>
                </div>

                <h1 className="font-serif font-normal text-[clamp(40px,7vw,80px)] leading-[1.05] tracking-tight mb-6 text-preto">
                    Ops, esta cena ficou na <br />
                    <i className="font-light italic text-[#C84A31]">sala de corte.</i>
                </h1>

                <p className="font-sans text-lg text-preto/70 max-w-lg mx-auto mb-12 leading-relaxed">
                    O link que você tentou acessar não existe ou foi descartado na montagem final. Vamos voltar para o roteiro principal?
                </p>

                {/* Botão de Retorno */}
                <Link
                    href="/"
                    className="inline-block font-mono text-[11px] tracking-[0.1em] uppercase bg-[#C84A31] text-[#FAF4E6] px-8 py-3.5 hover:bg-preto transition-colors shadow-sm"
                >
                    ← Voltar para a Home
                </Link>

            </FadeIn>
        </main>
    );
}