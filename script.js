// Nastavenie pre jemný Parallax efekt na celej stránke
document.addEventListener('DOMContentLoaded', () => {
    // 1. Získanie hlavného kontajnera, na ktorý chceme aplikovať efekt
    const container = document.querySelector('.container');
    // Ak neexistuje kontajner, ukončíme funkciu
    if (!container) return; 

    // 2. Počúvanie udalosti pohybu myši na celom tele dokumentu
    document.addEventListener('mousemove', (e) => {
        // Získanie šírky a výšky okna
        const width = window.innerWidth;
        const height = window.innerHeight;

        // Vypočítanie polohy myši (e.clientX/Y) vzhľadom na stred (0.5)
        // Hodnoty budú od -0.5 do 0.5
        const offsetX = (e.clientX / width) - 0.5;
        const offsetY = (e.clientY / height) - 0.5;

        // Nastavenie maximálneho uhla náklonu (čím nižšie číslo, tým menší náklon)
        const maxRotate = 4; // Maximálny náklon v stupňoch

        // Vypočítanie náklonu (rotácie) kontajnera
        // Náklon X-ovej osi je riadený Y-ovou pozíciou myši a naopak.
        const rotateY = offsetX * maxRotate; 
        const rotateX = offsetY * -maxRotate; // Náklon X-ovej osi robíme opačne

        // Aplikovanie 3D transformácie na kontajner. 
        // Vďaka tomu, že už má links-section nastavenú perspektívu, 
        // celá stránka sa bude nakláňať ako jedna 3D scéna.
        container.style.transform = `
            perspective(1000px) 
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg)
        `;
    });
});