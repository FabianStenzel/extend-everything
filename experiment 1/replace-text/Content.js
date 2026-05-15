// Alle Textelemente auf der Website auswählen
let elements = document.querySelectorAll("body *");

// Durch alle Elemente gehen
elements.forEach((element) => {
  // Prüfen, ob das Element direkten Text enthält
  if (element.childNodes.length > 0) {
    element.childNodes.forEach((node) => {
      // Nur Textknoten verändern
      if (node.nodeType === Node.TEXT_NODE) {
        // Leeren Text ignorieren
        if (node.textContent.trim() !== "") {
          // Text ersetzen
          node.textContent = "das ist eine testtext";
        }
      }
    });
  }

  // OPTIONAL:
  // Textgröße verändern

  element.style.color = "blue";
});
