function Home() {
  alert("Bienvenidos a FREE FIRE ⚔️");
  let name = prompt("Ingresa un nombre:");
  alert("Es un gusto tenerte por aquí: " + name);

  alert("FREE FIRE te da la bienvenida a este increíble mundo de las armas."+ name); 

  let answer = confirm("¿Deseas continuar?") 
  if (answer) {
      alert("¡Genial!.");
  } else {
      alert("¡Entendido! Si decides regresar, siempre serás bienvenido.");
  }

}
Home();
