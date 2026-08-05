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
                <div className="w-full bg-[#C84A31] text-[#FAF4E6] py-28 md:py-36 px-[6vw] md:px-[8vw] flex flex-col items-center justify-center text-center">
                    <h2 className="font-serif font-normal text-[clamp(36px,5vw,64px)] leading-tight mb-10 max-w-4xl">
                        Já viu os meus <i className="font-light italic">trabalhos?</i>
                    </h2>
                    <Link
                        href="/projetos"
                        className="inline-block font-mono text-sm tracking-[0.15em] uppercase border border-[#FAF4E6]/40 hover:bg-[#FAF4E6] hover:text-[#C84A31] transition-colors px-12 py-5 font-medium"
                    >
                        Ver projetos →
                    </Link>
                </div>
            </FadeIn>

        </main>
    );
}