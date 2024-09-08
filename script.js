const display = document.getElementById("display");
function clearDisplay() {
  display.value = "";
}
function displaybtn(input) {
  display.value += input;
}
function calculate() {
  try {
    let tot = eval(display.value);
    display.value = tot;
  } catch (err) {
    display.value = "ERROR";
  }
}
