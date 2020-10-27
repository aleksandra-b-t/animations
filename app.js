const card = document.querySelector('.card');
const container = document.querySelector('.container');


container.addEventListener("mousemove", (e) => {
    let xPoz = (window.innerWidth / 2 - e.pageX)/ 10;
    let yPoz = (window.innerHeight / 2 - e.pageY) / 10;

    card.style.transform = `rotateY(${xPoz}deg) rotateX(${yPoz}deg)`
})

container.addEventListener("mouseleave", (e) => {
card.style.transform = `rotateY(0deg) rotateX(0deg)`;
})