class Hermano{
    constructor(imagenes, x, y, animatedPause=false){
        this.imagenes = imagenes;
        this.x = x;
        this.y = y;
        this.animatedPause = animatedPause;
        this.currentFigure=imagenes[0];
        this.imagenes.forEach((element, i) => {
            element.style.position = "absolute";
            element.style.left = `${this.x}px`;
            element.style.top = `${this.y}px`;
            // element.style.width = "90%";
            // element.style.height = "auto";
            // element.style.transform = 'translateX(8%)';
            element.style.zIndex = "1";
            // element.style.userSelect = "none";
            container.appendChild(element);
            element.style.display = "none";
        });
    }
    minMaxRandom(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    }
    alternateFigures(){
        if(!this.animatedPause){
            this.currentFigure.style.display='none';
            this.currentFigure = this.imagenes[(this.imagenes.indexOf(this.currentFigure)+1)%this.imagenes.length];
        }
        this.currentFigure.style.display='block';
        setTimeout(()=>{this.alternateFigures()}, 80);
    }
    pause(){
        this.animatedPause = true;
    }
}