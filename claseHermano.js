class Hermano{
    constructor(imagenes, animatedPause=false){
        this.imagenes = imagenes;
        this.currentFigure=imagenes[0];
        this.imagenes.forEach((element, i) => {
            element.style.position = "absolute";
            element.style.left = "0px";
            element.style.top = "0px";
            element.style.transform = 'translateX(8%)';
            element.style.zIndex = "1";
            element.style.userSelect = "none";
            element.style.display = "none";
            container.appendChild(element);
        });
    }
    alternateFigures(){
        if(!animatedPause){
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