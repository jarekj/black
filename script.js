
const footer = document.querySelector('footer');


footer = document.addEventListener('click', ()=>{
    if(!document.fullscreenElement){
        document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen){
        document.exitFullscreen();
    }
})