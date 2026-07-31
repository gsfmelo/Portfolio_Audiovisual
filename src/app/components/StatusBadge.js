export default function StatusBadge() {
    return (
        <div className="flex items-center gap-2.5 bg-osso2 border border-preto/10 px-3 py-1.5 rounded-full">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C84A31] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C84A31]"></span>
            </span>
            <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-preto/70">
                Disponível para freelas & projetos
            </span>
        </div>
    );
}