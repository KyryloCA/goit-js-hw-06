let counterValue = 0;

// ищем объекты

const increaseButton = document.querySelector('button[data-action="increment"]');
const decreaseButton = document.querySelector('button[data-action="decrement"]');
const counterDislay = document.querySelector('#value');

// вешаем события

increaseButton.addEventListener("click", () => {
    counterValue++;
    console.log(counterValue);
    counterDislay.textContent = counterValue;
});

decreaseButton.addEventListener("click", () => {
    counterValue--;
    console.log(counterValue);
    counterDislay.textContent = counterValue;
});



