const wt1= new Image();
wt1.src = "assets/wt1.png";
const wt2= new Image();
wt2.src = "assets/wt2.png";
const wt3= new Image();
wt3.src = "assets/wt3.png";
[wt1, wt2, wt3].forEach((imagen,i) => {
    imagen.style.position = "absolute";
    imagen.style.left = "0px";
    imagen.style.top = "0px";
    imagen.style.width = "90%";
    imagen.style.height = "auto";
    imagen.style.zIndex = "1";
    imagen.style.userSelect = "none";
    imagen.style.display = "none";
    container.appendChild(imagen);
});
let currentWt = 0;
function alternateWT(){
    if(currentWt == 0){
        wt1.style.display = "block";
        wt2.style.display = "none";
        wt3.style.display = "none";
        currentWt = 1;
    }else if(currentWt == 1){
        wt1.style.display = "none";
        wt2.style.display = "block";
        wt3.style.display = "none";
        currentWt = 2;
    }else if(currentWt == 2){
        wt1.style.display = "none";
        wt2.style.display = "none";
        wt3.style.display = "block";
        currentWt = 0;
    }
    setTimeout(alternateWT, 80);
}
alternateWT();