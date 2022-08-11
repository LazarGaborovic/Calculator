function clearScreen() {
    document.getElementById('result').value = "";

}
function display(value) {
    document.getElementById('result').value += value;
}
function calculate() {
    var calculating = document.getElementById('result').value
    var  digitron = eval(calculating);
    document.getElementById('result').value=digitron;
}
