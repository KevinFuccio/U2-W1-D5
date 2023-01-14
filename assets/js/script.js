let navBar = document.querySelector('.navBar');
let navButton = document.querySelector('.navLinks button')
window.onscroll = () =>{
    if(window.scrollY > 426){
        navBar.classList.add('navActive');
        navButton.classList.add('navLinksBtn-Active')
    }else {
        navBar.classList.remove('navActive');
        navButton.classList.remove('navLinksBtn-Active')
    }
};
let MLetter = document.querySelectorAll(
    "svg g[stroke-linecap='butt']"
    );

let intervallo = setInterval(() =>{
    let randomNum = Math.floor(Math.random() * MLetter.length)
    let randomM = MLetter[randomNum]
    randomM.style.transition = '1s'
    if(randomM.getAttribute("opacity") == 1){
        randomM.setAttribute("opacity", "0")
    }else{
        randomM.setAttribute("opacity","1")
    }
},40)
let stopIntervallo = () => {
    clearInterval(intervallo)
}


