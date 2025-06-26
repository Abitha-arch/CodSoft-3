// Get the display element
const display = document.getElementById("display");

// Append clicked value to the display
function appendValue(value) {
  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Evaluate the expression in the display
function calculate() {
  try {
    // Use eval to evaluate the input
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}