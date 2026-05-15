// 1. Alle Bilder auf der Seite finden
const images = document.querySelectorAll("img");

// 2. Nur die Bild-Links (URLs) herausziehen
const imageUrls = [];

images.forEach((img) => {
  imageUrls.push(img.src);
});

// 3. In den Browser-Speicher schreiben (Erinnerung der Extension)
chrome.storage.local.get({ images: [] }, (data) => {
  // alte + neue Bilder zusammenführen
  const allImages = data.images.concat(imageUrls);

  chrome.storage.local.set({ images: allImages });

  // 4. Alle bisher gespeicherten Bilder anzeigen
  allImages.forEach((url) => {
    // neues Bild-Element erstellen
    const img = document.createElement("img");
    img.src = url;

    // Größe festlegen
    img.style.width = "80px";

    // zufällige Position auf dem Bildschirm
    img.style.position = "fixed";
    img.style.left = Math.random() * window.innerWidth + "px";
    img.style.top = Math.random() * window.innerHeight + "px";

    // Bild in die Website einfügen
    document.body.appendChild(img);
  });
});
