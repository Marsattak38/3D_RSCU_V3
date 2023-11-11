const intro = document.querySelector(".intro-section");
const title = document.querySelector("#site-name");
const tagline = document.querySelector("#tagline");
const scrollDown = document.querySelector("#scroll-down");
const contentSection = document.querySelector(".content-section");
const newView = document.querySelector('.new-view');




document.addEventListener("DOMContentLoaded", ()=>{
    
    setTimeout(()=> {
        title.classList.remove('hidden');
        title.style.transform = 'translateX(0)';
    }, 1500);

    setTimeout(()=> {
        tagline.classList.remove('hidden');
        tagline.style.transform = 'translateX(0)';
    }, 3000);

    setTimeout(()=> {
        scrollDown.classList.remove('hidden'); 
        scrollDown.style.opacity = "30%"; 
        tagline.style.transform = 'translateY(0)';
    }, 5000);

   
})



window.addEventListener('scroll', () => {

    const scrollPosition = window.scrollY;

    if (scrollPosition > 200) {
        newView.style.opacity = '1';
        scrollDown.style.opacity = "0"; 

    } else {
        newView.style.opacity = '0';
        scrollDown.style.opacity = "0.3";
    }
});

scrollDown.addEventListener("click", () => {

    newView.scrollIntoView({ behavior: "smooth" });
});


