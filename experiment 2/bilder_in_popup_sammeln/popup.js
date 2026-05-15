//HTML-Element, in dem alle Bilder angezeigt werden
const list = document.getElementById("list");

// Holt die gespeicherten Bilder aus dem Chrome-Speicher
chrome.storage.local.get({ images: [] }, (data) => {
  // Leert die Anzeige, damit nichts doppelt erscheint
  list.innerHTML = "";

  // Geht jedes gespeicherte Bild (URL) durch
  data.images.forEach((url) => {
    // Erstellt ein neues Bild-Element
    const img = document.createElement("img");

    // Setzt die Bild-Adresse
    img.src = url;

    // Fügt das Bild auf der Seite ein
    list.appendChild(img);
  });
});

// Button zum Löschen aller gespeicherten Bilder
document.getElementById("clear").onclick = () => {
  //Storage wird geleert
  chrome.storage.local.set({ images: [] }, () => {
    list.innerHTML = "";
  });
};
