const questions = [
    {
      question: "Quelle planète est connue sous le nom de Planète Rouge ?",
      options: ["Mercure", "Mars", "Jupiter", "Vénus"],
      correctAnswer: 1
    },
    {
      question: "Quelle est la plus grande planète du système solaire ?",
      options: ["Terre", "Jupiter", "Saturne", "Neptune"],
      correctAnswer: 1
    },
    {
      question: "Quelle planète est la plus proche du Soleil ?",
      options: ["Vénus", "Terre", "Mercure", "Mars"],
      correctAnswer: 2
    },
    {
      question: "Quelle planète possède le système d'anneaux le plus étendu ?",
      options: ["Saturne", "Jupiter", "Uranus", "Neptune"],
      correctAnswer: 0
    },
    {
      question: "Quelle est la plus petite planète du système solaire ?",
      options: ["Pluton", "Mars", "Mercure", "Vénus"],
      correctAnswer: 2
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    const options = document.querySelectorAll(".option");
    options.forEach((button, index) => {
      button.textContent = currentQuestion.options[index];
      button.onclick = () => checkAnswer(index);
    });
  }
  
  function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (selectedOption === correctAnswer) {
      score++;
    }
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    document.querySelector(".question-container").style.display = "none";
    const resultContainer = document.querySelector(".result-container");
    resultContainer.style.display = "flex";
  
    const resultText = score === questions.length ? 
      `🎉 Félicitations ! Vous avez obtenu ${score} sur ${questions.length} ! 🌟` :
      `Vous avez obtenu ${score} sur ${questions.length}. Réessayez pour un score parfait ! 👍`;
  
    document.getElementById("result").textContent = resultText;
  
    if (score === questions.length) {
      resultContainer.classList.add("congrats");
    } else {
      resultContainer.classList.remove("congrats");
    }
  }
  
  function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    document.querySelector(".result-container").style.display = "none";
    document.querySelector(".question-container").style.display = "flex";
    loadQuestion();
  }
  
  startQuiz();
  