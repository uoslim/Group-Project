class DrawingSTline extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.x = null;
        this.y = null;
    }


onMouseDown(coord,event){
    this.contextDraft.strokeStyle = inputColor;
    this.contextDraft.lineJoin = "round";
    this.contextDraft.lineWidth = inputWidth;
    this.contextReal.strokeStyle = inputColor;
    this.contextReal.lineJoin = "round";
    this.contextReal.lineWidth = inputWidth;
    this.contextReal.beginPath();
    this.contextReal.moveTo(coord[0],coord[1]);
    this.x = coord[0];
    this.y = coord[1];
}

onDragging(coord,event){
    this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
    this.contextDraft.beginPath();
    this.contextDraft.moveTo(this.x,this.y);
    this.contextDraft.lineTo(coord[0],coord[1]);
    this.contextDraft.stroke();
}
// onMouseLeave(coord,event){
//     this.contextReal.lineTo(coord[0],coord[1]);
//     this.contextReal.stroke();
//     this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
// }

onMouseUp(coord,event){
    this.contextReal.lineTo(coord[0],coord[1]);
    this.contextReal.stroke();
    this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
}
}

