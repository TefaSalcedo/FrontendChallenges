// Cerrar el Modal Feed Back
document.addEventListener("DOMContentLoaded", () => {

  // Get the close icon element
  const cerrar = document.getElementById("iconoCerrar");
  cerrar.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("Click Icon");
    cerrarModal();
  });

  // Get the cancel button element
  const cancelButton = document.getElementById("cancel");
  cancelButton.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("click Cancel Button");
    cerrarModal();
  });

//   Get the body element
  const outModal = document.body
  const modal = document.getElementById("rectangulo");
  outModal.addEventListener("click", function (event) {
        event.stopPropagation();
        if (!modal.contains(event.target)) {
            console.log("Click fuera del modal");
            cerrarModal();
        }
  });
//   Open Modal
    const openModal=document.getElementById("access");
    openModal.addEventListener("click",function(event){
        event.stopPropagation();
        console.log("click open modal")
        modal.style.visibility = "visible";
        access.style.visibility = "hidden"
    });
});


// Function to close the modal
function cerrarModal() {
    rectangulo.style.visibility = "hidden";
    access.style.visibility = "visible";
  }

// Decoración a los numeros
document.addEventListener("DOMContentLoaded", () => {
    for (let i = 1; i <= 10; i++) {
      const num = document.getElementById(`n${i}`);
      num.addEventListener("click", function () {

        // Deselect painted buttons:
        const currentlyPaintedButton = document.querySelector('.painted');
            if (currentlyPaintedButton) {
                // reset border color, font size, font weight
                currentlyPaintedButton.style.borderColor = ''; 
                currentlyPaintedButton.style.fontSize = ''; 
                currentlyPaintedButton.style.fontWeight = '';   
                // remove the 'painted' class 
                currentlyPaintedButton.classList.remove('painted');
            }
        // clicked button -> Apply styling 
        num.style.borderColor = "#b1b9d8";
        num.style.fontWeight = "bold";
        num.style.fontSize = "30px";
        num.classList.add('painted'); // add the 'painted' class for later identification
        });
    }
    // Enviar FeedBack
    const submit=document.getElementById("submit")
    submit.addEventListener("click",function(event){
        event.stopPropagation();
        const paintedElement=document.querySelector(".painted");        
        if (paintedElement) {
            const paintedElementId = paintedElement.id;
            console.log("ID of the painted element:", paintedElementId);
            cerrarModal();
        }
    });
});


