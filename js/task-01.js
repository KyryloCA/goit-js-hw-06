const catListObject = document.querySelector("#categories");
const catListItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${catListObject.childElementCount}`);

console.log(` `);

const listEachObject = catListItems.forEach(element => {
        
    const titleObject = element.querySelector("h2");
        console.log(`Category: ${titleObject.textContent}`);
    
    const itemsCount = element.querySelectorAll("li");
        console.log(`Elements: ${itemsCount.length}`);

    console.log(` `);
    
    
});



