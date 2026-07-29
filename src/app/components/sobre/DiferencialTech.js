export default function DiferencialTech() {
    return (
        <section className="px-[6vw] md:px-[8vw] pb-16">

            {/* Educação */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-preto/15 border border-preto/15">

                {/* Bloco Cinema */}
                <div className="bg-osso p-8 md:p-10 flex flex-col h-full">
                    <div>
                        <div className="font-mono text-xs md:text-sm text-vinho mb-3 uppercase tracking-widest">UFPE · 2018–2025</div>
                        <div className="font-serif font-normal text-3xl md:text-4xl text-preto mb-6">Cinema e <i className="italic text-[#C99A3E]">Audiovisual</i></div>
                    </div>
                    <p className="font-sans text-base text-preto/75 leading-relaxed mt-auto pt-4 border-t border-preto/10">
                        Graduada na Universidade Federal de Pernambuco, encontrei no curso a porta de entrada para um mundo novo[cite: 2]. Além das atividades acadêmicas, participei ativamente na integração e reestruturação do Diretório Acadêmico do curso[cite: 2]. Também integrei o Programa de Bolsas de Incentivo de Criação Cultural (BICC), onde desenvolvi uma pesquisa autoral e um minidoc sobre a representação LGBTQIAPN+ no audiovisual[cite: 2].
                    </p>
                </div>

                {/* Bloco ADS */}
                <div className="bg-osso p-8 md:p-10 flex flex-col h-full">
                    <div>
                        <div className="font-mono text-xs md:text-sm text-vinho mb-3 uppercase tracking-widest">UNINTER · 2023–2026</div>
                        <div className="font-serif font-normal text-3xl md:text-4xl text-preto mb-6">Análise e <i className="italic text-[#C99A3E]">Desenvolvimento de Sistemas</i></div>
                    </div>
                    <p className="font-sans text-base text-preto/75 leading-relaxed mt-auto pt-4 border-t border-preto/10">
                        Graduação em andamento no Centro Universitário Internacional - UNINTER[cite: 2]. A tecnologia sempre representou um terreno fértil para mim, principalmente após entrar no mercado de trabalho de audiovisual[cite: 2]. Era essencial pra mim unir algo que eu já amava e expandir a forma com que eu trabalhava[cite: 2].
                    </p>
                </div>

            </div>

            {/* Teaser ADS */}
            <div className="mt-[1px] border border-dashed border-preto/30 bg-osso2 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="font-sans text-base md:text-lg text-preto/75 max-w-[600px] leading-relaxed">
                    Enquanto termino <b className="text-vinho font-serif italic font-normal text-xl md:text-2xl">Análise e Desenvolvimento de Sistemas</b>, também estou construindo um portfólio técnico — onde a lógica de quem edita encontra a lógica de quem programa.
                </div>
                <div className="font-mono text-xs uppercase tracking-widest text-[#C99A3E] border border-[#C99A3E] px-5 py-2.5 whitespace-nowrap">
                    em breve →
                </div>
            </div>

        </section>
    );
}