const allQuizQuestions = [
    {
        question: "Quelle est la plus grande planète du système solaire?",
        options: ["Terre", "Mars", "Jupiter", "Saturne"],
        answer: 2
    },
    {
        question: "Quelle planète est connue pour ses anneaux?",
        options: ["Mars", "Vénus", "Saturne", "Mercure"],
        answer: 2
    },
    {
        question: "Quelle planète est la plus proche du Soleil?",
        options: ["Vénus", "Terre", "Mercure", "Mars"],
        answer: 2
    },
    {
        question: "Quelle planète est appelée 'la planète rouge'?",
        options: ["Vénus", "Mars", "Jupiter", "Saturne"],
        answer: 1
    },
    {
        question: "Quelle planète a la température moyenne la plus élevée?",
        options: ["Mercure", "Vénus", "Terre", "Mars"],
        answer: 1
    },
    {
        question: "Combien de planètes y a-t-il dans notre système solaire?",
        options: ["7", "8", "9", "10"],
        answer: 1
    },
    {
        question: "Quelle planète tourne sur son côté?",
        options: ["Uranus", "Neptune", "Saturne", "Jupiter"],
        answer: 0
    },
    {
        question: "Quelle planète a les vents les plus violents?",
        options: ["Jupiter", "Saturne", "Uranus", "Neptune"],
        answer: 3
    },
    {
        question: "Quelle planète n'est pas une géante gazeuse?",
        options: ["Jupiter", "Saturne", "Uranus", "Mars"],
        answer: 3
    },
    {
        question: "Quelle planète a le plus grand nombre de lunes?",
        options: ["Terre", "Mars", "Saturne", "Jupiter"],
        answer: 3
    },
    {
        question: "Quelle planète a la plus longue journée (rotation)?",
        options: ["Vénus", "Mercure", "Mars", "Jupiter"],
        answer: 0
    },
    {
        question: "Quelle planète a la plus grande lune du système solaire?",
        options: ["Terre", "Jupiter", "Saturne", "Neptune"],
        answer: 1
    },
    {
        question: "Quelle planète a des tempêtes géantes persistantes?",
        options: ["Jupiter", "Mars", "Uranus", "Vénus"],
        answer: 0
    },
    {
        question: "Quelle planète a des saisons qui durent plus de 20 ans?",
        options: ["Uranus", "Neptune", "Saturne", "Jupiter"],
        answer: 0
    },
    {
        question: "Quelle planète a le plus grand système d'anneaux?",
        options: ["Jupiter", "Saturne", "Uranus", "Neptune"],
        answer: 1
    },
    {
        question: "Quelle planète a une atmosphère principalement composée de CO2?",
        options: ["Terre", "Mars", "Jupiter", "Saturne"],
        answer: 1
    },
    {
        question: "Quelle planète a la plus grande différence de température entre jour et nuit?",
        options: ["Mercure", "Vénus", "Mars", "Terre"],
        answer: 0
    },
    {
        question: "Quelle planète a une année la plus courte?",
        options: ["Mercure", "Vénus", "Terre", "Mars"],
        answer: 0
    },
    {
        question: "Quelle planète a une densité inférieure à celle de l'eau?",
        options: ["Jupiter", "Saturne", "Uranus", "Neptune"],
        answer: 1
    },
    {
        question: "Quelle planète a été visitée par le plus de missions spatiales?",
        options: ["Mars", "Vénus", "Jupiter", "Saturne"],
        answer: 0
    },
    {
        question: "Quelle est la plus grande lune de Saturne?",
        options: ["Titan", "Encelade", "Mimas", "Rhéa"],
        answer: 0
    },
    {
        question: "Quelle lune de Jupiter est la plus volcanique?",
        options: ["Europe", "Ganymède", "Io", "Callisto"],
        answer: 2
    },
    {
        question: "Quelle lune a un océan souterrain qui pourrait abriter la vie?",
        options: ["Europe", "Titan", "Phobos", "Charon"],
        answer: 0
    },
    {
        question: "Quelle lune de Mars est la plus grande?",
        options: ["Phobos", "Deimos", "Les deux sont de taille similaire", "Mars n'a pas de lune"],
        answer: 0
    },
    {
        question: "Quelle lune a une atmosphère plus dense que celle de la Terre?",
        options: ["Europe", "Titan", "Callisto", "Io"],
        answer: 1
    },
    {
        question: "Combien de lunes la Terre a-t-elle?",
        options: ["0", "1", "2", "4"],
        answer: 1
    },
    {
        question: "Quelle lune est la plus grande du système solaire?",
        options: ["Titan", "Ganymède", "Lune", "Europe"],
        answer: 1
    },
    {
        question: "Quelle lune a des geysers d'eau glacée?",
        options: ["Encelade", "Triton", "Europe", "Callisto"],
        answer: 0
    },
    {
        question: "Quelle lune orbite autour de Neptune?",
        options: ["Titan", "Triton", "Charon", "Phobos"],
        answer: 1
    },
    {
        question: "Quelle lune est en rotation synchrone avec la Terre?",
        options: ["Titan", "Europe", "La Lune", "Io"],
        answer: 2
    },
    {
        question: "Quelle est la plus grande structure du système solaire?",
        options: ["Le Soleil", "La ceinture d'astéroïdes", "La queue de la comète Hale-Bopp", "L'héliosphère"],
        answer: 3
    },
    {
        question: "Où se trouve la ceinture de Kuiper?",
        options: ["Entre Mars et Jupiter", "Au-delà de Neptune", "Près du Soleil", "Autour de Saturne"],
        answer: 1
    },
    {
        question: "Quelle est la composition principale du Soleil?",
        options: ["Hydrogène et Hélium", "Oxygène et Carbone", "Fer et Nickel", "Azote et Oxygène"],
        answer: 0
    },
    {
        question: "Quelle est la température approximative du noyau du Soleil?",
        options: ["1 million °C", "10 millions °C", "15 millions °C", "100 millions °C"],
        answer: 2
    },
    {
        question: "Combien de temps faut-il à la lumière du Soleil pour atteindre la Terre?",
        options: ["1 seconde", "8 minutes", "1 heure", "1 jour"],
        answer: 1
    },
    {
        question: "Quelle est la plus grande planète naine?",
        options: ["Cérès", "Pluton", "Eris", "Makémaké"],
        answer: 2
    },
    {
        question: "Quelle est la période orbitale de Pluton?",
        options: ["165 ans", "248 ans", "365 ans", "500 ans"],
        answer: 1
    },
    {
        question: "Quelle est la vitesse orbitale moyenne de la Terre autour du Soleil?",
        options: ["10 km/s", "30 km/s", "100 km/s", "300 km/s"],
        answer: 1
    },
    {
        question: "Quelle est la distance moyenne Terre-Soleil?",
        options: ["1 UA", "10 UA", "100 UA", "1000 UA"],
        answer: 0
    },
    {
        question: "Quelle est la durée d'une année sur Mars?",
        options: ["365 jours", "500 jours", "687 jours", "1000 jours"],
        answer: 2
    },
    {
        question: "Quand a eu lieu le premier atterrissage sur la Lune?",
        options: ["1959", "1969", "1979", "1989"],
        answer: 1
    },
    {
        question: "Quelle était la première sonde à quitter le système solaire?",
        options: ["Voyager 1", "Pioneer 10", "New Horizons", "Voyager 2"],
        answer: 0
    },
    {
        question: "Quelle sonde a exploré Pluton?",
        options: ["Voyager 1", "Cassini", "New Horizons", "Juno"],
        answer: 2
    },
    {
        question: "Quelle mission a atterri sur Mars en 2021?",
        options: ["Curiosity", "Opportunity", "Perseverance", "Spirit"],
        answer: 2
    },
    {
        question: "Quelle agence spatiale a lancé la mission Rosetta?",
        options: ["NASA", "ESA", "Roscosmos", "JAXA"],
        answer: 1
    },
    {
        question: "Quelle sonde a étudié Saturne et ses lunes?",
        options: ["Galileo", "Cassini", "Juno", "Voyager 2"],
        answer: 1
    },
    {
        question: "Quelle est la première station spatiale?",
        options: ["Mir", "Salyut 1", "ISS", "Skylab"],
        answer: 1
    },
    {
        question: "Quel pays a envoyé le premier homme dans l'espace?",
        options: ["USA", "URSS", "Chine", "France"],
        answer: 1
    },
    {
        question: "Quel télescope spatial a remplacé Hubble?",
        options: ["Spitzer", "James Webb", "Chandra", "Kepler"],
        answer: 1
    },
    {
        question: "Quelle mission a ramené des échantillons d'astéroïde?",
        options: ["OSIRIS-REx", "Hayabusa2", "Dawn", "Les deux premières"],
        answer: 3
    },
    {
        question: "Quelle est l'étoile la plus proche du Soleil?",
        options: ["Alpha Centauri", "Proxima Centauri", "Sirius", "Bételgeuse"],
        answer: 1
    },
    {
        question: "Quelle est la galaxie la plus proche de la Voie Lactée?",
        options: ["Andromède", "Galaxie du Triangle", "Grand Nuage de Magellan", "Galaxie naine du Sagittaire"],
        answer: 2
    },
    {
        question: "Qu'est-ce qu'un pulsar?",
        options: ["Un trou noir", "Une étoile à neutrons en rotation", "Une supernova", "Une naine blanche"],
        answer: 1
    },
    {
        question: "Quelle est la durée de vie typique d'une étoile comme le Soleil?",
        options: ["1 milliard d'années", "10 milliards d'années", "100 milliards d'années", "1 trillion d'années"],
        answer: 1
    },
    {
        question: "Qu'est-ce qui provoque les aurores polaires?",
        options: ["Rayons cosmiques", "Vent solaire", "Météorites", "Rayons gamma"],
        answer: 1
    },
    {
        question: "Quelle est la température du fond cosmique diffus?",
        options: ["0 K", "2.7 K", "100 K", "1000 K"],
        answer: 1
    },
    {
        question: "Quelle est la principale preuve de l'expansion de l'univers?",
        options: ["Décalage vers le rouge", "Rayonnement cosmique", "Supernovae", "Trous noirs"],
        answer: 0
    },
    {
        question: "Quelle est la composition principale d'une nébuleuse?",
        options: ["Gaz et poussière", "Roches et métaux", "Glace pure", "Plasma"],
        answer: 0
    },
    {
        question: "Qu'est-ce qu'une supernova de type Ia?",
        options: ["Explosion d'une étoile massive", "Explosion d'une naine blanche", "Collision d'étoiles", "Formation d'un trou noir"],
        answer: 1
    },
    {
        question: "Quelle est la taille approximative de la Voie Lactée?",
        options: ["10 000 années-lumière", "100 000 années-lumière", "1 million d'années-lumière", "10 millions d'années-lumière"],
        answer: 1
    }
];

