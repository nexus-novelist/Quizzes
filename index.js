const questionTemplate = `<div class="question">
<h3 id="question-id">Question 1</h3>
<h3 id="question-name">Question name</h3>
<form>
    <div class="answers">
        <input type="radio" id="option-1" name="question">
        <label for="option-1">Option 1</label>
        <input type="radio" id="option-2" name="question">
        <label for="option-2">Option 2</label>
        <input type="radio" id="option-3" name="question">
        <label for="option-3">Option 3</label>
        <input type="radio" id="option-4" name="question">
        <label for="option-4">Option 4</label>
    </div>
</form>
</div>`;

async function loadJson(){
    const response = await fetch('https://nexus-novelist.github.io/Quizzes/assets/quizzes/1.json');
    const data = await response.json();
    return data;
}

async function loadQuiz(){
    console.log("Loading quiz...");
    const response = await fetch('https://nexus-novelist.github.io/Quizzes/assets/quizzes/1.json');
    const data = await response.json().then((value) => {
        document.getElementById('quiz-name').textContent += value.name;
        document.getElementById('quiz-id').textContent += value.id;
    });
}

function loadQuestion(){
    document.getElementById('container').innerHTML += questionTemplate;
}

loadQuiz();