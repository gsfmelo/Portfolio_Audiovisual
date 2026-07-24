import './globals.css';

export const metadata = {
  title: 'Geovanna Melo | Portfólio',
  description: 'Realizadora audiovisual e desenvolvedora de sistemas',
};

export default function RootLayout({ children }) {
  // Criamos os "furos de película" (sprockets) iguais aos do seu HTML
  const sprockets = Array(20).fill(0);

  return (
    <html lang="pt-BR">
      <head>
        {/* Importando as suas fontes do Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,700;1,9..144,400&family=JetBrains+Mono:wght@400;500;700&family=Instrument+Sans:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased" style={{ fontFamily: "'Instrument Sans', sans-serif" }}>

        {/* MENU DE NAVEGAÇÃO */}
        <nav className="flex justify-between items-center px-[8vw] py-6 text-xs font-mono text-preto/60 uppercase tracking-widest">
          <a href="/" className="font-bold text-vinho hover:opacity-70 transition-opacity">Geo.Melo</a>
          <div className="flex gap-6 hidden sm:flex">
            <a href="/" className="hover:text-vinho transition-colors">Home</a>
            <a href="/projetos" className="hover:text-vinho transition-colors">Projetos</a>
            <a href="/sobre" className="hover:text-vinho transition-colors">Sobre</a>
            <a href="/contato" className="hover:text-vinho transition-colors">Contato</a>
          </div>
        </nav>

        {/* SPROCKETS (Furos da película) - Topo */}
        <div className="flex justify-between px-6 py-3.5 border-y border-preto/15">
          {sprockets.map((_, i) => (
            <span key={i} className="w-2 h-2 rounded-full bg-preto/20"></span>
          ))}
        </div>

        {/* Aqui é onde o conteúdo de cada página (como a page.js) vai aparecer */}
        {children}

        {/* SPROCKETS (Furos da película) - Base */}
        <div className="flex justify-between px-6 py-3.5 border-y border-preto/15">
          {sprockets.map((_, i) => (
            <span key={i} className="w-2 h-2 rounded-full bg-preto/20"></span>
          ))}
        </div>

        {/* RODAPÉ GERAL */}
        <footer className="px-[8vw] py-8 flex justify-between font-mono text-[11px] text-preto/50 uppercase tracking-wider">
          <span>portfólio — sistema claro</span>
          <span>osso · vinho · âmbar</span>
        </footer>

      </body>
    </html>
  );
}
