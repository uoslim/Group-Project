let inputWidth = 5;

$("#inputWidth").on("input",function(w){
    console.log(w);
    inputWidth = w.target.value;
    return inputWidth;
})