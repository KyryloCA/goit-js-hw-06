// ищем элементы

const currentRange = document.querySelector("#font-size-control");
const targetText = document.querySelector("#text");

// меняем высоту текста
currentRange.addEventListener('input', (el)=>{
        targetText.style.fontSize=`${currentRange.value}px`;
});

