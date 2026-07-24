export default function Home() {
  const sprockets = Array(20).fill(0);

  return (
    <main className="relative z-10">

      {/* 1. HERO SECTION (Apresentação) */}
      <section className="min-h-[75vh] flex flex-col justify-center px-[8vw] py-16">
        <span className="font-mono text-xs tracking-widest uppercase text-vinho mb-4 block">
          Portfólio · 2026
        </span>

        <h1 className="font-serif font-medium text-5xl md:text-7xl lg:text-[104px] leading-none tracking-tight">
          Geovanna Melo<br />
          <i className="font-light italic text-vinho">editora de vídeo</i>
        </h1>

        <p className="font-mono text-sm text-preto/65 max-w-2xl mt-6 leading-relaxed">
          Editora de vídeo e realizadora audiovisual formada em Cinema e Audiovisual pela UFPE. Com uma base sólida em linguagem cinematográfica, crio vídeos dinâmicos focados em ritmo, cortes precisos e adaptação de linguagem para o ambiente digital e campanhas de marketing.
        </p>

        <div className="flex gap-3 mt-8 flex-wrap">
          {['edição de vídeo', 'realização audiovisual', 'marketing de conteúdo', 'direção'].map((role) => (
            <span key={role} className="font-mono text-[11px] border border-preto/15 px-3 py-1.5 text-preto hover:bg-osso2 transition-colors cursor-default">
              {role}
            </span>
          ))}
        </div>
      </section>

      {/* DIVISOR DE PELÍCULA (Sprockets) */}
      <div className="flex justify-between px-6 py-3.5 border-y border-preto/15 bg-osso">
        {sprockets.map((_, i) => (
          <span key={i} className="w-2 h-2 rounded-full bg-preto/20"></span>
        ))}
      </div>

      {/* 2. SEÇÃO DE DESTAQUES VISUAIS */}
      <section className="px-[8vw] py-16">
        <div className="flex justify-between items-end border-b border-preto/15 pb-5 mb-8 flex-wrap gap-4">
          <h2 className="font-serif font-medium text-3xl">
            Em destaque<br /><i className="font-light italic text-vinho">— seleção recente</i>
          </h2>
          <a href="/projetos" className="font-mono text-xs text-vinho uppercase tracking-widest hover:underline underline-offset-4">
            ver todos os projetos ↗
          </a>
        </div>

        {/* Grid com Cards Maiores e de Impacto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-preto/15 border border-preto/15">

          {/* Destaque 1: Marketing / Campanha */}
          <div className="bg-osso p-10 min-h-[320px] flex flex-col justify-between hover:bg-osso2 transition-colors">
            <div className="font-mono text-[11px] text-vinho flex justify-between uppercase">
              <span>Campanha</span><span>2026</span>
            </div>
            <div>
              <h3 className="font-serif font-medium text-4xl leading-tight mt-4">Miss Universe<br />Pernambuco</h3>
              <p className="font-mono text-[11px] text-preto/50 mt-6 uppercase tracking-widest">
                captação e edição — trajes, chegada, bastidores
              </p>
            </div>
          </div>

          {/* Destaque 2: Audiovisual / Autoral */}
          <div className="bg-osso2 p-10 min-h-[320px] flex flex-col justify-between border-t-2 border-vinho hover:bg-osso transition-colors">
            <div className="font-mono text-[11px] text-vinho flex justify-between uppercase">
              <span>Curta · 14'</span><span>2024–26</span>
            </div>
            <div>
              <h3 className="font-serif font-medium text-4xl leading-tight mt-4">
                Quando o<br /><i className="font-light italic text-vinho">Telefone Tocar</i>
              </h3>
              <p className="font-mono text-[11px] text-preto/50 mt-6 uppercase tracking-widest">
                direção, roteiro e produção — Lei Paulo Gustavo
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}