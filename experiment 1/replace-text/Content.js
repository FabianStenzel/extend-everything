// Alle Textelemente auf der Website auswählen
let elements = document.querySelectorAll("p, h1, h2, h3, a, span, li");

// Durch alle Elemente gehen
elements.forEach((element) => {
  // Die Schriftfarbe der Elemente verändern
  element.style.color = "blue";

  // Den Text der Elemente austauschen
  element.innerText = "HIER STEHT DEIN TEXT";
});
