export default function Projetos() {
    return (
        <main className="min-h-screen px-[8vw] py-16 relative z-10">

            {/* Cabeçalho da Página */}
            <div className="mb-16">
                <span className="font-mono text-xs tracking-widest uppercase text-vinho mb-4 block">
                    Arquivo · 2019–2026
                </span>
                <h1 className="font-serif font-medium text-5xl md:text-6xl tracking-tight">
                    Projetos <i className="font-light italic text-vinho">selecionados</i>
                </h1>
                <p className="font-mono text-sm text-preto/60 max-w-xl mt-4 leading-relaxed">
                    Uma amostra do meu trabalho transitando entre a criação de narrativas visuais e o desenvolvimento de soluções tecnológicas.
                </p>
            </div>

            {/* SEÇÃO 1: AUDIOVISUAL & DIREÇÃO */}
            <section className="mb-16">
                <div className="flex justify-between items-end border-b border-preto/15 pb-5 mb-6 flex-wrap gap-4">
                    <h2 className="font-serif font-medium text-3xl">
                        Trabalho Autoral<br /><i className="font-light italic text-vinho">— direção & roteiro</i>
                    </h2>
                </div>

                {/* Grid de Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-preto/15 border border-preto/15">

                    <div className="bg-osso p-7 min-h-[190px] flex flex-col justify-between hover:bg-osso2 transition-colors">
                        <div className="font-mono text-[10px] text-ambar flex justify-between uppercase">
                            <span>Curta · 14'</span><span>2024–26</span>
                        </div>
                        <h3 className="font-serif font-medium text-[22px] leading-tight mt-4">
                            Quando o<br />Telefone Tocar
                        </h3>
                        <p className="font-mono text-[10px] text-preto/50 mt-4 uppercase">direção, roteiro e produção — Olinda</p>
                    </div>

                    <div className="bg-osso p-7 min-h-[190px] flex flex-col justify-between hover:bg-osso2 transition-colors">
                        <div className="font-mono text-[10px] text-ambar flex justify-between uppercase">
                            <span>Minidoc · 4'</span><span>2024</span>
                        </div>
                        <h3 className="font-serif font-medium text-[22px] leading-tight mt-4">Beijos e Confidências</h3>
                        <p className="font-mono text-[10px] text-preto/50 mt-4 uppercase">direção · pesquisa autoral</p>
                    </div>

                    <div className="bg-osso p-7 min-h-[190px] flex flex-col justify-between hover:bg-osso2 transition-colors">
                        <div className="font-mono text-[10px] text-ambar flex justify-between uppercase">
                            <span>Curta · 12'</span><span>2019–21</span>
                        </div>
                        <h3 className="font-serif font-medium text-[22px] leading-tight mt-4">Insônia</h3>
                        <p className="font-mono text-[10px] text-preto/50 mt-4 uppercase">direção e assistência de montagem</p>
                    </div>

                </div>
            </section>

            {/* SEÇÃO 2: TECNOLOGIA & DADOS */}
            <section className="mb-16">
                <div className="flex justify-between items-end border-b border-preto/15 pb-5 mb-6 flex-wrap gap-4">
                    <h2 className="font-serif font-medium text-3xl">
                        Tecnologia<br /><i className="font-light italic text-vinho">— software & dados</i>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-preto/15 border border-preto/15">

                    <div className="bg-osso2 p-7 min-h-[190px] flex flex-col justify-between border-t-2 border-vinho">
                        <div className="font-mono text-[10px] text-vinho flex justify-between uppercase">
                            <span>Automação de Vídeo</span><span>2025</span>
                        </div>
                        <h3 className="font-serif font-medium text-[22px] leading-tight mt-4">Sistema ProntoPlay</h3>
                        <p className="font-mono text-[10px] text-preto/60 mt-4">
                            Desenvolvimento em Python com MoviePy, OpenCV e FFmpeg para processamento automatizado de material de repórteres.
                        </p>
                    </div>

                    <div className="bg-osso2 p-7 min-h-[190px] flex flex-col justify-between border-t-2 border-vinho">
                        <div className="font-mono text-[10px] text-vinho flex justify-between uppercase">
                            <span>Engenharia de Dados</span><span>2025</span>
                        </div>
                        <h3 className="font-serif font-medium text-[22px] leading-tight mt-4">Pipeline de Streaming</h3>
                        <p className="font-mono text-[10px] text-preto/60 mt-4">
                            Arquitetura de dados acadêmica utilizando Kafka para mensageria, Spark SQL e bancos NoSQL.
                        </p>
                    </div>

                </div>
            </section>

            {/* SEÇÃO 3: MODO APLICADO */}
            <section>
                <div className="flex justify-between items-end border-b border-preto/15 pb-5 mb-6 flex-wrap gap-4">
                    <h2 className="font-serif font-medium text-3xl">
                        Modo Aplicado<br /><i className="font-light italic text-vinho">— marketing & conteúdo</i>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-preto/15 border border-preto/15">

                    <div className="bg-osso p-7 min-h-[190px] flex flex-col justify-between hover:bg-osso2 transition-colors">
                        <div className="font-mono text-[10px] text-ambar flex justify-between uppercase">
                            <span>Campanha</span><span>2026</span>
                        </div>
                        <h3 className="font-serif font-medium text-[22px] leading-tight mt-4">Miss Universe PE</h3>
                        <p className="font-mono text-[10px] text-preto/50 mt-4 uppercase">captação e edição — bastidores</p>
                    </div>

                    <div className="bg-osso p-7 min-h-[190px] flex flex-col justify-between hover:bg-osso2 transition-colors">
                        <div className="font-mono text-[10px] text-ambar flex justify-between uppercase">
                            <span>Institucional</span><span>2025</span>
                        </div>
                        <h3 className="font-serif font-medium text-[22px] leading-tight mt-4">Intercâmbio para Malta</h3>
                        <p className="font-mono text-[10px] text-preto/50 mt-4 uppercase">roteiro, identidade visual e edição</p>
                    </div>

                </div>
            </section>

        </main>
    );
}
