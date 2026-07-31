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
                        Bacharel em Cinema e Audiovisual pela Universidade Federal do Pernambuco. Participei ativamente na integração e reestruturação do Diretório Acadêmico do curso. Também integrei o Programa de Bolsas de Incentivo de Criação Cultural (BICC), onde desenvolvi uma pesquisa autoral e um minidoc sobre a representação LGBTQIAPN+ no audiovisual.
                    </p>
                </div>

                {/* Bloco ADS */}
                <div className="bg-osso p-8 md:p-10 flex flex-col h-full">
                    <div>
                        <div className="font-mono text-xs md:text-sm text-vinho mb-3 uppercase tracking-widest">UNINTER · 2023–2026</div>
                        <div className="font-serif font-normal text-3xl md:text-4xl text-preto mb-6">Análise e <i className="italic text-[#C99A3E]">Desenvolvimento de Sistemas</i></div>
                    </div>
                    <p className="font-sans text-base text-preto/75 leading-relaxed mt-auto pt-4 border-t border-preto/10">
                        Tecnólogo em andamento no Centro Universitário Internacional - UNINTER. A tecnologia sempre representou um terreno fértil para mim, principalmente após entrar no mercado de trabalho. Meu maior objetivo nesse formação é criar soluções mais eficientes e inovadoras para meu método de trabalho.
                    </p>
                </div>

            </div>

                {/* Teaser ADS - Estilo Editor de Código (Discreto) */}
      <div className="mt-[1px] border border-preto/15 bg-osso2 p-8 md:p-10 font-mono text-xs md:text-sm flex flex-col md:flex-row items-start md:items-end justify-between gap-8">

        {/* Container do Código (Sem números de linha) */}
        <div className="overflow-x-auto w-full pb-2 md:pb-0 scrollbar-hide">
          <div className="flex flex-col min-w-max text-preto/70 leading-[1.8]">
            <div>
              <span className="text-preto/50">const</span> <span className="text-preto/80 font-medium">techPortfolio</span> = {'{'}
            </div>
            <div className="pl-6 md:pl-8">
              dev: <span className="text-vinho/80">"Geovanna Melo"</span>,
            </div>
            <div className="pl-6 md:pl-8">
              detalhe: <span className="text-vinho/80">"Este site foi inteiramente desenvolvido por mim."</span>,
            </div>
            <div className="pl-6 md:pl-8">
              proximoPasso: <span className="text-vinho/80">"Para conhecer minha trajetória em tecnologia, acesse meu portfólio tech."</span>,
            </div>
            <div className="pl-6 md:pl-8">
              status: <span className="text-[#C99A3E]/90">"Compilando projetos..."</span>
            </div>
            <div>{'}'};</div>
            
            <div className="mt-3 text-preto/30 italic">
              // run build
            </div>
          </div>
        </div>

        {/* Botão "Em Breve" mais sutil */}
        <div className="shrink-0 w-full md:w-auto flex justify-start md:justify-end">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-preto/50 border border-preto/15 bg-transparent px-6 py-3 whitespace-nowrap flex items-center gap-2 select-none hover:text-vinho hover:border-vinho/30 transition-colors">
            <span>em breve</span>
            <span className="animate-pulse">_</span>
          </div>
        </div>

      </div>

        </section>
    );
}