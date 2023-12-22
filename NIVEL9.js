function LevelSeven() { 
  let optionsQuestions = [
      "a) Scaner",
      "b) Aidrop",
      "c) Radar",
  ];
  
  let answerQuestion = "a";
  
  let questionsOptions = prompt("¿Si quiero saber la posicion de mi enemigo que uso?\n" + optionsQuestions.join("\n"));
  
  if (questionsOptions !== null) {
      if (questionsOptions.toLowerCase() === answerQuestion) {
          alert("¡Correcto! Debemos usar el Scaner⚔️.");
      } else {
          alert("Incorrecto.  ESTA NO ES LA ADECUADA.");
      }
  } else {
      alert("No proporcionaste una respuesta. ¡Intentémoslo de nuevo más tarde!");
  }
}
LevelFour();