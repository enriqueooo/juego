function LevelSix() { 
  let optionsQuestions = [
      "a) GLOO",
      "b) GRANADA",
      "c) TOXINA",
  ];
  
  let answerQuestion = "a";
  
  let questionsOptions = prompt("¿Si estoy enfrentandome a unjugador y quiero defenderme que uso?\n" + optionsQuestions.join("\n"));
  
  if (questionsOptions !== null) {
      if (questionsOptions.toLowerCase() === answerQuestion) {
          alert("¡Correcto! Debemos poner una GLOO.");
      } else {
          alert("Incorrecto.  ESTA ESTA NO ES LA ADECUADA.");
      }
  } else {
      alert("No proporcionaste una respuesta. ¡Intentémoslo de nuevo más tarde!");
  }
}
LevelFour();