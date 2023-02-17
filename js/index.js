console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  const pizzaSize1 = pizzaInput1.value;
  const pizzaSize2 = pizzaInput2.value;
  const pizzaGain = calculatePizzaGain(pizzaSize1, pizzaSize2);
  output.textContent = Math.round(pizzaGain) + "%";
  updatePizzaDisplay(pizza1, pizzaSize1);
  updatePizzaDisplay(pizza2, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  const pizzaSize1 = pizzaInput1.value;
  const pizzaSize2 = pizzaInput2.value;
  const pizzaGain = calculatePizzaGain(pizzaSize1, pizzaSize2);
  output.textContent = Math.round(pizzaGain) + "%";
  updatePizzaDisplay(pizza1, pizzaSize1);
  updatePizzaDisplay(pizza2, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

// Task 1

function calculatePizzaGain(diameter1, diameter2) {
  const area1 = Math.pow(diameter1 / 2, 2) * Math.PI;
  const area2 = Math.pow(diameter2 / 2, 2) * Math.PI;
  return ((area2 - area1) / area1) * 100;
}

// Task 2

function updatePizzaDisplay(pizzaElement, newSize) {
  const displaySize = (newSize / 24) * 100;
  pizzaElement.style.width = displaySize + "px";
}

// Task 3

function updateOutputColor(size1, size2) {
  const pizzaGain = calculatePizzaGain(size1, size2);
  outputSection.style.backgroundColor =
    pizzaGain < 0 ? "var(--red)" : "var(--green)";
}
