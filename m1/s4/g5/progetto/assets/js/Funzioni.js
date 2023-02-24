export const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "hard",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

export function creaElementoId(elemento, padre, id, testo) {
  let nuovoElemento = document.createElement(elemento);
  nuovoElemento.setAttribute("id", id);
  nuovoElemento.innerHTML = testo;
  document.querySelector(padre).append(nuovoElemento);
}

export function creaElementoClasse(elemento, padre, classe, testo) {
  let nuovoElemento = document.createElement(elemento);
  nuovoElemento.setAttribute("class", classe);
  nuovoElemento.innerHTML = testo;
  document.querySelector(padre).append(nuovoElemento);
}

export function creaElemento(elemento, padre, testo) {
  let nuovoElemento = document.createElement(elemento);
  nuovoElemento.innerHTML = testo;
  document.querySelector(padre).append(nuovoElemento);
}

export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export let indice = 0;
let risposteCorrette = sessionStorage.getItem("risposte-corrette") ? JSON.parse(sessionStorage.getItem("risposte-corrette")) : [];
let currentQuestionIndex = 0;
let timerInterval;

export function startTimer(timeLimit) {
  let timeLeft = timeLimit;
  if (timerInterval) {
    clearInterval(timerInterval);
  }

  timerInterval = setInterval(() => {
    timeLeft--;
    const tl = document.getElementById("base-timer-label");

    if (tl) {
      tl.innerHTML = formatTime(timeLeft);
      setCircleDasharray(timeLeft, timeLimit);
    }

    if (timeLeft === 0) {
      let next = document.querySelector(".next");
      if (next) {
        next.click();
      }
      clearInterval(timerInterval);
    }
  }, 1000);
}

function formatTime(time) {
  return time;
}

function calculateTimeFraction(timeLeft, timeLimit) {
  const rawTimeFraction = timeLeft / timeLimit;
  return rawTimeFraction - (1 / timeLimit) * (1 - rawTimeFraction);
}

function setCircleDasharray(timeLeft, timeLimit) {
  const FULL_DASH_ARRAY = 283;
  const circleDasharray = `${(
    calculateTimeFraction(timeLeft, timeLimit) * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

export function newAnswer(answerObj) {
  fetch("template.html")
    .then((res) => res.text())
    .then((res) => {
      let target = document.querySelector("#target");
      target.innerHTML = res;

      let html = target.querySelector("#container1");

      //timer
      const timeLimit = answerObj.difficulty === "hard" ? 60 : 30;

      document.getElementById("timer").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining"
        d="
           M 50, 50
           m 45, 0
          a 45,45 0 1,1 -90,0
          a 45,45 0 1,1 90,0"
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLimit
  )}</span>
</div>
`;
      //seleziono gli elementi
      let titleDOM = html.querySelector(".title2");
      let answersDOM = html.querySelector("#container2");

      let footerDOM = html.querySelector("#footer");

      currentQuestionIndex++;

      footerDOM.innerHTML = `${currentQuestionIndex} <span class="color"></span>`;

      let footerSpan = html.querySelector(".color");
      footerSpan.textContent = "/" + questions.length;

      //evento click sui bottoni
      let bottone = html.querySelector("#container2 .button");
      let container = html.querySelector("#container2");
      
      container.addEventListener("click", (event) => {
        if (event.target.classList.contains("button")) {
          let selectedOption = event.target;
          let otherOptions = Array.from(container.querySelectorAll(".button")).filter(option => option !== selectedOption);
          
          
          otherOptions.forEach(option => option.classList.remove("clicked"));
          
          
          selectedOption.classList.toggle("clicked");
      
          if (selectedOption.textContent === answerObj.correct_answer) {
            risposteCorrette.push(selectedOption.textContent);
            sessionStorage.setItem("risposte-corrette", JSON.stringify(risposteCorrette));
          }
        }
      });
      
      //inserisco contenuto

      titleDOM.textContent = answerObj.question;

      let risposte = [];

      risposte.push(answerObj.correct_answer);

      for (let val of answerObj.incorrect_answers) {
        risposte.push(val);
      }
      let risposteMix = shuffle(risposte);

      for (let risp of risposteMix) {
        let optionClone = bottone.cloneNode();

        optionClone.textContent = risp;

        answersDOM.append(optionClone);
      }

      bottone.remove(); //rimuovo la prima option

      target.append(html);

      startTimer(timeLimit);
    });
  indice++;

}
export let rCorrette = [];
export let rSbagliate = [];