let quizQuestions = [];
let currentQuestion = 0;
let score = 0;
let userAnswers = [];

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const currentQuestionElement = document.getElementById('current-question');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');
const resultDetails = document.getElementById('result-details');
const restartBtn = document.getElementById('restart-btn');
const progressBar = document.querySelector('.progress-bar');
const quizContainer = document.querySelector('.quiz-container');

function initQuiz() {
    quizQuestions = getRandomQuestions(10);
    currentQuestion = 0;
    score = 0;
    userAnswers = Array(quizQuestions.length).fill(null);
    
    showQuestion();
    updateProgress();
    updateNavigation();
}

function getRandomQuestions(count) {
    const shuffled = [...allQuizQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function showQuestion() {
    const question = quizQuestions[currentQuestion];
    questionText.textContent = question.question;
    
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        if (userAnswers[currentQuestion] === index) {
            optionElement.classList.add('selected');
        }
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionElement);
    });
    
    currentQuestionElement.textContent = currentQuestion + 1;
}

function selectOption(index) {
    userAnswers[currentQuestion] = index;
    const options = document.querySelectorAll('.option');
    options.forEach((option, i) => {
        if (i === index) {
            option.classList.add('selected');
        } else {
            option.classList.remove('selected');
        }
    });
    updateNavigation();
}

