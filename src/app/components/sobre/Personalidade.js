export default function Personalidade() {
    const referencias = [
        { num: '01', nome: 'Nova Hollywood', detalhe: '70s' },
        { num: '02', nome: 'Rock clássico & Disco', detalhe: 'trilha sonora' },
        { num: '03', nome: 'Era Código Hays', detalhe: 'cinema antigo' },
        { num: '04', nome: 'Café na exportação', detalhe: 'indispensável' }
    ];

    return (
        <section className="mt-20 md:mt-28 pt-12 border-t border-preto/15">
            <span className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-vinho block mb-6 font-medium">Fora da timeline</span>
            <div className="mb-10">
                <h2 className="font-serif font-normal text-[clamp(28px,4vw,40px)] text-preto">
                    Cinéfila, <i className="font-light italic text-[#C84A31]">rock clássico</i>, anos 70.
                </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-preto/15 border border-preto/15">
                <div className="bg-[#241D18] p-12 min-h-[300px] flex items-center justify-center relative overflow-hidden">
                    <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-full bg-[#16120F] border border-[#3A332E] shadow-2xl flex items-center justify-center relative">
                        <div className="absolute inset-[10px] rounded-full border border-[#2A231E]/40"></div>
                        <div className="absolute inset-[20px] rounded-full border border-[#2A231E]/50"></div>
                        <div className="absolute inset-[30px] rounded-full border border-[#2A231E]/40"></div>
                        <div className="absolute inset-[40px] rounded-full border border-[#2A231E]/60"></div>
                        <div className="absolute inset-[50px] rounded-full border border-[#2A231E]/40"></div>
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#C84A31] rounded-full z-10 flex flex-col items-center justify-center relative shadow-inner">
                            <span className="font-mono text-[8px] font-bold tracking-widest text-[#FAF4E6] leading-[1.2] text-center mt-1">GEOVANNA<br />MELO</span>
                            <div className="w-2 h-2 bg-[#241D18] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-sm"></div>
                        </div>
                    </div>
                </div>
                <div className="bg-osso2 p-8 sm:p-12 flex flex-col justify-center">
                    <h3 className="font-serif font-black text-3xl sm:text-4xl text-[#C84A31] lowercase tracking-tighter mb-1">referências</h3>
                    <p className="font-mono text-xs text-preto/60 uppercase tracking-widest mb-10">o que me formou</p>
                    <ul className="flex flex-col gap-6">
                        {referencias.map((ref, idx) => (
                            <li key={idx} className={`flex justify-between items-baseline ${idx !== referencias.length - 1 ? 'border-b border-preto/10 pb-3 border-dashed' : 'border-b border-transparent pb-2'} group`}>
                                <div className="flex gap-4 items-baseline">
                                    <span className="font-mono text-xs text-[#C99A3E] font-bold">{ref.num}</span>
                                    <span className="font-serif italic text-[20px] text-preto group-hover:text-[#C84A31] transition-colors">{ref.nome}</span>
                                </div>
                                <span className="font-mono text-xs text-preto/50 uppercase tracking-wider text-right ml-4">{ref.detalhe}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}