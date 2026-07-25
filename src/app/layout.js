import "./globals.css";

export const metadata = {
  title: "Geovanna Melo | Editora de Vídeo",
  description: "Portfólio de Geovanna Melo, realizadora audiovisual e editora de vídeo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased flex flex-col min-h-screen">

        {/* MENU SUPERIOR (NAV) */}
        <nav className="flex justify-between items-center py-6 px-[8vw] border-b border-preto/15">
          <div className="font-serif italic text-xl">
            geovanna <span className="text-vinho">melo</span>
          </div>
          <div className="hidden md:flex gap-7 font-mono text-[11px] tracking-[0.05em] uppercase">
            {/* Nova ordem do menu aplicada aqui */}
            <a href="/" className="text-preto/55 hover:text-vinho transition-colors">home</a>
            <a href="/projetos" className="text-preto/55 hover:text-vinho transition-colors">projetos</a>
            <a href="/sobre" className="text-preto/55 hover:text-vinho transition-colors">sobre</a>
            <a href="/contato" className="text-preto/55 hover:text-vinho transition-colors">contato</a>
          </div>
        </nav>

        {/* CONTEÚDO DAS PÁGINAS */}
        <div className="flex-grow">
          {children}
        </div>

        {/* RODAPÉ (FOOTER) */}
        <footer className="py-8 px-[8vw] border-t border-preto/15 flex justify-between items-center font-mono text-[11px] text-preto/50 tracking-widest uppercase mt-auto">
          <span>© 2026 Geovanna Melo</span>
          <span>Editora de Vídeo & Realizadora</span>
        </footer>

      </body>
    </html>
  );
}