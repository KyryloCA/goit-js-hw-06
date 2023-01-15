function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// ищем элементы
const buttonInput = document.querySelector('.widget button');
const outputTextObj = document.querySelector('.color');
const bodyObj = document.querySelector('body');





console.log(buttonInput);
console.log(outputTextObj);
console.log(bodyObj.classList);
//свойства
console.log(outputTextObj.textContent);


// вешаем на кнопку событие

buttonInput.addEventListener('click', (el)=>{
  const generatedColor = getRandomHexColor();
  console.log(bodyObj.style.backgroundColor = generatedColor);
  outputTextObj.textContent = generatedColor;

});
