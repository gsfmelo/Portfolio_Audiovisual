import Link from 'next/link';
import FadeIn from '../components/FadeIn';
import HeroSobre from '../components/sobre/HeroSobre';
import MetodoTrabalho from '../components/sobre/MetodoTrabalho';
import Trajetoria from '../components/sobre/Trajetoria';
import ServicosGrid from '../components/sobre/ServicosGrid';
import LinhaDoTempo from '../components/sobre/LinhaDoTempo';
import DiferencialTech from '../components/sobre/DiferencialTech';
import Personalidade from '../components/sobre/Personalidade';

export default function Sobre() {
    return (
        <main className="min-h-screen px-[6vw] md:px-[8vw] py-16 md:py-24 relative z-10">

            <HeroSobre />

            <FadeIn><MetodoTrabalho /></FadeIn>

            <FadeIn><Trajetoria /></FadeIn>

            <FadeIn><ServicosGrid /></FadeIn>

            <FadeIn><LinhaDoTempo /></FadeIn>

            <FadeIn><DiferencialTech /></FadeIn>

            <FadeIn><Personalidade /></FadeIn>

            {/* 7. FECHAMENTO */}
            <FadeIn>
                <section className="mt-28 mb-8 text-center max-w-xl mx-auto">
                    <p className="font-sans text-lg text-preto/85 mb-8 leading-relaxed">
                        Cada projeto exige um olhar diferente. Se quiser conhecer como essas ideias se transformam em imagens, os trabalhos estão logo abaixo.
                    </p>
                    <div className="text-vinho text-xl mb-3">↓</div>
                    <Link href="/projetos" className="group inline-flex items-center gap-3 font-serif italic text-2xl md:text-3xl text-vinho hover:opacity-75 transition-opacity">
                        <span>Conheça meus projetos</span>
                        <span className="font-sans text-xl group-hover:translate-x-2 transition-transform">→</span>
                    </Link>
                </section>
            </FadeIn>

        </main>
    );
}