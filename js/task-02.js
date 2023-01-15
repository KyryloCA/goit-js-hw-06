const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const liCreator = ingredients
.map(ingredientName => 
  `<li class="item">${ingredientName}</li>`
)
.join("");

const itemList = document.querySelector("#ingredients");
itemList.innerHTML = liCreator;
