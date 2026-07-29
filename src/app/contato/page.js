"use client";

import FadeIn from '../components/FadeIn';

export default function Contato() {
  return (
    <main className="min-h-screen px-[6vw] md:px-[8vw] py-16 md:py-24 relative z-10 flex flex-col justify-center">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start max-w-6xl mx-auto w-full">

        {/* LADO ESQUERDO: Textos e Informações */}
        <FadeIn>
          <div>
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-vinho mb-6 block font-medium">
              Contato · Disponibilidade
            </span>
            <h1 className="font-serif font-normal text-[clamp(40px,5vw,72px)] leading-[1.05] tracking-tight text-preto mb-8">
              Vamos criar a sua <i className="font-light italic text-vinho">próxima história?</i>
            </h1>
            <p className="font-sans text-lg md:text-xl text-preto/80 leading-relaxed mb-12 max-w-md">
              Seja para a montagem de um curta-metragem, estratégia para redes sociais ou colaborações no set. Me mande uma mensagem e vamos tomar um café virtual.
            </p>

            <div className="flex flex-col gap-6 font-mono text-xs tracking-widest uppercase text-preto/70">
              <a href="mailto:seuemail@gmail.com" className="hover:text-vinho transition-colors flex items-center gap-4">
                <span className="w-8 h-px bg-preto/20"></span> seuemail@gmail.com
              </a>
              <a href="https://linkedin.com/in/seulinkedin" target="_blank" rel="noopener noreferrer" className="hover:text-vinho transition-colors flex items-center gap-4">
                <span className="w-8 h-px bg-preto/20"></span> LinkedIn
              </a>
              <a href="https://instagram.com/seuinstagram" target="_blank" rel="noopener noreferrer" className="hover:text-vinho transition-colors flex items-center gap-4">
                <span className="w-8 h-px bg-preto/20"></span> Instagram
              </a>
            </div>
          </div>
        </FadeIn>

        {/* LADO DIREITO: O Formulário */}
        <FadeIn>
          <div className="bg-osso2/50 border border-preto/15 p-8 md:p-12">
            {/* 
              IMPORTANTE: Troque o link no "action" abaixo pelo link que o Formspree (formspree.io) ou Web3Forms vai te dar gratuitamente.
            */}
            <form
              action="https://formspree.io/f/mnjerbvy"
              method="POST"
              className="flex flex-col gap-8"
            >

              {/* Campo: Nome */}
              <div className="flex flex-col gap-2 relative group">
                <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-[0.15em] text-preto/60 group-focus-within:text-vinho transition-colors">
                  Qual o seu nome?
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="bg-transparent border-b border-preto/20 pb-3 pt-1 font-serif text-xl md:text-2xl text-preto focus:outline-none focus:border-vinho transition-colors w-full rounded-none placeholder:text-preto/20"
                  placeholder="Seu nome completo"
                />
              </div>

              {/* Campo: Email */}
              <div className="flex flex-col gap-2 relative group">
                <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-[0.15em] text-preto/60 group-focus-within:text-vinho transition-colors">
                  E o seu e-mail?
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="bg-transparent border-b border-preto/20 pb-3 pt-1 font-serif text-xl md:text-2xl text-preto focus:outline-none focus:border-vinho transition-colors w-full rounded-none placeholder:text-preto/20"
                  placeholder="exemplo@email.com"
                />
              </div>

              {/* Campo: Mensagem */}
              <div className="flex flex-col gap-2 relative group">
                <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-[0.15em] text-preto/60 group-focus-within:text-vinho transition-colors">
                  Como posso te ajudar?
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  className="bg-transparent border-b border-preto/20 pb-3 pt-1 font-serif text-xl md:text-2xl text-preto focus:outline-none focus:border-vinho transition-colors w-full resize-none rounded-none placeholder:text-preto/20"
                  placeholder="Conte um pouco sobre o projeto..."
                ></textarea>
              </div>

              {/* Botão de Envio (Estilo Banner) */}
              <button
                type="submit"
                className="mt-4 font-mono text-xs tracking-[0.15em] uppercase bg-[#C84A31] text-[#FAF4E6] border border-transparent hover:bg-transparent hover:border-[#C84A31] hover:text-[#C84A31] transition-all px-10 py-5 w-full text-center cursor-pointer"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </FadeIn>

      </div>
    </main>
  );
}