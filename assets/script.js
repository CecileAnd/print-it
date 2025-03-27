// Tableau contenant les données des slides : image et texte avec balises HTML
const slides = [
    {
        "image": "slide1.jpg", // Nom du fichier image pour la slide
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>" // Texte de la slide avec une partie stylisée
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// Variable pour garder la trace de l'index de la slide actuelle
let currentSlideIndex = 0;

// Sélection des éléments du DOM nécessaires
const bannerImg = document.querySelector('.banner-img'); // L'image principale de la bannière
const bannerText = document.querySelector('#banner p'); // Le texte associé à l'image
const dotsContainer = document.querySelector('.dots'); // Le conteneur des points indicateurs
const arrowLeft = document.querySelector('.arrow_left'); // La flèche pour aller à la slide précédente
const arrowRight = document.querySelector('.arrow_right'); // La flèche pour aller à la slide suivante

// Fonction pour créer les points indicateurs sous la bannière
function createDots() {
    for (let index = 0; index < slides.length; index++) {
        // Crée un élément <div> pour chaque point
        const dot = document.createElement('div');
        dot.classList.add('dot'); // Ajoute la classe CSS pour le style

        // Ajoute une classe spéciale pour le point sélectionné (initialement le premier point)
        if (index === 0) dot.classList.add('dot_selected');
        dotsContainer.appendChild(dot); // Ajoute le point au conteneur

        // Ajoute un gestionnaire d'événement pour permettre de cliquer sur un point
        dot.addEventListener('click', () => {
            goToSlide(index); // Change la slide lorsque l'utilisateur clique sur un point
        });
    }
}

// Fonction pour mettre à jour la slide affichée
function updateSlide(index) {
    const slide = slides[index]; // Récupère les données de la slide actuelle
    bannerImg.src = `./assets/images/slideshow/${slide.image}`; // Met à jour l'image de la bannière
    bannerText.innerHTML = slide.tagLine; // Met à jour le texte de la bannière

    // Met à jour les points pour refléter la slide sélectionnée
    const dots = document.querySelectorAll('.dot');
    for (let idx = 0; idx < dots.length; idx++) {
        dots[idx].classList.toggle('dot_selected', idx === index); // Active la classe pour le point correspondant
    }
}

// Fonction pour aller à une slide spécifique
function goToSlide(index) {
    currentSlideIndex = index; // Met à jour l'index actuel
    updateSlide(currentSlideIndex); // Met à jour la bannière
}

// Gestion de la navigation avec la flèche gauche (slide précédente)
arrowLeft.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length; // Retourne à la dernière slide si on est sur la première
    updateSlide(currentSlideIndex); // Met à jour la bannière
});

// Gestion de la navigation avec la flèche droite (slide suivante)
arrowRight.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length; // Retourne à la première slide si on est sur la dernière
    updateSlide(currentSlideIndex); // Met à jour la bannière
});

// Initialisation du slider
createDots(); // Crée les points indicateurs au chargement
updateSlide(currentSlideIndex); // Affiche la première slide par défaut
