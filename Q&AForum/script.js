// Toggle Question Form
document.getElementById('askQuestionBtn').addEventListener('click', function() {
    document.getElementById('questionForm').style.display = 'block';
});

// Submit Question
document.getElementById('submitQuestionBtn').addEventListener('click', function() {
    const questionText = document.getElementById('questionInput').value;
    if (questionText.trim() === '') {
        alert('Please enter a question.');
        return;
    }

    const timestamp = new Date().toLocaleString();
    const questionCard = document.createElement('div');
    questionCard.className = 'question-card';
    questionCard.innerHTML = `
        <div>
            <strong>Q:</strong> ${questionText}
            <span class="timestamp">${timestamp}</span>
        </div>
        <textarea class="form-control mt-2 answer-input" placeholder="Enter your answer"></textarea>
        <button class="btn btn-secondary mt-2 submit-answer-btn">Submit Answer</button>
        <div class="answers-container"></div>
    `;

    document.getElementById('questionsContainer').appendChild(questionCard);
    document.getElementById('questionInput').value = '';
    document.getElementById('questionForm').style.display = 'none';

    // Submit Answer Functionality
    const submitAnswerBtn = questionCard.querySelector('.submit-answer-btn');
    const answerInput = questionCard.querySelector('.answer-input');
    const answersContainer = questionCard.querySelector('.answers-container');

    submitAnswerBtn.addEventListener('click', function() {
        const answerText = answerInput.value;
        if (answerText.trim() === '') {
            alert('Please enter an answer.');
            return;
        }

        const answerCard = document.createElement('div');
        answerCard.className = 'answer-card';
        answerCard.innerHTML = `
            <strong>A:</strong> ${answerText}
            <span class="timestamp">${new Date().toLocaleString()}</span>
        `;

        answersContainer.appendChild(answerCard);
        answerInput.value = '';
        answerCard.style.display = 'block';
    });
});

// Search Functionality
document.getElementById('searchButton').addEventListener('click', function() {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    const questions = document.querySelectorAll('.question-card');

    questions.forEach(question => {
        const questionText = question.querySelector('strong').innerText.toLowerCase();
        if (questionText.includes(searchTerm)) {
            question.style.display = 'block';
        } else {
            question.style.display = 'none';
        }
    });
});