export function results() {
  fetch("template2.html")
    .then((res) => res.text())
    .then((res) => {
      let target = document.querySelector("#target");
      let tempDiv = document.createElement("div");
      tempDiv.innerHTML = res;

      let html = tempDiv.querySelector("#container1");

      let titleDOM = html.querySelector(".title2");
      let paragraph2DOM = html.querySelector(".paragraph2");
      let correctDOM = html.querySelector(".flex-container .correct");
      let wrongDOM = html.querySelector(".flex-container .wrong");
      let chartDOM = html.querySelector(".flex-container .congr .chart");
      let titleCorr = html.querySelector(".flex-container .correct .title3");
      let titleSbagl = html.querySelector(".flex-container .wrong .title3");
      let correctPercentageDOM = correctDOM.querySelector(".b");
      let wrongPercentageDOM = wrongDOM.querySelector(".b");
      let risposteSbagliate = questions.length - risposteCorrette.length;
      let correctPercentage =
        (risposteCorrette.length / questions.length) * 100;
      let wrongPercentage = (risposteSbagliate / questions.length) * 100;

      titleCorr.textContent = "Correct";
      titleSbagl.textContent = "Wrong";
      titleDOM.textContent = "Results";
      paragraph2DOM.textContent = "The summary of your answers:";

      correctDOM.querySelector(".totQ").textContent =
        risposteCorrette.length + " /" + questions.length + " questions";
      wrongDOM.querySelector(".totQ").textContent =
        risposteSbagliate + " /" + questions.length + " questions";
      correctPercentageDOM.textContent = `${correctPercentage}%`;
      wrongPercentageDOM.textContent = `${wrongPercentage}%`;


      let data = {
        labels: ["Correct", "Wrong"],
        datasets: [
          {
            label: "Answers",
            data: [risposteCorrette.length, risposteSbagliate],
            backgroundColor: ["#00ffff", "#d20094"],
            hoverOffset: 4,
          },
        ],
      };

      const ctx = chartDOM.getContext("2d");
      const myChart = new Chart(ctx, {
        type: "doughnut",
        data: data,
        options: {
          cutout: "70%",
        },
      });
      const chartText = document.createElement("div");
chartText.id = "chart-text";
if(risposteCorrette.length > risposteSbagliate){
  chartText.textContent = `Congratulations!
  You passed the exam.
  We'll send you the certificate in few minutes.
  Check your email (including promotions / spam folder)`;
}else{chartText.textContent = 'Ops! You have not passed the exam.'}
chartDOM.parentNode.insertBefore(chartText, chartDOM.nextSibling);


// Posiziona il testo al centro della ciambella tramite CSS
chartText.style.position = "absolute";
chartText.style.top = "50%";
chartText.style.left = "50%";
chartText.style.transform = "translate(-50%, -50%)";
chartText.style.fontSize = "12px";
chartText.style.fontWeight = "bold";
chartText.style.color = "white";

      target.appendChild(html);
      let link2 = html.querySelector(".link2");
      link2.addEventListener("click", () => {
        document.querySelector("#container1").innerHTML = "";
        document.querySelector("#target").innerHTML = "";
        ratings();
      });
    });
}

export function ratings() {
  fetch("template3.html")
    .then((res) => res.text())
    .then((res) => {
      let target = document.querySelector("#target");
      let tempDiv = document.createElement("div");
      tempDiv.innerHTML = res;

      let html = tempDiv.querySelector("#container7");

      let titleDOM = html.querySelector(".title2");
      let subtitleDOM = html.querySelector(".paragraph2");
      let starsDOM = html.querySelector(".stars");

      let paragraph2DOM = html.querySelector(".container8 .paragraph2");

      let infoDOM = html.querySelector(".footer2 .link");

      titleDOM.textContent = "Tell us how it's going";
      subtitleDOM.textContent =
        "From 0 to 10, how likely are you to recommend EPICODE to a friend or a colleague?";
      paragraph2DOM.textContent =
        "Leave us an open feedback about your experience so far";
      infoDOM.textContent = "MORE INFO";

      starsDOM.querySelectorAll(".fa-star").forEach((star, i) => {
        star.addEventListener("click", () => {
          for (let j = 0; j <= i; j++) {
            starsDOM.querySelectorAll(".fa-star")[j].classList.add("checked");
          }
          for (
            let j = i + 1;
            j < starsDOM.querySelectorAll(".fa-star").length;
            j++
          ) {
            starsDOM
              .querySelectorAll(".fa-star")
              [j].classList.remove("checked");
          }
        });
      });

      target.appendChild(html);
    });
}
