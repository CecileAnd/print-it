const slides = [
    { image: "slide1.jpg", tagLine: "Impressions tous formats <span>en boutique et en ligne</span>" },
    { image: "slide2.jpg", tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>" },
    { image: "slide3.jpg", tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>" },
    { image: "slide4.png", tagLine: "Autocollants <span>avec découpe laser sur mesure</span>" }
];

let currentSlideIndex = 0;

// Sélection des éléments DOM
const bannerImg = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');
const dotsContainer = document.querySelector('.dots');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

// Initialisation des points
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.className = `dot${index === 0 ? ' dot_selected' : ''}`;
    dotsContainer.appendChild(dot);

    dot.addEventListener('click', () => updateSlide(index));
});

// Mise à jour de la slide
function updateSlide(index) {
    currentSlideIndex = index;
    const { image, tagLine } = slides[index];
    bannerImg.src = `./assets/images/slideshow/${image}`;
    bannerText.innerHTML = tagLine;

    // Affiche un message à chaque mise à jour de la slide
    console.log(`Slide actuelle : ${index + 1}, Image : ${image}`);

    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('dot_selected', i === index);
    });
}

// Gestion des flèches
arrowLeft.addEventListener('click', () => {
    const newIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateSlide(newIndex);
});

arrowRight.addEventListener('click', () => {
    const newIndex = (currentSlideIndex + 1) % slides.length;
    updateSlide(newIndex);
});

// Initialisation
updateSlide(0);
