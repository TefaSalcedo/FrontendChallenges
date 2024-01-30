document.addEventListener("DOMContentLoaded", () => {
  const stars = [
    "miElemento1",
    "miElemento2",
    "miElemento3",
    "miElemento4",
    "miElemento5",
  ];

  stars.forEach((starId,index) => {
    const star = document.getElementById(starId);
    star.addEventListener("mouseover", () => {
      const path = star.querySelector("svg path");
      path.setAttribute("fill", "#FACC15");
      pintarEstrellas(starId, stars);
    });
    star.addEventListener("click", () => {
      const path = star.querySelector("svg path");
      path.setAttribute("fill", "#FACC15");
      pintarEstrellas(starId, stars);
      textos(index);
      
    });
  });
});

function pintarEstrellas(starId, stars) {
  stars.forEach((idStar) => {
    const star = document.getElementById(idStar);
    if (idStar <= starId) {
      const path = star.querySelector("svg path");
      path.setAttribute("fill", "#FACC15");
    } else {
      const path = star.querySelector("svg path");
      path.setAttribute("fill", "#E2E8F0");
    }
  });
}

function textos(numero) {
  const texto = document.getElementById("texto");
  const parrafo = ["We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.","We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.",
    "Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve.",
    "Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support.",
    "Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our platform",
  ];
  texto.textContent = parrafo[numero];
}
