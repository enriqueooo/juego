function LevelOne() { 
  let optionsQuestions = [
      "a) Jugar",
      "b) Iniciar",
      "c) Empezar",
  ];
  
  let answerQuestion = "b";
  
  let questionsOptions = prompt("¿Si estoy queriendo iniciar la partida que preciono?\n" + optionsQuestions.join("\n"));
  
  if (questionsOptions !== null) {
      if (questionsOptions.toLowerCase() === answerQuestion) {
          alert("¡Correcto! Iniciar.");
      } else {
          alert("Incorrecto. Solo existe el boton iniciar.");
      }
  } else {
      alert("No proporcionaste una respuesta. ¡Intentémoslo de nuevo más tarde!");
  }
}
LevelFour();