const btn = document.getElementById("themeToggle"); //Almacenar el boton

btn.addEventListener("click", function () {
  var setTheme = document.body;

  setTheme.classList.toggle("darkbody"); // Cambia el body por uno distinto con elementos oscuros

  var theme; // Almacenar el tema actual

  if(setTheme.classList.contains("darkbody")){
    theme = "DARK";
  }
  else{
    theme = "LIGHT";
  }

  localStorage.setItem("PageTheme", JSON.stringify(theme));  // Almacenar localmente el tema a partir de "theme" para mantenerlo entre paginas
});

let getTheme = JSON.parse(localStorage.getItem("PageTheme")); // Obtenemos el tema de la pagina del localStorage

if(getTheme=="DARK"){ 	// Si es dark nos aseguramos que se mantenga el oscuro
  document.body.classList = "darkbody";
}