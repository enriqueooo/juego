function LevelTen() { 
    let optionsQuestions = [
        "a) Reiniciar",
        "b) Regresar al lobby",
        "c) Empezar",
    ];
    
    let answerQuestion = "a";
    
    let questionsOptions = prompt("¿Si ya nos matan que debemos hacer?\n" + optionsQuestions.join("\n"));
    
    if (questionsOptions !== null) {
        if (questionsOptions.toLowerCase() === answerQuestion) {
            alert("¡Correcto! Debemos Regresar al lobby.");
        } else {
            alert("Incorrecto.  ESTA NO ES LA ADECUADA.");
        }
    } else {
        alert("No proporcionaste una respuesta. ¡Intentémoslo de nuevo más tarde!");
    }
  }
  
let nivelesPasados = 8; 

for (let i = 1; i <= nivelesPasados; i++) {
  console.log(`Has pasado el nivel ${i}`);
}
LevelFour();
  alert('fin del juego 🙃');
