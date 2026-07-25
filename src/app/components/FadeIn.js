"use client"; // Isso avisa ao Next.js que este componente lida com o navegador (scroll da tela)

import { useEffect, useRef, useState } from 'react';

export default function FadeIn({ children }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Quando o elemento entra na tela, ativamos a visibilidade
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1, // Dispara quando 10% do elemento aparece
                rootMargin: "50px", // Começa a carregar um pouquinho antes de aparecer na tela
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-all duration-[1200ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
        >
            {children}
        </div>
    );
}