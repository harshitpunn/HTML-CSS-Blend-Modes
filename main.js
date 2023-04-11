const btnMode = document.querySelector('.btn-mode');
const pictures = document.querySelectorAll('.picture');
const colorMode = document.querySelector('.color-mode');   
const pictureBox=  document.querySelector('.pictures');
const root = document.documentElement;


btnMode.addEventListener('click',function(){
    document.body.classList.toggle('menu-open');
});

colorMode.addEventListener('change',function(e){

    if(e.target.id == "color-picker"  ){
        const bgc = e.target.value;
        pictures.forEach((picture)=>{
            picture.style.backgroundColor = bgc;
        })
    }
    else{
    
    const blendMode = this.querySelector('input:checked').value;
    root.style.setProperty("--bmode", blendMode);
    }
})

pictures.forEach((picture) => {
    picture.style.backgroundColor = randColor();
});


function randColor(){
    function rand(){
        return Math.floor(Math.random() * 200);
    }
    const rgb = `rgb(${rand()},${rand()},${rand()})`;
    return rgb;
}



//secret message

pictureBox.addEventListener('click', function(e){
    e.target.parentElement.classList.toggle('message-up');
});