const intro = document.querySelector(".intro-section");
const title = document.querySelector("#site-name");
const tagline = document.querySelector("#tagline");
const scrollDown = document.querySelector("#scroll-down");
const contentSection = document.querySelector(".content-section");
const newView = document.querySelector('.new-view');
const scrollUp = document.querySelector("#scroll-up");
const backgroundImage = document.querySelector('.background-image > img');



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

    window.addEventListener('wheel', (event) => {
        if (event.deltaY > 0) {
        
            newView.scrollIntoView({ behavior: "smooth" });
        } else {
            
            intro.scrollIntoView({ behavior: "smooth" });
        }
    });
   
})

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const opacity = 1 - (scrollPosition / window.innerHeight) * 2;

    if (scrollPosition > 200) {
        newView.style.opacity = '1';
        scrollDown.style.opacity = "0";
        scrollUp.classList.remove('hidden');
    } else {
        newView.style.opacity = '0';
        scrollDown.style.opacity = "0.3";
        scrollUp.classList.add('hidden');
    }

    intro.style.opacity = opacity.toFixed(2);

    const backgroundImage = document.querySelector('.background-image img');
    console.log(backgroundImage)
    if (backgroundImage) {
        backgroundImage.style.opacity = - opacity.toFixed(2);
    }

    if (opacity > 0) {
        intro.style.animation = '40s linear infinite crawlingWall';
    } else {
        intro.style.animation = 'none';
    }
});

    


scrollDown.addEventListener("click", () => {

    newView.scrollIntoView({ behavior: "smooth" });

});

scrollUp.addEventListener("click", () => {

    intro.scrollIntoView({ behavior: "smooth" });

});





