export default function Trajetoria() {
    return (
<section className="py-24 md:py-32 px-[6vw] md:px-[8vw] border-y border-preto/15">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Coluna da Esquerda: Título (Ocupa 5 de 12 colunas no desktop) */}
        <div className="lg:col-span-5 lg:sticky lg:top-32">
            <span className="font-mono text-xs md:text-sm tracking-[0.15em] uppercase text-vinho mb-6 block font-medium">
                Como eu penso
            </span>
            <h2 className="font-serif font-normal text-3xl md:text-[clamp(36px,4vw,48px)] leading-[1.1] text-preto">
                <i className="italic font-light text-vinho">Eu gosto de conectar</i> o que não parece fazer sentido.
            </h2>
        </div>

        {/* Coluna da Direita: Textos (Ocupa 7 de 12 colunas no desktop) */}
        <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8 font-sans text-base md:text-lg text-preto/80 leading-[1.7]">
            <p>
                Cinema, comunicação, marketing e tecnologia. Minha trajetória profissional e acadêmica passa por diferentes áreas, e é justamente nesse <strong>cruzamento</strong> que encontro meu diferencial como uma <strong>profissional multidisciplinar</strong>. Construo pontes entre a criatividade e a execução estratégica, guiada pelo pensamento lógico.
            </p>
            
            <p>
                Minha formação em Cinema e Audiovisual me deu o domínio da linguagem estética e estrutura narrativa. A direção e a montagem me ensinaram a gerenciar projetos, orçamentos e equipes. Ao mesmo tempo, minha imersão atual em Análise e Desenvolvimento de Sistemas moldou um <strong>olhar ágil</strong> e focado em arquitetar soluções escaláveis para <strong>otimização de processos</strong>.
            </p>
            
            <p>
                No fim, meu trabalho nasce justamente dessas <strong>conexões</strong>. Entre imagem e lógica, criação e estratégia, sensibilidade e estrutura. É nesse espaço entre áreas que encontro novas maneiras de pensar, criar e <strong>fazer as coisas acontecerem.</strong>
            </p>
        </div>

    </div>
</section>
    );
}