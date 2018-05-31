let inputColor = "#000000";
let inputPX = 5;

$("#inputColor").on("input",function(ee){
    inputColor = ee.target.value;
    return inputColor;
})

$("#inputPX").on("input",function(gg){
    inputPX = gg.target.value;
    return inputPX;
})