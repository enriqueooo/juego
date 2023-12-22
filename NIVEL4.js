
function LevelTwo() { 
  let optionsQuestions = [
      "a) Saltar",
      "b) Caer",
      "c) Brincar",
  ];
  
  let answerQuestion = "a";
  
  let questionsOptions = prompt("¿Si estoy empezando la partida y ya estoy en el avion que presiono para llegar al piso?\n" + optionsQuestions.join("\n"));
  
  if (questionsOptions !== null) {
      if (questionsOptions.toLowerCase() === answerQuestion) {
          alert("¡Correcto! Debemos presionar Saltar.");
      } else {
          alert("Incorrecto. Solo existe la funcion Saltar.");
      }
  } else {
      alert("No proporcionaste una respuesta. ¡Intentémoslo de nuevo más tarde!");
  }
}
LevelFour();