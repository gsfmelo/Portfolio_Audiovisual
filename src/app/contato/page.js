"use client";

import { useState } from 'react';
import FadeIn from '../components/FadeIn';

export default function Contato() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!navigator.onLine) {
      setStatus('offline');
      return;
    }

    setStatus('loading');
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen px-[6vw] md:px-[8vw] py-16 md:py-24 relative z-10 flex flex-col justify-center bg-osso">
      {/* Efeito de ruído global */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.04] mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')]"></div>

      <FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-16 lg:gap-24 items-center">

          {/* LADO ESQUERDO: TEXTOS */}
          <div>
            <span className="font-mono text-sm tracking-[0.15em] uppercase text-vinho mb-4 block font-medium">Contato</span>
            <h1 className="font-serif font-normal text-[clamp(40px,5vw,64px)] leading-[1.1] tracking-tight mb-6 text-preto">
              Sua vez de assumir o <i className="font-light italic text-vinho">roteiro.</i>
            </h1>
            <p className="font-sans text-lg md:text-xl text-preto/80 leading-relaxed mb-10 max-w-md">
              Preencha os campos ao lado para iniciarmos nosso próximo projeto ou me chame pelos canais diretos abaixo.
            </p>

            <div className="space-y-6 pt-8 border-t border-preto/15">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-preto/50 block mb-2">E-mail</span>
                <a href="mailto:gsfmelo@gmail.com" className="font-serif text-3xl hover:text-vinho transition-colors text-preto">
                  gsfmelo@gmail.com
                </a>
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-preto/50 block mb-2 mt-4">Redes e Conexões</span>
                <div className="flex gap-6 font-mono text-xs md:text-sm uppercase tracking-widest">
                  <a href="#" className="text-preto hover:text-vinho underline decoration-preto/20 underline-offset-4">Instagram</a>
                  <a href="#" className="text-preto hover:text-vinho underline decoration-preto/20 underline-offset-4">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: O FORMULÁRIO HÍBRIDO */}
          <div className="relative bg-[#F9F8F6] border border-preto/20 p-8 md:p-12 shadow-2xl overflow-hidden min-h-[500px] flex flex-col justify-center">

            {/* ANIMAÇÃO DE SUCESSO (FADE TO BLACK) */}
            <div className={`absolute inset-0 z-50 bg-preto text-osso flex flex-col items-center justify-center p-8 transition-all duration-1000 ease-in-out ${status === 'success' ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
              <p className="font-serif italic text-3xl md:text-4xl mb-4 text-center">Fade To Black.</p>
              <p className="font-mono text-sm text-osso/70 text-center mb-10 uppercase tracking-widest leading-relaxed">
                A mensagem foi registrada.<br />Corte perfeito.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="font-mono text-xs uppercase tracking-[0.2em] border border-osso/30 hover:border-osso px-8 py-4 transition-colors"
              >
                Gravar Nova Cena
              </button>
            </div>

            {/* FORMULÁRIO TRADICIONAL + ESTÉTICA DE CINEMA */}
            <form
              action="https://formspree.io/f/mnjerbvy"
              method="POST"
              onSubmit={handleSubmit}
              className="relative z-10 flex flex-col gap-8"
            >
              {/* Decorativo de Roteiro */}
              <div className="font-mono text-xs text-preto/40 uppercase tracking-widest border-b border-preto/10 pb-3 mb-2 font-bold">
                INT. CAIXA DE ENTRADA - DIA
              </div>

              {/* Nome */}
              <div className="flex flex-col gap-2">
                <label htmlFor="nome" className="font-mono text-xs uppercase tracking-widest text-vinho font-bold">
                  Protagonista <span className="text-preto/50 font-normal">(Seu Nome ou Empresa)</span>
                </label>
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  required
                  disabled={status === 'loading'}
                  className="bg-transparent border-b border-preto/20 focus:border-vinho outline-none py-2 font-sans text-lg text-preto placeholder:text-preto/25 disabled:opacity-50 transition-colors w-full"
                  placeholder="Como posso te chamar?"
                />
              </div>

              {/* E-mail */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-vinho font-bold">
                  Contato <span className="text-preto/50 font-normal">(Seu melhor e-mail)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  disabled={status === 'loading'}
                  className="bg-transparent border-b border-preto/20 focus:border-vinho outline-none py-2 font-sans text-lg text-preto placeholder:text-preto/25 disabled:opacity-50 transition-colors w-full"
                  placeholder="exemplo@email.com"
                />
              </div>

              {/* Mensagem */}
              <div className="flex flex-col gap-2">
                <label htmlFor="mensagem" className="font-mono text-xs uppercase tracking-widest text-vinho font-bold">
                  Ação <span className="text-preto/50 font-normal">(Sua mensagem)</span>
                </label>
                <textarea
                  name="mensagem"
                  id="mensagem"
                  required
                  rows="4"
                  disabled={status === 'loading'}
                  className="bg-transparent border-b border-preto/20 focus:border-vinho outline-none py-2 font-sans text-lg text-preto resize-none placeholder:text-preto/25 disabled:opacity-50 transition-colors w-full"
                  placeholder="Detalhe um pouco a sua ideia ou projeto..."
                ></textarea>
              </div>

              {/* Área de Erros e Botão */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-preto/10 pt-6 mt-2">

                <div className="font-mono text-xs uppercase tracking-widest font-medium">
                  {status === 'error' && <span className="text-vinho animate-pulse">✖ Erro. Tente o e-mail direto.</span>}
                  {status === 'offline' && <span className="text-[#C99A3E]">✖ Sem sinal de internet.</span>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-preto text-osso font-mono text-xs uppercase tracking-[0.15em] py-4 px-10 hover:bg-vinho transition-colors disabled:opacity-70 w-full md:w-auto"
                >
                  {status === 'loading' ? 'GRAVANDO...' : 'ENVIAR ROTEIRO →'}
                </button>
              </div>
            </form>
          </div>

        </div>
      </FadeIn>
    </main>
  );
}