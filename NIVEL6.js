function LevelFour() { 
  let optionsQuestions = [
      "a) XM8",
      "b) MP40",
      "c) AWM",
  ];
  
  let answerQuestion = "b";
  
  let questionsOptions = prompt("¿Si estoy enfrentandome a unjugador a una corta distancia distancia que arma debo usar?\n" + optionsQuestions.join("\n"));
  
  if (questionsOptions !== null) {
      if (questionsOptions.toLowerCase() === answerQuestion) {
          alert("¡Correcto! Debemos usar la de MP40⚔️.");
      } else {
          alert("Incorrecto.  ESTA ESTA NO ES LA ADECUADA.");
      }
  } else {
      alert("No proporcionaste una respuesta. ¡Intentémoslo de nuevo más tarde!");
  }
}
LevelFour();