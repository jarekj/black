const footer = document.querySelector('footer');
const colorInput = document.querySelector('#colorpicker');
const background = document.querySelector('html');

console.log(footer);
footer.addEventListener('click', ()=>{
    if(!document.fullscreenElement){
        document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen){
        document.exitFullscreen();
    }
})

colorInput.addEventListener('input', (e)=> {
    console.log(background)
    console.log(e.target.value);
    background.style.background =  e.target.value;

})