export default function MetodoTrabalho() {
    return (
        <section className="px-[6vw] md:px-[8vw] py-20 text-center relative">
            <p className="font-serif italic font-normal text-[clamp(28px,4vw,44px)] leading-[1.4] max-w-[800px] mx-auto text-preto">
                Meu trabalho começa onde a <i className="text-vinho">edição</i> encontra a <i className="text-vinho">escuta</i> — cortar bem é, antes de tudo, saber o que vale a pena guardar.
            </p>
            <svg className="block mx-auto mt-8" width="180" height="26" viewBox="0 0 180 26">
                <path d="M2 6 C 22 -2, 20 20, 40 14 C 56 8, 54 20, 72 16 C 90 10, 88 20, 106 16 C 126 10, 126 20, 148 14 C 160 10, 162 16, 174 12" fill="none" stroke="#C84A31" strokeWidth="2" strokeLinecap="round" />
            </svg>
        </section>
    );
}