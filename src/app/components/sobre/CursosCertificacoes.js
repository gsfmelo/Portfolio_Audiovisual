export default function CursosCertificacoes() {
  const cursos = [
        {
      ano: "2026",
      instituicao: "FERA Audiovisual",
      curso: "Oficina de Montagem",
      tipo: "audiovisual"
    },
    {
      ano: "2025",
      instituicao: "Vitrine Filmes",
      curso: "6º Vitrine Lab",
      tipo: "audiovisual"
    },
    {
      ano: "2025",
      instituicao: "FUNDAJ - Fundação Joaquim Nabuco",
      curso: "Curso de Direção Autoral de Filmes de Baixo Orçamento",
      tipo: "audiovisual"
    },
    {
      ano: "2025",
      instituicao: "Globo & Rec'N'Play",
      curso: "Desafio Hackathon: Produção de Conteúdo Inteligente Multiplataforma",
      tipo: "tech"
    },
    {
      ano: "2023-2024",
      instituicao: "Universidade Federal de Pernambuco",
      curso: "Bolsista do Programa de Bolsas de Incentivo à Criação Cultural",
      tipo: "audiovisual"

    },
    {
      ano: "2021",
      instituicao: "Espreita Filmes",
      curso: "Oficina de Assistência de Direção",
      tipo: "audiovisual"
    }
  ];

  return (
    <section className="px-[6vw] md:px-[8vw] py-6 md:py-10 bg-osso">
      <div className="max-w-6xl mx-auto">
        
        {/* Cabeçalho */}
        <div className="mb-12 md:mb-16">
          <span className="font-mono text-xs md:text-sm tracking-[0.15em] uppercase text-vinho mb-4 block font-medium">
            Além da Sala de Aula
          </span>
          <h2 className="font-serif font-normal text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-tight text-preto">
            Laboratórios, Bolsas &<i className="font-light italic text-[#C99A3E]"> Imersões</i>
          </h2>
        </div>

        {/* Lista */}
        <div className="flex flex-col border-t border-preto/15">
          {cursos.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 border-b border-preto/15 gap-4 hover:bg-osso2 transition-colors px-4 -mx-4 rounded-sm"
            >
              
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 w-full md:w-5/12">
                <span className="font-mono text-xs md:text-sm text-vinho font-bold">
                  {item.ano}
                </span>
                <span className="font-sans text-base md:text-lg text-preto/80 font-medium">
                  {item.instituicao}
                </span>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between w-full md:w-7/12 gap-4">
                <span className="font-sans text-base md:text-lg text-preto/60 italic">
                  {item.curso}
                </span>
                
                <span className={`font-mono text-[10px] uppercase tracking-widest px-3 py-1 border rounded-full w-fit ${
                  item.tipo === 'tech' 
                    ? 'border-[#C99A3E]/30 text-[#C99A3E]' 
                    : 'border-vinho/30 text-vinho'
                }`}>
                  {item.tipo}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}