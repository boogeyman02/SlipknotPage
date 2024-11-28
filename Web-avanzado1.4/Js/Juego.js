
const quizData = [
    {
        question: "🤘 ¿Cuál es el nombre real del bajista de Slipknot?",
        options: ["Alex Joey", "Paul Gray", "Mark Crebo", "John Smith"],
        correctAnswer: "Paul Gray",
        hint: "💀 Este miembro falleció trágicamente en 2010, dejando una marca indeleble en la historia de la banda."
    },
    {
        question: "🔥 ¿En qué año lanzaron su primer álbum de estudio?",
        options: ["1997", "1999", "2001", "1995"],
        correctAnswer: "1999",
        hint: "🎸 Fue un álbum que sacudió la escena del metal para siempre."
    },
    {
        question: "💀 ¿Slipknot se formó originalmente en 1995?",
        options: ["Verdadero", "Falso"], // Añadir el atributo 'options'
        correctAnswer: "Verdadero",
        hint: "🤘 La banda comenzó a tomar forma en Des Moines, Iowa en los primeros años de los 90s."
    },
    {
        question: "🎸 ¿Todos los miembros de Slipknot usan máscaras en cada presentación?",
        options: ["Verdadero", "Falso"], // Mantener consistencia
        correctAnswer: "Verdadero",
        hint: "🤯 Es parte de su identidad artística única en el metal."
    },
    {
        question: "💀 ¿Qué número usa Corey Taylor en su máscara?",
        options: ["8", "6", "7", "9"],
        correctAnswer: "8",
        hint: "🤘 Su número es parte de la identidad única de la banda."
    },
    {
        question: "🎭 ¿Quién es el DJ original de Slipknot?",
        options: ["Sid Wilson", "Craig Jones", "Chris Fehn", "Shawn Crahan"],
        correctAnswer: "Sid Wilson",
        hint: "🌪️ Este miembro es conocido por sus increíbles movimientos en el escenario."
    },
    {
        question: "🤯 ¿De qué ciudad de Iowa provienen?",
        options: ["Cedar Rapids", "Des Moines", "Iowa City", "Waterloo"],
        correctAnswer: "Des Moines",
        hint: "🏙️ La cuna de un fenómeno musical que cambiaría el metal para siempre."
    }
];


let currentQuestion = 0;
let score = 0;

const startContainer = document.getElementById('start-container');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressBar = document.getElementById('progress-bar');
const nextBtn = document.getElementById('next-btn');
const scoreText = document.getElementById('score-text');
const rankText = document.getElementById('rank-text');

document.getElementById('start-btn').addEventListener('click', startQuiz);
document.getElementById('restart-btn').addEventListener('click', restartQuiz);
document.getElementById('share-btn').addEventListener('click', shareResult);

function startQuiz() {
    startContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionText.innerHTML = currentQuizData.question;

    optionsContainer.innerHTML = '';
    currentQuizData.options.forEach((option, index) => {
        const col = document.createElement('div');
        col.classList.add('col-md-6');

        const button = document.createElement('button');
        button.innerHTML = `${option} ${getRandomEmoji()}`;
        button.classList.add('btn', 'btn-outline-light', 'btn-quiz');
        button.addEventListener('click', () => confirmAnswer(option, currentQuizData.hint));

        col.appendChild(button);
        optionsContainer.appendChild(col);
    });

    const progressPercentage = ((currentQuestion + 1) / quizData.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    nextBtn.style.display = 'none';
}

function confirmAnswer(selectedOption, hint) {
    // Solo mostrar modal de confirmación el 50% de las veces
    const showConfirmation = Math.random() < 0.3;

    if (showConfirmation) {
        const modal = createConfirmationModal(selectedOption, hint);
        modal.show();
    } else {
        checkAnswer(selectedOption);
    }
}

function createConfirmationModal(selectedOption, hint) {
    const modalHtml = `
        <div class="modal fade" id="confirmModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">🤘 ¿Estás seguro? 🤘</h5>
                    </div>
                    <div class="modal-body">
                        <p>Has seleccionado: <strong>${selectedOption}</strong></p>
                        <p class="text-warning">💡 Pista: ${hint}</p>
                        <p>¿Quieres confirmar tu respuesta?</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-danger" id="confirm-answer">Confirmar</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    const modal = new bootstrap.Modal(document.getElementById('confirmModal'));

    const confirmBtn = document.getElementById('confirm-answer');
    confirmBtn.onclick = () => {
        checkAnswer(selectedOption);
        modal.hide();
        document.getElementById('confirmModal').remove();
    };

    return modal;
}

function checkAnswer(selectedOption) {
    const currentQuizData = quizData[currentQuestion];
    const isCorrect = selectedOption === currentQuizData.correctAnswer;

    const buttons = optionsContainer.querySelectorAll('.btn-quiz');
    buttons.forEach(button => {
        button.disabled = true;
        if (button.textContent.includes(currentQuizData.correctAnswer)) {
            button.classList.add('btn-success');
        }
        if (button.textContent.includes(selectedOption)) {
            button.classList.add(isCorrect ? 'btn-success' : 'btn-danger');
        }
    });

    if (isCorrect) {
        score++;
    }

    nextBtn.style.display = 'block';
    nextBtn.onclick = nextQuestion;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';

    const percentage = (score / quizData.length) * 100;
    scoreText.innerHTML = `🏆 Puntuación: ${score} de ${quizData.length} preguntas 🤘`;

    let rank = '';
    if (percentage === 100) rank = 'Maestro Absoluto de Slipknot 🤘💥';
    else if (percentage >= 80) rank = 'Fan Hardcore 🔥';
    else if (percentage >= 60) rank = 'Fan Dedicado 🤘';
    else if (percentage >= 40) rank = 'Fan Principiante 🎸';
    else rank = 'Necesitas más Slipknot en tu vida 💀';

    rankText.innerHTML = `Rango: ${rank}`;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    resultContainer.style.display = 'none';
    startContainer.style.display = 'block';
}

function shareResult() {
    const resultText = `🤘 Acabo de hacer el Quiz de Slipknot y obtuve ${score} de ${quizData.length} preguntas. ¡Desafía tu conocimiento! 💀🔥`;

    if (navigator.share) {
        navigator.share({
            title: 'Quiz de Slipknot',
            text: resultText
        });
    } else {
        alert('Función de compartir no disponible en tu navegador.');
    }
}

function getRandomEmoji() {
    const emojis = ['🤘', '💀', '🔥', '🎸', '🤯'];
    return emojis[Math.floor(Math.random() * emojis.length)];
}