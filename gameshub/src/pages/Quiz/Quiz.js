import {
  getNextIndex,
  getPreviousIndex,
} from "../../components/ButtonQuiz/ButtonQuiz";
import "./Quiz.css";
const preguntasRespuestas = [
  {
    pregunta: "1. ¿Quién es el autor de la serie 'Canción de Hielo y Fuego' ?",
    respuesta1: "J.R.R. Tolkien",
    respuesta2: "George R.R. Martin",
    respuesta3: "Brandon Sanderson",
    respuesta4: "Terry Brooks",
    correcta: "respuesta2",
  },
  {
    pregunta:
      "2. En 'El Señor de los Anillos', ¿qué objeto es buscado por Frodo y su compañía?",
    respuesta1: "La Espada del Destino",
    respuesta2: "El Anillo Único",
    respuesta3: "La Piedra de la Eternidad",
    respuesta4: "El Cáliz de los Antiguos",
    correcta: "respuesta2",
  },
  {
    pregunta: "3. ¿Cuál es el primer libro de la serie 'Harry Potter' ?",
    respuesta1: "Harry Potter y el Cáliz de Fuego",
    respuesta2: "Harry Potter y la Orden del Fénix",
    respuesta3: "Harry Potter y la Piedra Filosofal",
    respuesta4: "Harry Potter y el Prisionero de Azkaban",
    correcta: "respuesta3",
  },
  {
    pregunta: "4. ¿Quién escribió la serie 'Crónicas de Narnia'?",
    respuesta1: "J.K. Rowling",
    respuesta2: "C.S. Lewis",
    respuesta3: "Philip Pullman",
    respuesta4: "Neil Gaiman",
    correcta: "respuesta2",
  },
  {
    pregunta:
      "5. En 'El Nombre del Viento', ¿cuál es el nombre del protagonista?",
    respuesta1: "Kvothe",
    respuesta2: "Rand al'Thor",
    respuesta3: "Vin",
    respuesta4: "Aragorn",
    correcta: "respuesta1",
  },
  {
    pregunta: "6. ¿Qué autor escribió 'American Gods' ?",
    respuesta1: "Patrick Rothfuss",
    respuesta2: "Stephen King",
    respuesta3: "Neil Gaiman",
    respuesta4: "Terry Pratchett",
    correcta: "respuesta3",
  },
  {
    pregunta: "7.¿Cuál es el primer libro de la serie 'Cazadores de Sombras'?",
    respuesta1: "Ciudad de Hueso",
    respuesta2: "Ciudad de Ceniza",
    respuesta3: "Ciudad de Cristal",
    respuesta4: "Ciudad de los Ángeles Caídos",
    correcta: "respuesta1",
  },
  {
    pregunta: "8. ¿Quién es el autor de 'El Ciclo de la Puerta de la Muerte'?",
    respuesta1: "George R.R. Martin",
    respuesta2: "J.R.R. Tolkien",
    respuesta3: "Terry Brooks",
    respuesta4: "Brandon Sanderson",
    correcta: "respuesta3",
  },
  {
    pregunta:
      "9. En 'Mistborn: Nacidos de la Bruma', ¿quién es el líder de la banda de ladrones?",
    respuesta1: "Kelsier",
    respuesta2: "Vin",
    respuesta3: "Elend Venture",
    respuesta4: "Sazed",
    correcta: "respuesta1",
  },
  {
    pregunta: "10.¿Cuál es el primer libro de la serie 'The Witcher'?",
    respuesta1: "La Sangre de los Elfos",
    respuesta2: "El Último Deseo",
    respuesta3: "La Espada del Destino",
    respuesta4: "Bautismo de Fuego",
    correcta: "respuesta2",
  },
  {
    pregunta: "11.¿Quién escribió la serie 'La Rueda del Tiempo?'",
    respuesta1: "Robert Jordan",
    respuesta2: "Terry Goodkind",
    respuesta3: "Robin Hobb",
    respuesta4: "Ursula K. Le Guin",
    correcta: "respuesta1",
  },
  {
    pregunta:
      "12. En 'Las Crónicas de Prydain', ¿quién es el asistente de Taran?",
    respuesta1: "Fflewddur Fflam",
    respuesta2: "Gurgi",
    respuesta3: "Dallben",
    respuesta4: "Eilonwy",
    correcta: "respuesta3",
  },
  {
    pregunta: "13. En 'El Hobbit', ¿quién es el protagonista?",
    respuesta1: "Gandalf",
    respuesta2: "Frodo Bolsón",
    respuesta3: "Bilbo Bolsón",
    respuesta4: "Legolas",
    correcta: "respuesta3",
  },
  {
    pregunta: "14. ¿Quién es el autor de 'Elantris'?",
    respuesta1: "Patrick Rothfuss",
    respuesta2: "George R.R. Martin",
    respuesta3: "Brandon Sanderson",
    respuesta4: "Joe Abercrombie",
    correcta: "respuesta3",
  },
  {
    pregunta:
      "15.¿Cuál es el nombre del personaje principal en la saga 'The Witcher'?",
    respuesta1: "Geralt de Rivia",
    respuesta2: "Yennefer de Vengerberg",
    respuesta3: "Ciri",
    respuesta4: "Dandelion",
    correcta: "respuesta1",
  },
];

let index = 0;
let score = 0;
let preguntasRespondidas = [];

