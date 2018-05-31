class DrawingCurve extends PaintFunction {
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.clickCount = 0;
    }

    onMouseDown(coord,event){
        if (this.clickCount === 0){
            this.contextDraft.strokeStyle = inputColor;
            this.contextDraft.lineJoin = "round";
            this.contextDraft.lineWidth = inputPX;
            this.contextReal.strokeStyle = inputColor;
            this.contextReal.lineJoin = "round";
            this.contextReal.lineWidth = inputPX;
            this.x = coord[0];
            this.y = coord[1];
            this.contextReal.beginPath();
            this.contextReal.moveTo(this.x,this.y);
            
        } else if (this.clickCount === 1){
            
        }
    }

    onDragging(coord,event){
        if(this.clickCount === 0){
            this.xEnd = coord[0];
            this.yEnd = coord[1];
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.x,this.y);
            this.contextDraft.quadraticCurveTo(this.x,this.y,coord[0],coord[1]);
            this.contextDraft.stroke();
            
        } else if (this.clickCount === 1){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.x,this.y);
            this.contextDraft.quadraticCurveTo(coord[0],coord[1],this.xEnd,this.yEnd);
            this.contextDraft.stroke();
        }
    }

    onMouseUp(coord,event){
        if(this.clickCount === 0){
            this.clickCount = 1;
        } else if (this.clickCount === 1){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            
            this.contextReal.quadraticCurveTo(coord[0],coord[1],this.xEnd,this.yEnd);
            this.contextReal.stroke();
            this.clickCount = 0;
        }
    }

}