//  Alle Elmente mit HTML-Tag "img" auf der Seite als Liste sammeln
let imageElements = document.querySelectorAll("img");

// Liste aus Bildlinks der Bildelemente erstellen
let imageUrls = [];

imageElements.forEach((image) => {
  imageUrls.push(image.src);
});

// Bisher gespeicherte Bilder aus dem Browser-Speicher laden
chrome.storage.local.get({ images: [] }, (data) => {
  // Neue + alte Bilder zusammenführen
  let allImages = data.images.concat(imageUrls);

  // Ergebnis wieder speichern
  chrome.storage.local.set({ images: allImages });
});
