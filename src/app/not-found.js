import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="min-h-[85vh] relative z-10 flex flex-col items-center justify-center bg-osso px-[6vw] md:px-[8vw] text-center overflow-hidden">

            {/* Efeito de ruído global opcional */}
            <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.04] mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')]"></div>

            {/* Container Central com "Visor de Câmera" */}
            <div className="relative py-16 px-8 md:px-16 flex flex-col items-center max-w-4xl mx-auto group">

                {/* Cantoneiras do Visor */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-preto/20"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-preto/20"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-preto/20"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-preto/20"></div>

                {/* Status Badge */}
                <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] mb-8 text-preto/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C84A31] animate-pulse"></span>
                    <span>Erro 404 · Cena não encontrada</span>
                </div>

                {/* Título Gigante */}
                <h1 className="font-serif font-normal text-[clamp(44px,6vw,80px)] leading-[1.05] text-preto mb-6">
                    Ops, esta cena ficou na <br className="hidden md:block" />
                    <i className="italic font-light text-[#C84A31]">sala de corte.</i>
                </h1>

                {/* Subtítulo */}
                <p className="font-sans text-lg md:text-xl text-preto/70 max-w-[540px] leading-[1.6] mb-12">
                    O link que você tentou acessar não existe ou foi descartado na montagem final. Vamos voltar para o roteiro principal?
                </p>

                {/* Botão de Ação */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-3 font-mono text-sm tracking-[0.15em] uppercase bg-[#C84A31] text-[#FAF4E6] py-4 px-10 hover:bg-preto transition-colors font-medium"
                >
                    <span>← Voltar para a Home</span>
                </Link>

            </div>
        </main>
    );
}