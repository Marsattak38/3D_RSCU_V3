const backButton = document.querySelector(".custom-button-back")
const PLA1 = document.querySelector(".PLA_1")
const PETG1= document.querySelector(".PETG_1")
const PLA2 = document.querySelector(".PLA_2")
const PETG2= document.querySelector(".PETG_2")
const PLA3 = document.querySelector(".PLA_3")
const PETG3= document.querySelector(".PETG_3")


backButton.addEventListener("click", ()=>{
    window.history.back();
})


document.addEventListener("DOMContentLoaded", ()=>{
    
    setTimeout(()=> {
        PLA1.style.opacity = "1";
        PETG1.style.opacity = "1";
        PLA1.style.transform = "translateX(0)";
        PETG1.style.transform = "translateX(0)";
        
    }, 600);

    setTimeout(()=> {
        PLA2.style.opacity = "1";
        PETG2.style.opacity = "1";
        PLA2.style.transform = "translateX(0)";
        PETG2.style.transform = "translateX(0)";

    }, 1200);

    setTimeout(()=> {
        PLA3.style.opacity = "1";
        PETG3.style.opacity = "1";
        PLA3.style.transform = "translateX(0)";
        PETG3.style.transform = "translateX(0)";
        
    }, 1800);

   
})
