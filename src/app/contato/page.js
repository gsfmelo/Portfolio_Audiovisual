// src/app/contato/page.js
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
    <main className="min-h-screen px-[6vw] md:px-[8vw] py-16 md:py-24 relative z-10 flex flex-col bg-osso">
      {/* Efeito de ruído global */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.04] mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')]"></div>

      <FadeIn>
        {/* Removido o mt-10/mt-16 — a section já tem py-16/py-24, os dois somados criavam o vão gigante no topo */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">

          {/* LADO ESQUERDO: TEXTOS */}
          <div>
            <span className="font-mono text-sm tracking-[0.15em] uppercase text-vinho mb-4 block font-medium">Contato</span>
            <h1 className="font-serif font-normal text-[clamp(40px,5vw,64px)] leading-[1.05] tracking-tight mb-6 text-preto">
              Sua vez de assumir o <i className="font-light italic text-vinho">roteiro.</i>
            </h1>
            <p className="font-sans text-base md:text-lg text-preto/80 leading-relaxed mb-12 max-w-lg">
              Preencha os campos ao lado para iniciarmos nosso próximo projeto ou me chame pelos canais diretos abaixo.
            </p>

            {/* ÁREA DE CONTATO DIRETO REFINADA E COESA */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 pt-8 border-t border-preto/15 items-start">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-preto/50 block mb-2 font-bold">E-mail</span>
                {/* EMAIL REDUZIDO E INTEGRADO */}
                <a href="mailto:gsfmelo@gmail.com" className="font-serif text-2xl md:text-3xl hover:text-vinho transition-colors text-preto font-medium">
                  gsfmelo@gmail.com
                </a>
              </div>
              <div>
                {/* Removido o mt-4 solto — era o que desalinhava esse label em relação ao "E-mail" */}
                <span className="font-mono text-xs uppercase tracking-widest text-preto/50 block mb-2 font-bold">Redes e Conexões</span>
                {/* BOTÕES SOCIAIS UNIFICADOS E COESOS */}
                <div className="flex flex-wrap gap-3 mt-1">
                  {['LinkedIn', 'Instagram', 'Vimeo'].map((rede) => {
                    const links = {
                      LinkedIn: 'https://www.linkedin.com/in/geovanna-melo/',
                      Instagram: 'https://instagram.com/stillfilmbuff',
                      Vimeo: 'https://vimeo.com/geovannamelo' // Ajuste o link se necessário
                    };
                    return (
                      <a 
                        key={rede}
                        href={links[rede]}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="border border-preto/20 text-preto px-4 py-1.5 font-mono text-xs uppercase tracking-widest hover:border-preto hover:text-vinho transition-colors font-medium bg-osso2/20"
                      >
                        {rede}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: O FORMULÁRIO ENXUTO E COESO */}
          {/* Trocado justify-center por justify-start e removido min-h-[480px] + lg:mt-4 —
              era isso que criava o respiro desproporcional em cima/embaixo e descolava
              o card da coluna de texto ao lado */}
          <div className="relative bg-white border border-preto/10 p-8 md:p-10 shadow-xl overflow-hidden flex flex-col justify-start">

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
              action="https://formspree.io/f/mnjerbvy" // Confirme se este endpoint é o correto
              method="POST"
              onSubmit={handleSubmit}
              className="relative z-10 flex flex-col gap-6"
            >
              {/* Decorativo de Roteiro */}
              <div className="font-mono text-xs text-preto/40 uppercase tracking-widest border-b border-preto/10 pb-3 mb-1 font-medium">
                INT. CAIXA DE ENTRADA - DIA
              </div>

              {/* Nome */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="nome" className="font-mono text-[10px] uppercase tracking-widest text-vinho font-bold">
                  Protagonista <span className="text-preto/50 font-normal">(Seu Nome ou Empresa)</span>
                </label>
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  required
                  disabled={status === 'loading'}
                  className="bg-transparent border-b border-preto/15 focus:border-vinho outline-none py-1.5 font-sans text-base text-preto placeholder:text-preto/20 disabled:opacity-50 transition-colors w-full"
                  placeholder="Como posso te chamar?"
                />
              </div>

              {/* E-mail */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-widest text-vinho font-bold">
                  Contato <span className="text-preto/50 font-normal">(Seu melhor e-mail)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  disabled={status === 'loading'}
                  className="bg-transparent border-b border-preto/15 focus:border-vinho outline-none py-1.5 font-sans text-base text-preto placeholder:text-preto/20 disabled:opacity-50 transition-colors w-full"
                  placeholder="exemplo@email.com"
                />
              </div>

              {/* Mensagem */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="mensagem" className="font-mono text-[10px] uppercase tracking-widest text-vinho font-bold">
                  Ação <span className="text-preto/50 font-normal">(Sua mensagem)</span>
                </label>
                <textarea
                  name="mensagem"
                  id="mensagem"
                  required
                  rows="3"
                  disabled={status === 'loading'}
                  className="bg-transparent border-b border-preto/15 focus:border-vinho outline-none py-1.5 font-sans text-base text-preto resize-none placeholder:text-preto/20 disabled:opacity-50 transition-colors w-full"
                  placeholder="Detalhe um pouco a sua ideia ou projeto..."
                ></textarea>
              </div>

              {/* Área de Erros e Botão */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-5 border-t border-preto/10 pt-5 mt-1">

                <div className="font-mono text-[10px] uppercase tracking-widest font-medium h-4">
                  {status === 'error' && <span className="text-vinho animate-pulse">✖ Erro. Tente o e-mail direto.</span>}
                  {status === 'offline' && <span className="text-amber-600">✖ Sem sinal de internet.</span>}
                </div>

                {/* BOTÃO DE ENVIO PADRONIZADO E COESO */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-osso text-preto border border-preto font-mono text-xs uppercase tracking-[0.1em] py-3.5 px-8 hover:bg-preto hover:text-osso transition-colors disabled:opacity-70 disabled:hover:bg-osso disabled:hover:text-preto font-medium"
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