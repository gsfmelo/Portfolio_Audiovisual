"use client";

import { useState, useEffect } from 'react';

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Monitora o scroll da página para mostrar/esconder o botão
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Mantém a nossa rolagem suave cinematográfica!
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 bg-osso border border-preto/20 text-preto hover:bg-[#C84A31] hover:text-[#FAF4E6] hover:border-[#C84A31] font-mono text-[10px] tracking-widest uppercase px-3.5 py-3 shadow-md transition-all duration-300 flex items-center gap-2 group"
                    aria-label="Voltar ao topo"
                >
                    <span>topo</span>
                    <span className="group-hover:-translate-y-0.5 transition-transform">↑</span>
                </button>
            )}
        </>
    );
}