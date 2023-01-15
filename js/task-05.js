
// ищем объекты

const inputField = document.querySelector('#name-input');
const outputObject = document.querySelector('#name-output');


// вешаем события

inputField.addEventListener("input", () => {
    if (inputField.value===""){outputObject.textContent="Anonymous"} else {outputObject.textContent=inputField.value;};
    
});
