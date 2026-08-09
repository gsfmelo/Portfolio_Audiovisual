export default function Trajetoria() {
    return (
        <section className="px-[6vw] md:px-[8vw] pb-16">
            {/* Seção Como Eu Penso - Layout Centralizado e Compacto */}
<div className="py-16 md:py-20 border-t border-preto/10 px-[6vw] md:px-[8vw] flex flex-col items-center">
    
    <div className="max-w-[700px] w-full">
        {/* Tag (Agora em cima, agrupada com o título) */}
        <span className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-[#C84A31] mb-5 block">
            Como eu penso
        </span>
        
        {/* Título */}
        <h3 className="font-serif italic text-2xl md:text-3xl text-[#C84A31] mb-8 leading-[1.2]">
            Eu gosto de conectar o que não parecer fazer sentido.
        </h3>
        
        {/* Textos */}
        <div className="font-sans text-[15px] md:text-base text-preto/80 leading-[1.65] space-y-6">
            <p>
                Cinema, comunicação, marketing e tecnologia. Minha trajetória profissional e acadêmica passa por diferentes áreas, e é justamente nesse <strong>cruzamento </strong>que encontro meu diferencial como uma <strong>profissional multidisciplinar.</strong>
                Acredito que o audiovisual e a tecnologia compartilham a mesma essência: <strong>organizar o caos e estruturar a lógica para resolver um problema</strong>. Sou uma profissional multidisciplinar que constrói pontes entre a criatividade pura e a execução estratégica.
            </p>
            <p>
                Minha formação em Cinema me deu o domínio da linguagem estética e narrativa. A direção e a montagem me ensinaram a gerenciar equipes, orçamentos e o <i>timing</i> humano de uma história. Ao mesmo tempo, minha imersão atual em Análise e Desenvolvimento de Sistemas moldou um <strong>olhar analítico, ágil e focado em arquitetar soluções escaláveis</strong>. 
            </p>
            <p>
                Transitar por múltiplas áreas me permite enxergar o cenário macro. Seja orquestrando a retenção de uma campanha, dirigindo um curta-metragem autoral ou analisando a estrutura de um projeto, eu aplico a mesma regra: <strong>entender o sistema por trás da obra e otimizá-lo para o melhor resultado possível</strong>.
            </p>
        </div>
    </div>

</div>
        </section>
    );
}