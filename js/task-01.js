const getElementsItem = document.querySelectorAll('.item');

console.log(`Number of categories: ${getElementsItem.length}`);

getElementsItem.forEach(element => {
  const getElementTitle = element.querySelector('h2');
  const getElementsLi = element.querySelectorAll('li');

  console.log(`Category: ${getElementTitle.textContent}`);
  console.log(`Elements: ${getElementsLi.length}`);
});