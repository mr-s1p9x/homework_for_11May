// Массив объектов, каждый из которых представляет собой вопрос и количество баллов за правильный ответ
const questions = [
    { question: "Is the sky blue?", score: 10 },
    { question: "Do fish fly?", score: 5 },
    { question: "Is ice hot?", score: 5 },
    { question: "Do trees breathe?", score: 10 }
];

// Правильные ответы для каждого вопроса
const answers = {
    "Yes": [true, false, false, true],
    "No": [false, true, true, false]
};

// Индекс текущего вопроса
let currentQuestion = 0;
// Начальное значение общего счета
let totalScore = 0;

// Функция для отображения текущего вопроса
function displayQuestion() {
    // Проверяем, не закончились ли вопросы
    if (currentQuestion < questions.length) {
        // Отображаем вопрос и радиокнопки для ответов
        document.getElementById("quiz").innerHTML = `
            <p>${questions[currentQuestion].question}</p>
            <label>
                <input type="radio" name="answer" value="Yes"> Yes
            </label>
            <label>
                <input type="radio" name="answer" value="No"> No
            </label>
        `;
    } else {
        // Если вопросы закончились, показываем результат
        showResults();
    }
}

// Функция для перехода к следующему вопросу
function nextQuestion() {
    // Получаем выбранный пользователем ответ
    const selectedAnswer = document.querySelector('input[name="answer"]:checked')?.value;
    // Проверяем, выбран ли ответ
    if (selectedAnswer) {
        // Проверяем, верен ли ответ, и прибавляем баллы, если ответ верный
        if (answers[selectedAnswer][currentQuestion]) {
            totalScore += questions[currentQuestion].score;
        }
        // Переходим к следующему вопросу
        currentQuestion++;
        displayQuestion();
    } else {
        // Если ответ не выбран, выводим предупреждение
        alert("Please select an answer.");
    }
}

// Функция для отображения итоговых результатов
function showResults() {
    // Скрываем блок вопросов
    document.getElementById("quiz").style.display = "none";
    // Выводим итоговый счет
    document.getElementById("result").textContent = `Your total score is: ${totalScore}`;
}

// Начинаем тест с первого вопроса
displayQuestion();
