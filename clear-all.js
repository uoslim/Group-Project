class ClearAll {
    constructor(contextReal,contextDraft){
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }
    clear(){
        this.contextReal.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    }
}