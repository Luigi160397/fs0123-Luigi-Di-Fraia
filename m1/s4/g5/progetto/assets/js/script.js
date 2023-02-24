//pagina1

let body = document.querySelector("body");

import {
  creaElementoId,
  creaElementoClasse,
  creaElemento,
  newAnswer,
  questions,
  shuffle,
  results,
  startTimer,
  indice,
  rCorrette,
  rSbagliate,
} from "./Funzioni.js";

creaElementoId("div", "body", "container1", "");
creaElementoClasse("div", "#container1", "title", "Welcome to ");
creaElementoClasse("span", ".title", "bold", "your exam");
creaElementoId("div", "#container1", "container5", "");
creaElementoId("div", "#container5", "subtitle", "Instructions");
creaElementoClasse(
  "div",
  "#container5",
  "paragraph",
  `We don't expect most engineers to know the answers to 
    all of these questions, so don't worry if you're unsure of a few of them.`
);
creaElementoId("ul", "#container1", "lista1", "");
creaElemento(
  "li",
  "#lista1",
  'Each question is <span class="b">timed</span> and can only be <span class="b">answered once</span>.'
);
creaElemento(
  "li",
  "#lista1",
  'Changing browser tab or opening other windows will <span class="b">invalidate the question</span>.'
);
creaElemento(
  "li",
  "#lista1",
  'This exam will take approx. <span class="b">0-5 minutes</span>.'
);
creaElementoId("div", "#container1", "container3", "");
creaElementoId("input", "#container3", "check", "");
check.type = "checkbox";
check.name = "check";
creaElemento(
  "label",
  "#container3",
  "I promise to answer myself without help from anyone"
);
let label = document.querySelector("label");
label.setAttribute("for", "check");
creaElementoClasse("a", "#container3", "link", "PROCEED");

//pagina 2
let lastQuestionIndex = questions.length;

let link = document.querySelector(".link");
link.addEventListener("click", () => {
  if (check.checked) {
    container1.innerHTML = "";
    shuffle(questions);
    newAnswer(questions[indice]);
    startTimer(questions[indice]);
    creaElementoClasse("div", "#container1", "container4", "");
    creaElementoClasse("button", ".container4", "next", "NEXT");
    let next = document.querySelector(".next");

    next.addEventListener("click", function () {
      if (indice === lastQuestionIndex) {
        document.querySelector("#container1").innerHTML = "";
        document.querySelector("#target").innerHTML = "";
        document.querySelector(".next").remove();
        results(rCorrette,rSbagliate);
      } else {
        newAnswer(questions[indice]);
      }
    });
  } else {
    alert("confirm");
  }
});








