import {useState, useEffect } from 'react';

export function useTheme() {
    const [theme, setTheme] = useState(() => {
        // Verificando se há preferência de Tema, se não tiver aplica o dark
        return localStorage.getItem('theme') || 'dark';
    });

    useEffect(() => {
        // Aplica o tema na tag <html> para  CSS Variables atuar
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return {theme, toggleTheme}
}