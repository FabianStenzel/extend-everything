// INSERT A URL OF AN IMAGE
let replaceURL = "https://www.bu.edu/files/2024/08/Hey-BU-Blog-Headers.jpg";

//GET AN ARRAY OF ALL IMAGES ON A PAGE
let elements = document.getElementsByTagName("img");


//REPLACE THE URL OF THE IMAGES WITH YOUR SPECIFIC URL
elements.forEach((element) => {
   element.src = replaceURL;
});
