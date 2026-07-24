export default function Home() {
  return (
    <main className="min-h-[80vh] flex flex-col justify-center px-[8vw] py-16 relative overflow-hidden">

      {/* Efeito de Grão de Filme */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.045] mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')]"></div>

      <section className="relative z-10 max-w-4xl">
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
    </main>
  );
} 