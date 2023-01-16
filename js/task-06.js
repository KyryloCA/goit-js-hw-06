
//ищем элементы
const inputField = document.querySelector('#validation-input');
const dataLength = inputField.dataset.length;
const classCollection = inputField.classList;

let currentTextLength = 0;

// анализируем ввод
inputField.addEventListener('blur', (el)=> {
    
    // красим рамочки
    if (el.currentTarget.textLength !== 6) 
        {
        if(classCollection.contains("valid"))
            {
            classCollection.remove("valid");
            };
        classCollection.add("invalid");
        } else {if(classCollection.contains("invalid"))
                    {
                        classCollection.remove("invalid");
                    };
                    classCollection.add("valid");
                } 
} );