function updateNavigation() {
    prevBtn.disabled = currentQuestion === 0;
    
    if (currentQuestion === quizQuestions.length - 1) {
        nextBtn.classList.add('hidden');
        submitBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
    }
    
    const allAnswered = userAnswers.every(answer => answer !== null);
    submitBtn.disabled = !allAnswered;
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
    document.documentElement.style.setProperty('--progress', `${progress}%`);
}

prevBtn.addEventListener('click', () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
        updateProgress();
        updateNavigation();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentQuestion < quizQuestions.length - 1) {
        currentQuestion++;
        showQuestion();
        updateProgress();
        updateNavigation();
    }
});

submitBtn.addEventListener('click', () => {
    calculateScore();
    showResults();
});

function calculateScore() {
    score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === quizQuestions[index].answer) {
            score++;
        }
    });
}

function showResults() {
    quizContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    scoreElement.textContent = `${score}/${quizQuestions.length}`;
    
    resultDetails.innerHTML = '';
    quizQuestions.forEach((question, index) => {
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        
        const isCorrect = userAnswers[index] === question.answer;
        if (isCorrect) {
            resultItem.classList.add('correct');
        } else {
            resultItem.classList.add('incorrect');
        }
        
        resultItem.innerHTML = `
            <p><strong>Question ${index + 1}:</strong> ${question.question}</p>
            <p>Votre réponse: ${question.options[userAnswers[index]]}</p>
            ${!isCorrect ? `<p>Réponse correcte: ${question.options[question.answer]}</p>` : ''}
        `;
        
        resultDetails.appendChild(resultItem);
    });
}

restartBtn.addEventListener('click', () => {
    initQuiz();
    quizContainer.classList.remove('hidden');
    resultContainer.classList.add('hidden');
});

if (window.location.pathname.includes('quiz.html')) {
    document.addEventListener('DOMContentLoaded', initQuiz);
}