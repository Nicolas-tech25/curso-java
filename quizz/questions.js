// Adicione o caminho correto para as suas imagens
const imagePath = 'imagens/';

const questions = [
  {
    question: "Como se escreve?",
    image: "images/gato.jpg", // Nome da imagem para a primeira pergunta
    answers: [
      { option: "Gato", correct: true },
      { option: "Cachorro", correct: false },
      { option: "Lápis", correct: false },
    ],
  },
  {
    question: "Qual é a primeira letra de 'Sol'?",
    image: "images/sol.jpg", // Nome da imagem para a segunda pergunta
    answers: [
      { option: "S", correct: true },
      { option: "O", correct: false },
      { option: "L", correct: false },
    ],
  },
  {
    question: "Quantas letras tem a palavra 'Pato'?",
    image: "images/pato.jpg", // Nome da imagem para a terceira pergunta
    answers: [
      { option: "3", correct: true },
      { option: "5", correct: false },
      { option: "2", correct: false },
    ],
  },
  {
    question: "Complete a palavra: 'C___a'.",
    image: "images/cama.png", // Nome da imagem para a quarta pergunta
    answers: [
      { option: "Cama", correct: true },
      { option: "Pato", correct: false },
      { option: "Sapo", correct: false },
    ],
  },
];

// Função para carregar uma pergunta
function loadQuestion(questionIndex) {
  const currentQuestion = questions[questionIndex];
  
  // Adicione o caminho completo da imagem
  const imageUrl = imagePath + currentQuestion.image;

  // Exiba a imagem
  const imageElement = document.createElement('img');
  imageElement.src = imageUrl;
  imageElement.alt = 'Imagem da pergunta';
  document.querySelector('.content').appendChild(imageElement);

  // Exiba a pergunta
  document.querySelector('.question').textContent = currentQuestion.question; // Mantido como .question

  // Limpe as respostas anteriores
  const answersElement = document.querySelector('.answers');
  answersElement.innerHTML = '';

  // Exiba as opções de resposta
  currentQuestion.answers.forEach((answer, index) => {
    const answerElement = document.createElement('div');
    answerElement.textContent = answer.option;
    answerElement.dataset.index = index;
    answerElement.addEventListener('click', checkAnswer);
    answersElement.appendChild(answerElement);
  });
}

// Inicialização do quiz
let currentQuestion = 0;
loadQuestion(currentQuestion);

// Função para verificar a resposta escolhida
function checkAnswer(event) {
  const selectedAnswerIndex = event.target.dataset.index;
  const currentQuestionIndex = currentQuestion;

  // Lógica para verificar a resposta e atualizar o quizz
  const selectedAnswer = questions[currentQuestionIndex].answers[selectedAnswerIndex];
  
  // Exemplo de lógica para verificar se a resposta está correta
  if (selectedAnswer.correct) {
    console.log('Resposta correta!');
    // Adicione aqui a lógica para pontuação, etc.
  } else {
    console.log('Resposta incorreta!');
    // Adicione aqui a lógica para resposta incorreta, se desejar
  }

  // Após verificar a resposta, carregue a próxima pergunta
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion(currentQuestionIndex);
  } else {
    // Exiba a pontuação final ou reinicie o quiz
    // ...
  }
}
