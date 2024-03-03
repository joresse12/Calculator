const display_field = document.getElementById('display_field');

function displayNumber(val) {
    display_field.value += val;
    console.log(display_field.value);
}
function clearAll() {
     display_field.value = ' ';
}
function clearOne() { 
    display_field.value = display_field.value.toString().splice(0, -1);
}
function equal() {
     display_field.value = eval(display_field.value).toString();
 }