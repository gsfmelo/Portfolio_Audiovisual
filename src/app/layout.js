// src/app/layout.js
import "./globals.css";
import Navbar from './components/Navbar';
import BackToTop from './components/BackToTop';

import { Libre_Caslon_Text, Instrument_Sans, JetBrains_Mono } from 'next/font/google';

// 1. CONFIGURANDO AS FONTES
const libreCaslon = Libre_Caslon_Text({ 
  subsets: ['latin'],
  weight: ['400'], 
  style: ['normal', 'italic'],
  variable: '--font-next-serif',
});

const instrument = Instrument_Sans({ 
  subsets: ['latin'],
  variable: '--font-next-sans',
});

const jetbrains = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-next-mono',
});

// 2. METADADOS E SEO
export const metadata = {
  title: {
    template: '%s | Geovanna Melo',
    default: 'Geovanna Melo — Realizadora Audiovisual e Editora de Vídeo',
  },
  description: 'Portfólio de Geovanna Melo. Realizadora audiovisual e editora de vídeo. Do cinema à criação de conteúdo para marcas.',
  openGraph: {
    title: 'Geovanna Melo — Realizadora Audiovisual e Editora de Vídeo',
    description: 'Do cinema à criação de conteúdo para marcas. Conheça a mostra completa de trabalhos e trajetória.',
    url: 'https://geovannamelo.vercel.app', 
    siteName: 'Portfólio Geovanna Melo',
    images: [
      {
        url: '/ogimage.png',
        width: 1200,
        height: 630,
        alt: 'Geovanna Melo Portfólio',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  }
};

export default function RootLayout({ children }) {
  return (
    // 3. O SEGREDO ESTÁ AQUI: Injetando as 3 variáveis na tag HTML
    <html lang="pt-BR" className={`${libreCaslon.variable} ${instrument.variable} ${jetbrains.variable}`}>
      
      <body className="antialiased flex flex-col min-h-screen relative font-sans bg-osso text-preto">

        <Navbar />

        <div
          className="w-full h-12 border-y border-preto/15"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(36, 29, 24, 0.12) 3px, transparent 3.5px)',
            backgroundSize: '64px 100%',
            backgroundPosition: 'center'
          }}
        ></div>

        <div className="flex-grow">
          {children}
        </div>

        <div
          className="w-full h-12 border-y border-preto/15 mt-16"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(36, 29, 24, 0.12) 3px, transparent 3.5px)',
            backgroundSize: '64px 100%',
            backgroundPosition: 'center'
          }}
        ></div>

        <footer className="py-8 px-[6vw] md:px-[8vw] flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-[12px] text-preto/70 tracking-widest uppercase mt-auto bg-osso">
          <span>© 2026 Geovanna Melo</span>
          <span>Realizadora Audiovisual, Videomaker, Editora de Vídeo & Estrategista de Conteúdo</span>
        </footer>

        <BackToTop />

      </body>
    </html>
  );
}