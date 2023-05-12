
const item = document.querySelector(`#categories`)
const liItem = item.querySelectorAll(`.item`);
console.log(`
    Number of categories: ${liItem.length}`);

liItem.forEach(item => {
    const title = item.querySelector(`h2`).textContent;
    const list = item.querySelectorAll(`li`);
    console.log(`
    Category: ${title},
    Elements: ${list.length}`)
})




