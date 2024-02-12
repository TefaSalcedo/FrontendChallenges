// Add event listeners when the DOM has fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Define array of star element IDs
  const stars = [
    "miElemento1",
    "miElemento2",
    "miElemento3",
    "miElemento4",
    "miElemento5",
  ];

  // Loop over each star ID
  stars.forEach((starId,index) => {
    // Get the star element by its ID
    const star = document.getElementById(starId);
    // Add mouseover event listener to the star
    star.addEventListener("mouseover", () => {
      // Select the path of the SVG within the star
      const path = star.querySelector("svg path");
      // Change the fill color of the path
      path.setAttribute("fill", "#FACC15");
      // Call function to update the fill color of all stars up to the hovered star
      pintarEstrellas(starId, stars);
    });
    // Add click event listener to the star
    star.addEventListener("click", () => {
      // Select the path of the SVG within the star
      const path = star.querySelector("svg path");
      // Change the fill color of the path
      path.setAttribute("fill", "#FACC15");
      // Call function to update the fill color of all stars up to the clicked star
      pintarEstrellas(starId, stars);
      // Call function to update the text based on the index of the clicked star
      textos(index);  
    });
  });
});

// Function to update the fill color of all stars up to a certain star
function pintarEstrellas(starId, stars) {
  // Loop over each star ID
  stars.forEach((idStar) => {
    // Get the star element by its ID
    const star = document.getElementById(idStar);
    // If the current star ID is less than or equal to the specified star ID
    if (idStar <= starId) {
      // Select the path of the SVG within the star
      const path = star.querySelector("svg path");
      // Change the fill color of the path
      path.setAttribute("fill", "#FACC15");
    } else {
      // Select the path of the SVG within the star
      const path = star.querySelector("svg path");
      // Change the fill color of the path
      path.setAttribute("fill", "#E2E8F0");
    }
  });
}

// Function to update the text based on the index of a star
function textos(numero) {
  // Get the text element by its ID
  const texto = document.getElementById("texto");
  // Define array of possible text values
  const parrafo = [
    "We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.",
    "We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.",
    "Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve.",
    "Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support.",
    "Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our platform",
  ];
  // Update the text content with the value at the specified index
  texto.textContent = parrafo[numero];
}
