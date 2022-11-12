
const footer = document.querySelector('footer');

console.log(footer);
footer.addEventListener('click', ()=>{
    if(!document.fullscreenElement){
        document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen){
        document.exitFullscreen();
    }
})