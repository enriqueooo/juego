function LevelFive() { 
  let optionsQuestions = [
      "a) UMP",
      "b) M500",
      "c) BARRET",
  ];
  
  let answerQuestion = "c";
  
  let questionsOptions = prompt("¿Si estoy enfrentandome a unjugador que esta detras de una pared gloo?\n" + optionsQuestions.join("\n"));
  
  if (questionsOptions !== null) {
      if (questionsOptions.toLowerCase() === answerQuestion) {
          alert("¡Correcto! Debemos usar la de BARRET⚔️.");
      } else {
          alert("Incorrecto.  ESTA ESTA NO ES LA ADECUADA.");
      }
  } else {
      alert("No proporcionaste una respuesta. ¡Intentémoslo de nuevo más tarde!");
  }
}
LevelFour();