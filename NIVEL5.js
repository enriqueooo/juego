function LevelThree() { 
  let optionsQuestions = [
      "a) SCAR",
      "b) TOPSOM",
      "c) BARRET",
  ];
  
  let answerQuestion = "a";
  
  let questionsOptions = prompt("¿Si estoy enfrentandome a unjugador a una larga distancia que arma debo usar?\n" + optionsQuestions.join("\n"));
  
  if (questionsOptions !== null) {
      if (questionsOptions.toLowerCase() === answerQuestion) {
          alert("¡Correcto! Debemos usar la SCAR ⚔️.");
      } else {
          alert("Incorrecto. ESTA ESTA NO ES LA ADECUADA.");
      }
  } else {
      alert("No proporcionaste una respuesta. ¡Intentémoslo de nuevo más tarde!");
  }
}
LevelFour();