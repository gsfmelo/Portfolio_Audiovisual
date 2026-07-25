export default function ServicosGrid() {
    return (
        <section className="mt-20 md:mt-28 pt-16 border-t border-preto/15">
            <span className="font-mono text-xs md:text-sm tracking-[0.15em] uppercase text-vinho block mb-8 font-medium">O que eu faço</span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="border border-preto/15 p-8 bg-osso">
                    <h3 className="font-serif italic font-normal text-[24px] mb-6 text-vinho">Narrativa</h3>
                    <ul className="space-y-3 font-mono text-xs uppercase text-preto/80 tracking-wider">
                        <li className="border-b border-preto/10 pb-3">Roteiro & Storytelling</li>
                        <li className="border-b border-preto/10 pb-3">Estrutura narrativa</li>
                        <li className="pb-2">Pesquisa e desenvolvimento</li>
                    </ul>
                </div>

                <div className="border border-preto/15 p-8 bg-osso">
                    <h3 className="font-serif italic font-normal text-[24px] mb-6 text-vinho">Pós-produção</h3>
                    <ul className="space-y-3 font-mono text-xs uppercase text-preto/80 tracking-wider">
                        <li className="border-b border-preto/10 pb-3">Edição & Montagem</li>
                        <li className="border-b border-preto/10 pb-3">Colorização básica</li>
                        <li className="pb-2">Motion & Finalização</li>
                    </ul>
                </div>

                <div className="border border-preto/15 p-8 bg-osso">
                    <h3 className="font-serif italic font-normal text-[24px] mb-6 text-vinho">Conteúdo & Direção</h3>
                    <ul className="space-y-3 font-mono text-xs uppercase text-preto/80 tracking-wider">
                        <li className="border-b border-preto/10 pb-3">Marketing & Linha Editorial</li>
                        <li className="border-b border-preto/10 pb-3">Direção de curtas & assistência</li>
                        <li className="pb-2">Produção e captação</li>
                    </ul>
                </div>

            </div>

            <div className="mt-8 font-mono text-xs text-preto/60 uppercase tracking-wider text-center">
                Ferramentas principais: Adobe Premiere, DaVinci Resolve, CapCut, After Effects, Canva e Figma.
            </div>
        </section>
    );
}