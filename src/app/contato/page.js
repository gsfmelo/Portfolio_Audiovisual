import FadeIn from '../components/FadeIn';

export default function Contato() {
  return (
    <main className="min-h-[75vh] px-[8vw] py-20 relative z-10">
      <FadeIn>
        
        {/* PARTE SUPERIOR */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-24 items-end mb-16">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#C84A31] animate-pulse"></span>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-preto/50">
                Status: Disponível para novos projetos
              </span>
            </div>
            <h1 className="font-serif font-normal text-[clamp(40px,6vw,72px)] leading-[1.05] tracking-tight text-preto">
              Vamos conversar sobre o<br/>
              seu <i className="font-light italic text-[#C84A31]">próximo projeto.</i>
            </h1>
          </div>
          
          <div className="pb-4">
            <p className="font-sans text-lg text-preto/70 leading-relaxed max-w-md">
              Seja para a montagem de um curta-metragem autoral, edição dinâmica para o digital ou planejamento de conteúdo, entre em contato para discutirmos ideias e orçamentos.
            </p>
          </div>
        </div>

        {/* LINHA DIVISÓRIA */}
        <div className="w-full border-t border-preto/15 mb-16"></div>

        {/* PARTE INFERIOR: CONTATOS E LINKS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Coluna da Esquerda (E-mail e Telefone) */}
          <div className="space-y-12">
            <div>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-preto/40 block mb-4">
                / E-mail
              </span>
              <a 
                href="mailto:gsfmelo@gmail.com" 
                className="font-serif text-[clamp(28px,3vw,36px)] text-preto hover:text-[#C84A31] transition-colors"
              >
                gsfmelo@gmail.com
              </a>
            </div>

            <div>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-preto/40 block mb-4">
                / Telefone & Whatsapp
              </span>
              {/* Já configurei o link direto para o seu WhatsApp! */}
              <a 
                href="https://wa.me/5581983665444" 
                target="_blank"
                rel="noreferrer"
                className="font-serif text-[clamp(28px,3vw,36px)] text-preto hover:text-[#C84A31] transition-colors"
              >
                (81) 98366-5444
              </a>
            </div>
          </div>

          {/* Coluna da Direita (Presença Digital) */}
          <div className="md:ml-auto w-full md:w-2/3">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-preto/40 block mb-6 md:text-right">
              / Presença Digital
            </span>
            <ul className="flex flex-col">
              
              {/* Instagram */}
              <li className="border-b border-preto/10 group">
                <a href="#" className="flex justify-between items-center py-4 font-mono text-[11px] tracking-[0.1em] uppercase text-preto/70 group-hover:text-[#C84A31] transition-colors">
                  Instagram <span className="font-sans text-sm">↗</span>
                </a>
              </li>
              
              {/* Vimeo */}
              <li className="border-b border-preto/10 group">
                <a href="#" className="flex justify-between items-center py-4 font-mono text-[11px] tracking-[0.1em] uppercase text-preto/70 group-hover:text-[#C84A31] transition-colors">
                  Vimeo <span className="font-sans text-sm">↗</span>
                </a>
              </li>
              
              {/* Behance */}
              <li className="border-b border-preto/10 group">
                <a href="#" className="flex justify-between items-center py-4 font-mono text-[11px] tracking-[0.1em] uppercase text-preto/70 group-hover:text-[#C84A31] transition-colors">
                  Behance <span className="font-sans text-sm">↗</span>
                </a>
              </li>

              {/* Currículo substituindo o LinkedIn */}
              <li className="border-b border-preto/10 group">
                <a href="/curriculo.pdf" target="_blank" rel="noreferrer" className="flex justify-between items-center py-4 font-mono text-[11px] tracking-[0.1em] uppercase text-preto/70 group-hover:text-[#C99A3E] transition-colors">
                  Baixar Currículo <span className="font-sans text-sm">↓</span>
                </a>
              </li>
              
            </ul>
          </div>
          
        </div>

      </FadeIn>
    </main>
  );
}