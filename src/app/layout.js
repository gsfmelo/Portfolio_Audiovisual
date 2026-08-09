// src/app/layout.js
import "./globals.css";
import Navbar from './components/Navbar';
import BackToTop from './components/BackToTop';

// BLOCO DE METADADOS E SEO (Agora vai funcionar perfeitamente!)
export const metadata = {
  title: {
    template: '%s | Geovanna Melo',
    default: 'Geovanna Melo — Realizadora Audiovisual e Editora de Vídeo',
  },
  description: 'Portfólio de Geovanna Melo. Realizadora audiovisual e editora de vídeo. Do cinema à criação de conteúdo para marcas.',
  openGraph: {
    title: 'Geovanna Melo — Realizadora Audiovisual e Editora de Vídeo',
    description: 'Do cinema à criação de conteúdo para marcas. Conheça a mostra completa de trabalhos e trajetória.',
    url: 'https://seusite.com.br', // Substitua pelo seu domínio quando publicar
    siteName: 'Portfólio Geovanna Melo',
    images: [
      {
        url: '/og-image.jpg',
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
    <html lang="pt-BR">
      <body className="antialiased flex flex-col min-h-screen relative">

        {/* MENU IMPORTADO (Client Component) */}
        <Navbar />

        {/* DIVISOR ESTILO PELÍCULA - TOPO */}
        <div
          className="w-full h-12 border-y border-preto/15"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(36, 29, 24, 0.12) 3px, transparent 3.5px)',
            backgroundSize: '64px 100%',
            backgroundPosition: 'center'
          }}
        ></div>

        {/* CONTEÚDO DAS PÁGINAS */}
        <div className="flex-grow">
          {children}
        </div>

        {/* DIVISOR ESTILO PELÍCULA - RODAPÉ */}
        <div
          className="w-full h-12 border-y border-preto/15 mt-16"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(36, 29, 24, 0.12) 3px, transparent 3.5px)',
            backgroundSize: '64px 100%',
            backgroundPosition: 'center'
          }}
        ></div>

        {/* RODAPÉ (FOOTER) */}
        <footer className="py-8 px-[6vw] md:px-[8vw] flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-[12px] text-preto/70 tracking-widest uppercase mt-auto bg-osso">
          <span>© 2026 Geovanna Melo</span>
          <span>Realizadora Audiovisual, Videomaker, Editora de Vídeo & Estrategista de Conteúdo</span>
        </footer>

        {/* BOTÃO VOLTAR AO TOPO FLUTUANTE */}
        <BackToTop />

      </body>
    </html>
  );
}