export default function MetodoTrabalho() {
  return (
    <section>
      {/* 2. O NOVO BANNER FOTO COM CITAÇÃO (TRANSITION SCENE) */}
        <div className="relative w-full h-[40vh] min-h-[500px] flex items-center justify-center mt-8 mb-12 md:mt-12 md:mb-16 overflow-hidden shadow-inner">
        {/* A Imagem de Fundo */}
        <img
          src="/trabalho1.jpg"
          alt="Geovanna Melo no set de gravação e edição"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Overlay Escuro */}
        <div className="absolute inset-0 bg-preto/90 mix-blend-multiply"></div>

        {/* O Texto da Citação */}
        <div className="relative z-10 px-[6vw] md:px-[8vw] text-center max-w-4xl flex flex-col items-center gap-6">
          <span className="w-12 h-[1px] bg-[#C99A3E]/70 block mb-2"></span>
          
          <h2 className="font-serif italic font-light text-[clamp(26px,4vw,44px)] leading-[1.3] text-osso">
            "Gosto de estar onde diferentes ideias se encontram. É dali que surgem as melhores formas de criar."
          </h2>
          
          <span className="w-12 h-[1px] bg-[#C99A3E]/70 block mt-2"></span>
        </div>
      </div>
      
    </section>
  );
}