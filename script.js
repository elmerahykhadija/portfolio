// Attendre que la page HTML soit entièrement chargée
document.addEventListener('DOMContentLoaded', () => {
    
    // Sélectionner tous les liens de la navigation
    const links = document.querySelectorAll('.nav-links a');

    // Ajouter un défilement fluide pour chaque lien
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Décalage pour l'en-tête (header)
                    behavior: 'smooth'
                });
            }
        });
    });
});