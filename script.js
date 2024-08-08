let currentSlide = 0;
let errors = 0;
const totalSlides = 40;

function createSlides() {
    const slidesContainer = document.getElementById('slides');
    for (let i = 0; i < totalSlides; i++) {
        const slide = document.createElement('div');
        slide.classList.add('slide');
        if (i === 0) slide.classList.add('active');
        slide.innerHTML = `
                    <h2>Question ${i + 1}</h2>
                    <div class="options">
                        <div class="option" onclick="toggleOption(this)" data-value="a">Réponse A</div>
                        <div class="option" onclick="toggleOption(this)" data-value="b">Réponse B</div>
                        <div class="option" onclick="toggleOption(this)" data-value="c">Réponse C</div>
                        <div class="option" onclick="toggleOption(this)" data-value="d">Réponse D</div>
                    </div>
                `;
        slidesContainer.appendChild(slide);
    }
}

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === n) {
            slide.classList.add('active');
        }
    });
}

function toggleOption(element) {
    element.classList.toggle('checked');
}

function getSelectedOptions() {
    const slides = document.querySelectorAll('.slide');
    const options = slides[currentSlide].querySelectorAll('.option.checked');
    return Array.from(options).map(option => option.getAttribute('data-value'));
}

function markAnswer(isCorrect) {
    if (!isCorrect) {
        errors++;
        document.getElementById('errorCountDisplay').innerText = errors;
    }
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }
}

createSlides();