import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative z-10 flex flex-col min-h-screen">

      {/* Estilo embutido para a animação do letreiro contínuo */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 26s linear infinite;
        }
      `}} />

      {/* 1. HERO SECTION */}
      <section className="min-h-[75vh] flex flex-col justify-center px-[8vw] py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-12 md:gap-20 items-center">

          {/* Coluna da Esquerda: Texto e Botões */}
          <div>
            <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-vinho mb-6 block">
              Bem-vinda(o) ao meu portfólio
            </span>

            <h1 className="font-serif font-normal text-[clamp(36px,5vw,64px)] leading-[1.1] tracking-tight text-preto">
              Oi! Sou Geovanna Melo,<br />
              <i className="font-light italic text-vinho">realizadora audiovisual</i> &<br />
              editora de vídeo.
            </h1>

            <p className="font-sans text-base text-preto/70 mt-6 max-w-lg leading-relaxed">
              Corto, roteirizo e dou ritmo a quem precisa ser ouvido. Trabalho transformando material bruto em <span className="text-[#C84A31] font-medium">narrativas magnéticas</span> para o cinema autoral e campanhas digitais.
            </p>

            <div className="flex flex-wrap items-center gap-6 mt-10">
              <Link
                href="/projetos"
                className="font-mono text-[11px] tracking-[0.1em] uppercase bg-[#C84A31] text-osso px-7 py-3.5 hover:bg-preto transition-colors shadow-sm"
              >
                Ver meus projetos
              </Link>
              <a
                href="/curriculo.pdf"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[11px] tracking-[0.1em] uppercase text-preto border-b border-preto/30 pb-1 hover:border-[#C84A31] hover:text-[#C84A31] transition-colors flex items-center gap-2 group"
              >
                Baixar Currículo
                <span className="group-hover:translate-y-1 transition-transform">↓</span>
              </a>
            </div>
          </div>

          {/* Coluna da Direita: A Foto */}
          <div className="w-full max-w-[320px] mx-auto md:mx-0 aspect-[4/5] bg-osso2 border border-preto/15 relative flex items-center justify-center group overflow-hidden shadow-sm">
            <span className="font-mono text-[10px] text-preto/40 uppercase tracking-widest text-center px-4">
              [ sua foto<br />de perfil ]
            </span>

            <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-vinho z-10"></div>
            <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-vinho z-10"></div>
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-vinho z-10"></div>
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-vinho z-10"></div>
          </div>

        </div>
      </section>

      {/* 2. PROOF STRIP (Letreiro Animado) */}
      <div className="border-y border-preto/15 bg-preto py-[22px] relative overflow-hidden flex items-center mt-auto">
        <span className="absolute left-[8vw] z-10 font-mono text-[10px] tracking-[0.12em] uppercase text-[#D98878] bg-preto pr-4 py-1">
          já editei conteúdo para —
        </span>
        <div className="animate-scroll pl-[280px]">
          {["FALCOR TRAVELS", "CAP ASSESSORIA", "SECRETARIA DE EDUCAÇÃO DO RECIFE", "MISS UNIVERSE PE", "SECRETARIADO DO BRASIL", "PLENO TREINAMENTOS", "VIAJAR PARA ITÁLIA", "FALCOR TRAVELS", "CAP ASSESSORIA", "SECRETARIA DE EDUCAÇÃO DO RECIFE", "MISS UNIVERSE PE", "SECRETARIADO DO BRASIL", "PLENO TREINAMENTOS"].map((cliente, i) => (
            <span key={i} className="font-mono text-[13px] text-osso border-r border-osso/20 px-7 whitespace-nowrap">
              {cliente}
            </span>
          ))}
        </div>
      </div>

      {/* 3. TRABALHOS RECENTES */}
      <section className="py-[70px] px-[8vw]">

        <div className="flex justify-between items-end mb-9 flex-wrap gap-3">
          <h2 className="font-serif font-normal text-[28px]">
            Trabalhos <i className="font-light italic text-vinho">recentes</i>
          </h2>
          <Link href="/projetos" className="font-mono text-[11px] text-vinho border-b border-vinho pb-[2px] hover:text-[#C84A31] hover:border-[#C84A31] transition-colors">
            ver todos os projetos →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-preto/15 border border-preto/15">

          <Link href="/projetos" className="bg-osso p-8 min-h-[340px] flex flex-col justify-between hover:bg-osso2 transition-colors group cursor-pointer">
            <div>
              <div className="aspect-[2/3] w-full max-w-[150px] bg-osso2 border border-preto/15 mb-5 flex items-center justify-center group-hover:border-vinho/50 transition-colors">
                <span className="font-mono text-[10px] text-preto/30 uppercase">pôster</span>
              </div>
              <div className="font-mono text-[10px] text-[#C84A31] tracking-widest uppercase">CAMPANHA · 2026</div>
              <div className="font-serif font-medium text-[25px] mt-2.5 leading-[1.15] group-hover:text-[#C84A31] transition-colors">Miss Universe <i className="font-light italic text-vinho">PE</i></div>
            </div>
            <div className="font-mono text-[10px] text-preto/50 uppercase mt-4 tracking-wider">captação e edição</div>
          </Link>

          <Link href="/projetos" className="bg-osso p-8 min-h-[340px] flex flex-col justify-between hover:bg-osso2 transition-colors group cursor-pointer">
            <div>
              <div className="aspect-[2/3] w-full max-w-[150px] bg-osso2 border border-preto/15 mb-5 flex items-center justify-center group-hover:border-vinho/50 transition-colors">
                <span className="font-mono text-[10px] text-preto/30 uppercase text-center leading-tight">pôster<br />/ frame</span>
              </div>
              <div className="font-mono text-[10px] text-[#C84A31] tracking-widest uppercase">CURTA · 14' · 2024–26</div>
              <div className="font-serif font-medium text-[25px] mt-2.5 leading-[1.15] group-hover:text-[#C84A31] transition-colors">Quando o <i className="font-light italic text-vinho">Telefone Tocar</i></div>
            </div>
            <div className="font-mono text-[10px] text-preto/50 uppercase mt-4 tracking-wider">direção, roteiro e produção</div>
          </Link>

          <Link href="/projetos" className="bg-osso p-8 min-h-[340px] flex flex-col justify-between hover:bg-osso2 transition-colors group cursor-pointer">
            <div>
              <div className="aspect-[2/3] w-full max-w-[150px] bg-osso2 border border-preto/15 mb-5 flex items-center justify-center group-hover:border-vinho/50 transition-colors">
                <span className="font-mono text-[10px] text-preto/30 uppercase">pôster</span>
              </div>
              <div className="font-mono text-[10px] text-[#C84A31] tracking-widest uppercase">INSTITUCIONAL · 2025</div>
              <div className="font-serif font-medium text-[25px] mt-2.5 leading-[1.15] group-hover:text-[#C84A31] transition-colors">Intercâmbio <i className="font-light italic text-vinho">Malta & Itália</i></div>
            </div>
            <div className="font-mono text-[10px] text-preto/50 uppercase mt-4 tracking-wider">roteiro, edição e playlists</div>
          </Link>

        </div>
      </section>

      {/* 4. ABOUT LINE */}
      <section className="py-[100px] px-[8vw] border-t border-preto/15 text-center">
        <p className="font-serif italic font-normal text-[clamp(22px,3vw,32px)] leading-[1.5] max-w-[720px] mx-auto mb-8 text-preto/90">
          Formada pela UFPE, também em formação em Análise e Desenvolvimento de Sistemas — edito pra quem precisa de resultado rápido, e dirijo pra quem precisa de silêncio e <i className="font-light text-[#C84A31]">tempo</i>.
        </p>
        <Link href="/sobre" className="font-mono text-[11px] text-[#C84A31] border-b border-[#C84A31] pb-[2px] hover:opacity-70 transition-opacity">
          conhecer mais →
        </Link>
      </section>

      {/* 5. CTA FINAL (Fundo vermelho com texto todo em Marfim) */}
      <section className="py-[100px] px-[8vw] text-center bg-[#C84A31] text-[#FAF4E6]">
        <div className="flex justify-center items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#FAF4E6] animate-pulse"></span>
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#FAF4E6]">
            Status: Disponível
          </span>
        </div>
        <h2 className="font-serif font-normal text-[clamp(32px,5vw,52px)]">
          Vamos conversar sobre o seu <i className="font-light italic text-[#FAF4E6]">próximo projeto.</i>
        </h2>
        <Link
          href="/contato"
          className="inline-block mt-10 font-mono text-[11px] tracking-[0.1em] uppercase border border-[#FAF4E6] text-[#FAF4E6] px-8 py-3.5 hover:bg-[#FAF4E6] hover:text-[#C84A31] transition-colors shadow-sm"
        >
          Entrar em Contato
        </Link>
      </section>

    </main>
  );
}