const template = () => `
      <div class="containerQuiz">
        <div class="score">Score: <span id="score">0</span></div>
        <div id="Quiz">
          <h1 id="question">pregunta</h1>
          <button id="r1" class="answer answer-btn incorrecta" data-answer="respuesta1">respuesta1</button>
          <button id="r2" class="answer answer-btn incorrecta" data-answer="respuesta2">respuesta2</button>
          <button id="r3" class="answer answer-btn incorrecta" data-answer="respuesta3">respuesta3</button>
          <button id="r4" class="answer answer-btn incorrecta" data-answer="respuesta4">respuesta4</button>
          <div class="navBotones"><h2 id="solution"></h2>
          <button id="next" class="navigationButton">SIGUIENTE</button></div>
        </div>
      </div>
    `;

const nextButtonVisibility = () => {
  //*hace que se vea la opción de retroceder cuando el index no es 0*/
  const navigateNext = document.getElementById("next");
  navigateNext.style.display =
    index === preguntasRespuestas.length - 1 ? "none" : "flex";
};

const addEventListeners = () => {
  //*botón de retroceder, permitiendo cargar pregunta anterior, y actualizando visibilidad*/
  // const navigatePrevious = document.getElementById("previous");
  // navigatePrevious.addEventListener("click", () => {
  //   if (index > 0) {
  //     index = getPreviousIndex();
  //     loadQuestion();
  // updatePreviousButtonVisibility();
  //   }
  // });

  const navigateNext = document.getElementById("next"); //*Igual para opción NEXT*/
  navigateNext.addEventListener("click", () => {
    index = getNextIndex(preguntasRespuestas.length);
    loadQuestion();
    nextButtonVisibility();
  });

  const respuestaUno = document.getElementById("r1"); //*los botones para seleccionar respuesta, se ejecuta función checkAnswer*/
  //para ver si es correcta*/
  respuestaUno.addEventListener("click", () => {
    checkAnswer("respuesta1");
  });

  const respuestaDos = document.getElementById("r2");
  respuestaDos.addEventListener("click", () => {
    checkAnswer("respuesta2");
  });

  const respuestaTres = document.getElementById("r3");
  respuestaTres.addEventListener("click", () => {
    checkAnswer("respuesta3");
  });

  const respuestaCuatro = document.getElementById("r4");
  respuestaCuatro.addEventListener("click", () => {
    checkAnswer("respuesta4");
  });
};

export const printQuizPage = () => {
  preguntasRespondidas = [];
  document.querySelector("main").innerHTML = template();

  loadQuestion();
  // const navigatePrevious = document.getElementById("previous");
  // navigatePrevious.style.display = "none";
  // navigatePrevious.style.opacity = "0.5";
  addEventListeners();
  congratulationsTemplate();
};

const congratulationsTemplate = () => `
    <div id="Enhorabuena">
    <p>Enhorabuena!! Has respondido ${score} de 15 preguntas correctamente</p>
    <button id="restartButton">Volver a jugar</button>
    </div>
    `;

const loadQuestion = () => {
  if (index === preguntasRespuestas.length - 1) {
    console.log(
      "🚀 ~ loadQuestion ~ preguntasRespuestas.length:",
      preguntasRespuestas.length
    );
    document.querySelector("#Quiz").style.display = "none";
    const scoreElement = document.querySelector(".score");
    const congratulationsElement = document.createElement("div");
    congratulationsElement.innerHTML += congratulationsTemplate(score);
    scoreElement.parentElement.appendChild(congratulationsElement);

    const restartButton = document.getElementById("restartButton");
    restartButton.addEventListener("click", () => {
      document.querySelector("#Quiz").style.display = "flex";
      score = 0;
      document.getElementById("score").innerText = score;
      index = 0;
      preguntasRespondidas = [];
      congratulationsElement.remove();
      printQuizPage();
    });

    return;
  }

  const buttons = document.querySelectorAll(".answer-btn");
  buttons.forEach((button) => {
    button.style.backgroundColor = "";
    button.removeAttribute("disabled");
  });

  const currentQuestion = preguntasRespuestas[index];
  if (currentQuestion) {
    document.getElementById("question").innerText = currentQuestion.pregunta;
    document.getElementById("r1").innerText = currentQuestion.respuesta1;
    document.getElementById("r2").innerText = currentQuestion.respuesta2;
    document.getElementById("r3").innerText = currentQuestion.respuesta3;
    document.getElementById("r4").innerText = currentQuestion.respuesta4;
    document.getElementById("solution").innerText = "";
    preguntasRespondidas.push(index);
  } else {
    console.error(`La pregunta en la posición ${index} es undefined.`);
  }
};

const checkAnswer = (answer) => {
  //*función que comprueba si la respuesta es o no correcta*/
  const respuestaCorrecta = preguntasRespuestas[index].correcta;
  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach((button) => {
    //*Cómo comportarse en caso de respuesta correcta/incorrecta; colores y mensaje"
    button.setAttribute("disabled", true);
    if (button.getAttribute("data-answer") === respuestaCorrecta) {
      button.style.backgroundColor = "green";
    }
    if (button.getAttribute("data-answer") === answer) {
      if (answer === respuestaCorrecta) {
        button.style.backgroundColor = "green";
      } else {
        button.style.backgroundColor = "red";
      }
    }
  });

  if (answer === respuestaCorrecta) {
    document.getElementById("solution").innerText = "¡Eso es!";
    document.getElementById("solution").style.color = "green";
    score++;
    document.getElementById("score").innerText = score;
    console.log("indice actual:", index);
  } else {
    document.getElementById("solution").innerText =
      "¡Oooh respuesta incorrecta!";
    document.getElementById("solution").style.color = "red";
  }
};
congratulationsTemplate();

export const preguntas = () => preguntasRespuestas();
