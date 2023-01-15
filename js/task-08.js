
//ищем все объекты
const submitForm = document.querySelector(".login-form");


//подготавливаем объект
const resultFormObject = {
};

// вешаем события на элементы

submitForm.addEventListener('submit', (elem)=>{
    elem.preventDefault();

    // нахожу правильные элементы
    const loginName = submitForm.elements[0].name;
    const loginValue = submitForm.elements[0].value;
    const passwordName = submitForm.elements[1].name;
    const passwordValue = submitForm.elements[1].value;
   
    // заполняю объект
    resultFormObject[loginName]=loginValue;
    resultFormObject[passwordName]=passwordValue;

    // нахожу пустую строку и делаю alert
    if (submitForm.elements[0].value === "" || submitForm.elements[1].value === ""){
        window.alert("You missed something! All fields should be filled")
    } else {
        console.log(resultFormObject);
        submitForm.reset();
    } ;

});


