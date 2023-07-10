let cel_input = document.getElementById('celsius')
let fa_input = document.getElementById('fahren');

function celToFar(){
    let output = ( parseFloat(cel_input.value)*9/5) + 32;
    fa_input.value = parseFloat(output);
}

function farToCel() {
    let output = ( parseFloat(fa_input.value)-32)*5/9;
    cel_input.value = parseFloat(output);
}