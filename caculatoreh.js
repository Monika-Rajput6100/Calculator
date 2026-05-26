const display = document.getElementById("display");
const calculator = document.getElementById("calculator");
const toggleBtn = document.getElementById("toggleBtn");
const buttons = document.querySelectorAll(".buttons button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;
    const action = button.dataset.action;

    if (action === "clear") {
      display.textContent = "0";
    } 
    else if (action === "calculate") {
      try {
        display.textContent = Function(
          "return " + display.textContent
        )();
      } catch {
        display.textContent = "Error";
      }
    } 
    else if (value) {
      if (display.textContent === "0") {
        display.textContent = value;
      } else {
        display.textContent += value;
      }
    }
  });
});

toggleBtn.addEventListener("click", () => {
  calculator.classList.toggle("light");
  calculator.classList.toggle("dark");
});