import Link from 'next/link';
import FadeIn from '../components/FadeIn';
import HeroSobre from '../components/sobre/HeroSobre';
import MetodoTrabalho from '../components/sobre/MetodoTrabalho';
import Trajetoria from '../components/sobre/Trajetoria';
import ServicosGrid from '../components/sobre/ServicosGrid';
import CursosCertificacoes from '../components/sobre/CursosCertificacoes';
import LinhaDoTempo from '../components/sobre/LinhaDoTempo';
import DiferencialTech from '../components/sobre/DiferencialTech';
import Personalidade from '../components/sobre/Personalidade';


export default function Sobre() {
    return (
        <main className="min-h-screen relative z-10 flex flex-col bg-osso">

            {/* Efeito de ruído global opcional */}
            <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.04] mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')]"></div>

            <HeroSobre />

            <FadeIn><Trajetoria /></FadeIn>

            <FadeIn><LinhaDoTempo /></FadeIn>

            <FadeIn><MetodoTrabalho /></FadeIn>

            <FadeIn><ServicosGrid /></FadeIn>

            <FadeIn><DiferencialTech /></FadeIn>

            <FadeIn><CursosCertificacoes /></FadeIn>

            <FadeIn><Personalidade /></FadeIn>

            {/* 7. FECHAMENTO CTA BANNER */}
            <FadeIn>
                {/* Removido o mt-10 — mesma correção aplicada na Home e em Projetos:
                    a seção anterior (Personalidade) já deve ter seu próprio padding vertical,
                    somar mt-10 aqui criava um salto maior que a transição entre as outras seções */}
                <div className="bg-vinho text-osso text-center py-24 md:py-32 px-[8vw]">
                    <h2 className="font-serif italic font-normal text-[clamp(32px,5vw,52px)]">
                        Já viu os meus trabalhos?
                    </h2>
                    <Link 
                        href="/projetos" 
                        className="inline-block mt-8 font-mono text-sm tracking-[0.1em] uppercase border border-osso text-osso py-4 px-10 hover:bg-osso hover:text-vinho transition-colors font-medium"
                    >
                        Ver projetos →
                    </Link>
                </div>
            </FadeIn>

        </main>
    );
}