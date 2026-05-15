// Eine Variable in der ein Link zu einem Bild gespeichert wird
let replaceURL = "https://www.bu.edu/files/2024/08/Hey-BU-Blog-Headers.jpg";

// Eine Liste aller Elementen auf einer Website mit dem HTML-Tag "img"
let elements = document.querySelectorAll("img");

// Für jedes der Bildelemente aus der Liste wird der Quell-Link ersetzt
elements.forEach((element) => {
   element.src = replaceURL;
});
