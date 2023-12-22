function LevelEigth() { 
  let optionsQuestions = [
      "a) Mclaren",
      "b) Jeep",
      "c) Monster",
  ];
  
  let answerQuestion = "a";
  
  let questionsOptions = prompt("¿Si quiero huir de un enemigo rapidamente que auto uso?\n" + optionsQuestions.join("\n"));
  
  if (questionsOptions !== null) {
      if (questionsOptions.toLowerCase() === answerQuestion) {
          alert("¡Correcto! Debemos usar el Mclaren ya que es el mas rapido .");
      } else {
          alert("Incorrecto.  ESTE NO ES EL ADECUADO.");
      }
  } else {
      alert("No proporcionaste una respuesta. ¡Intentémoslo de nuevo más tarde!");
  }
}
LevelFour();