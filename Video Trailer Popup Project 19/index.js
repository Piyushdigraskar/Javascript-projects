const btnEl = document.querySelector('.btn');
const closeIconButtonEl = document.querySelector('.close-icon');

const videoEl = document.querySelector("video");

const trailerContainerEl = document.querySelector('.trailer-container');

btnEl.addEventListener('click', ()=>{
    trailerContainerEl.classList.remove("active");
})

closeIconButtonEl.addEventListener('click', ()=>{
    trailerContainerEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
})