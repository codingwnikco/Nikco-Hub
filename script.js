
document.addEventListener('DOMContentLoaded', () => {
    
    const container = document.querySelector('.container');
    
    if (!container) return; 

   
    document.addEventListener('mousemove', (e) => {
       
        const width = window.innerWidth;
        const height = window.innerHeight;

        
        const offsetX = (e.clientX / width) - 0.5;
        const offsetY = (e.clientY / height) - 0.5;

        
        const maxRotate = 4; 

       
        const rotateY = offsetX * maxRotate; 
        const rotateX = offsetY * -maxRotate; 

        
        container.style.transform = `
            perspective(1000px) 
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg)
        `;
    });
});