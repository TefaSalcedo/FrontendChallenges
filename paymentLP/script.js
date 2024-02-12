document.addEventListener("DOMContentLoaded",()=>{
    const hamburguesa=document.getElementById("hello")
    hamburguesa.addEventListener("click", function () {
        console.log("Click");
        document.getElementById("icon1").style.display = "none";
        document.getElementById("icon2").style.display = "block";

        const dropdownMenu = document.getElementById("dropdownMenu");
        console.log (dropdownMenu)
        console.log (dropdownMenu.style)
        console.log (dropdownMenu.style.display)
        if (dropdownMenu.style.display === "none") {
            
            dropdownMenu.style.display = "block";
            document.getElementById("icon1").style.display = "block";
            document.getElementById("icon2").style.display = "none";
        } else {
          dropdownMenu.style.display = "none";
        }
        
      });
    
});
