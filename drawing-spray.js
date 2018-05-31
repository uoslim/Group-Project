var clientX, clientY, timeout, ctx, maxRadius, density;
function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}
class DrawingSpray extends PaintFunction{
    constructor(contextReal){
        super();
        //this.context = contextReal;            
        ctx = contextReal;
    }

    

    onMouseDown(coord,event){
        ctx.fillStyle = inputColor;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        density = inputWidth*50;
        maxRadius = inputWidth*5;
        clientX = coord[0];
        clientY = coord[1];

        timeout = setTimeout(function draw() {
            for (var i = density; i--; ) {
              var angle = getRandomFloat(0, Math.PI*2);
              var radius = getRandomFloat(0, maxRadius);
              ctx.fillRect(
                clientX + radius * Math.cos(angle),
                clientY + radius * Math.sin(angle), 
                1, 1);
            }
            if (!timeout) return;
            timeout = setTimeout(draw, 50);
        }, 50);
    }

    onDragging(coord,event){
        //this.draw(coord[0],coord[1]);
    }

    onMouseMove(coord, event){
        clientX = coord[0];
        clientY = coord[1];
    }
    onMouseUp(){
        clearTimeout(timeout);
    }
    onMouseLeave(){
        clearTimeout(timeout);
    }
    onMouseEnter(){}

    draw(x,y){
        //this.context.lineTo(x,y);
        //this.context.moveTo(x,y);
        //this.context.closePath();
        //this.context.stroke();    
    }
}    

/*
var el = document.getElementById('c');
var ctx = el.getContext('2d');
var clientX, clientY, timeout;
var density = 50;

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

el.onmousedown = function(e) {
  ctx.lineJoin = ctx.lineCap = 'round';
  clientX = e.clientX;
  clientY = e.clientY;
  
  timeout = setTimeout(function draw() {
    for (var i = density; i--; ) {
      var angle = getRandomFloat(0, Math.PI*2);
      var radius = getRandomFloat(0, 20);
      ctx.fillRect(
        clientX + radius * Math.cos(angle),
        clientY + radius * Math.sin(angle), 
        1, 1);
    }
    if (!timeout) return;
    timeout = setTimeout(draw, 50);
  }, 50);
};
el.onmousemove = function(e) {
  clientX = e.clientX;
  clientY = e.clientY;
};
el.onmouseup = function() {
  clearTimeout(timeout);
};*/