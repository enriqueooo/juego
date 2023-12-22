function LevelNine() { 
    let optionsQuestions = [
        "a) Monedas",
        "b) Diamantes",
        "c) Oro",
    ];
    
    let answerQuestion = "a";
    
    let questionsOptions = prompt("¿Si quiero revivir un amigo que necesito para revivirle?\n" + optionsQuestions.join("\n"));
    
    if (questionsOptions !== null) {
        if (questionsOptions.toLowerCase() === answerQuestion) {
            alert("¡Correcto! Debemos usar las Monedas.");
        } else {
            alert("Incorrecto.  ESTA NO ES LA ADECUADA.");
        }
    } else {
        alert("No proporcionaste una respuesta. ¡Intentémoslo de nuevo más tarde!");
    }
  }
  LevelFour();