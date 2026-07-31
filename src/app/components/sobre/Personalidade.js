export default function Personalidade() {
    const referencias = [
        { num: '01', nome: 'Cinema Italiano & New Hollywood', detalhe: 'minha kryptonita' },
        { num: '02', nome: 'Rock clássico & 70s', detalhe: 'trilha sonora' },
        { num: '03', nome: 'Cinemas de rua', detalhe: 'templos' },
        { num: '04', nome: 'Fun facts', detalhe: 'indispensável' }
    ];

    return (
        <section className="px-[6vw] md:px-[8vw] pb-20">
            <div className="border-t border-preto/15 pt-16">
                <span className="font-mono text-sm tracking-[0.2em] uppercase text-vinho block mb-8 font-medium">Fora da timeline</span>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-preto/15 border border-preto/15">

                    <div className="bg-[#241D18] p-12 min-h-[350px] flex flex-col items-center justify-center relative overflow-hidden group">
                        <h2 className="font-serif font-normal text-3xl md:text-4xl text-osso mb-10 text-center z-20">
                            Cinefilia, <i className="font-light italic text-[#C84A31]">rock clássico</i>, anos 70.
                        </h2>
                        <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-[#16120F] border border-[#3A332E] shadow-2xl flex items-center justify-center relative z-20">
                            <div className="absolute inset-[10px] rounded-full border border-[#2A231E]/40"></div>
                            <div className="absolute inset-[20px] rounded-full border border-[#2A231E]/50"></div>
                            <div className="absolute inset-[30px] rounded-full border border-[#2A231E]/40"></div>
                            <div className="absolute inset-[40px] rounded-full border border-[#2A231E]/60"></div>
                            <div className="w-20 h-20 bg-[#C84A31] rounded-full z-10 flex flex-col items-center justify-center relative shadow-inner group-hover:scale-110 transition-transform duration-500">
                                <span className="font-mono text-[9px] font-bold tracking-widest text-[#FAF4E6] leading-[1.2] text-center mt-1">GEOVANNA<br />MELO</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-osso p-8 md:p-12 flex flex-col justify-center">
                        <h3 className="font-serif font-normal text-3xl md:text-4xl text-[#C84A31] lowercase mb-2">referências</h3>
                        <p className="font-mono text-xs md:text-sm text-preto/60 uppercase tracking-widest mb-10">o que eu amo</p>
                        <ul className="flex flex-col gap-6">
                            {referencias.map((ref, idx) => (
                                <li key={idx} className="flex justify-between items-baseline border-b border-preto/10 pb-3 border-dashed group/item">
                                    <div className="flex gap-4 items-baseline">
                                        <span className="font-mono text-sm text-[#C99A3E] font-medium">{ref.num}</span>
                                        <span className="font-serif italic text-2xl text-preto group-hover/item:text-[#C84A31] transition-colors">{ref.nome}</span>
                                    </div>
                                    <span className="font-mono text-xs md:text-sm text-preto/50 uppercase tracking-wider text-right ml-4">{ref.detalhe}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}